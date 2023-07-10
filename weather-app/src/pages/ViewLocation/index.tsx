import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import * as openWeatherAPI from '../../api/openWeather.api';
import { ForecastDataPoint } from '../../models/WeatherData';
import useReduxSelector from '../../hooks/useReduxSelector';
import ForecastChart from '../../components/ForecastChart';
import { ROUTE_PATHS } from '../../routes';

/** 1 hour */
const DATA_CACHE_TIME = 60 * 60 * 1000;

function ViewLocation() {
  const { id = 'fallback_id' } = useParams();
  const locationData = useReduxSelector((state) => state.locations.locationById[id] ?? { lat: 0, lon: 0 });

  React.useEffect(() => {
    // TODO: redirect if no data
  }, [locationData]);

  // NOTE: Rounding nearby coordinates to get the most out of caching
  const lat = Math.round(locationData.lat * 25) / 25; // max ~5km diff
  const lon = Math.round(locationData.lon * 25) / 25; // max ~5km diff

  const [queryKey, queryFn] = React.useMemo(() => [
    ['forecast', { lat, lon }],
    () => openWeatherAPI.getForecast({ lat, lon })
  ], [lat, lon]);

  const { isLoading, data } = useQuery({ queryKey, queryFn, cacheTime: DATA_CACHE_TIME });

  const chartData = React.useMemo(
    () => data?.list.map<ForecastDataPoint>((dataPoint) => ({
      key: dataPoint.dt_txt,
      temperature: dataPoint.main.temp,
      pressure: dataPoint.main.pressure,
      humidity: dataPoint.main.humidity,
      precipitation: dataPoint.pop,
    })) ?? [],
    [data]
  );

  return (
    <>
      <Row>
        <Col xs={10}>
          <h2>Weather at {locationData.name}</h2>
        </Col>
        <Col xs={2}>
          <Link to={ROUTE_PATHS.HOME}>Back</Link>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          {isLoading
            ? <Spinner animation="border" variant="primary" />
            : <ForecastChart data={chartData} tempUnit="C" />
          }
        </Col>
      </Row>
    </>
  );
}

export default ViewLocation;
