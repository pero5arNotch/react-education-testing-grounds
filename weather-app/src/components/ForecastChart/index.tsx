import React from 'react';
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Legend, CartesianGrid, Area, Bar, Line, Tooltip } from 'recharts';

import { ForecastDataPoint } from '../../models/WeatherData';
import * as colors from '../../constants/colors';
import { TemperatureConversion } from '../../utils/weather.utils';

import { formatTimeTick, renderDateTick } from './helpers';

import styles from './index.module.scss';

interface Props {
  data: ForecastDataPoint[];
  tempUnit?: 'K' | 'C' | 'F';
}

function ForecastChart(props: Props) {
  const { data, tempUnit = 'K' } = props;

  const convertTemp = React.useMemo(() => {
    switch (tempUnit) {
      case 'K': return (temp: number) => temp;
      case 'C': return TemperatureConversion.kelvinToCelsius;
      case 'F': return TemperatureConversion.kelvinToFahrenheit;
    }
  }, [tempUnit]);

  const tempUnitTxt = tempUnit === 'K' ? ' K' : ` °${tempUnit}`;

  const formattedData = React.useMemo(() => data.map((fdp) => ({
    key: fdp.key,
    temp: Math.round(convertTemp(fdp.temperature) * 10) / 10,
    humidity: fdp.humidity,
    precipitation: fdp.precipitation * 100,
  })), [data, convertTemp]);

  return (
    <div>
      <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={formattedData} margin={{ top: 20, bottom: 20 }}>
          <XAxis dataKey="key" tickFormatter={formatTimeTick} />
          <XAxis dataKey="key" axisLine={false} tickLine={false} interval={0} height={1} scale="band" tick={renderDateTick} xAxisId="groupedKeys" />
          <YAxis yAxisId="left" unit={tempUnitTxt} />
          <YAxis yAxisId="right" orientation="right" unit="%" />
          <Tooltip />
          <Legend verticalAlign="top" height={30} />
          <CartesianGrid stroke={colors.SECONDARY} strokeDasharray="3 3" />
          <Area
            dataKey="precipitation"
            fill={colors.INFO}
            name="Probability of Precipitation"
            stroke={colors.INFO}
            strokeWidth={2}
            type="monotone"
            unit="%"
            yAxisId="right"
          />
          <Bar
            barSize={15}
            className={styles['temp-bar']}
            dataKey="temp"
            fill={colors.DANGER}
            fillOpacity={1}
            name="Temperature"
            unit={tempUnitTxt}
            yAxisId="left"
          />
          <Line
            dataKey="humidity"
            name="Humidity"
            stroke={colors.SUCCESS}
            strokeWidth={2}
            type="monotone"
            unit="%"
            yAxisId="right"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ForecastChart;