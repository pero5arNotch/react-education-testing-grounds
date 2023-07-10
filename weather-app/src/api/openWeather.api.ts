import axios from 'axios';

import { OPEN_WEATHER_API_KEY } from '../constants/env';

const appid = OPEN_WEATHER_API_KEY;

const apiClient = axios.create();

interface GetForecastParams {
  lat: number;
  lon: number;
}
interface GetForecastResponse {
  /** Internal parameter */
  cod: unknown;
  /** Internal parameter */
  message: unknown;
  /** A number of timestamps returned in the API response */
  cnt: number;
  list: Array<{
    /** Time of data forecasted, unix, UTC */
    dt: number;
    main: {
      /** Temperature. Unit Default: Kelvin */
      temp: number;
      /** This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin */
      feels_like: number;
      /** Minimum temperature at the moment of calculation */
      temp_min: number;
      /** Maximum temperature at the moment of calculation */
      temp_max: number;
      /** Atmospheric pressure on the sea level by default, hPa */
      pressure: number;
      /** Atmospheric pressure on the sea level, hPa */
      sea_level: number;
      /** Atmospheric pressure on the ground level, hPa */
      grnd_level: number;
      /** Humidity, % */
      humidity: number;
      /** Internal parameter */
      temp_kf: unknown;
    };
    weather: {
      /** Weather condition id */
      id: number;
      /** Group of weather parameters (Rain, Snow, Extreme etc.) */
      main: string;
      /** Weather condition within the group */
      description: string;
      /** Weather icon id */
      icon: string;
    };
    clouds: {
      /** Cloudiness, % */
      all: number;
    };
    wind: {
      /** Wind speed. Unit Default: meter/sec */
      speed: number;
      /** Wind direction, degrees (meteorological) */
      deg: number;
      /** Wind gust. Unit Default: meter/sec */
      gust: number;
    };
    /** Average visibility, metres. The maximum value of the visibility is 10km */
    visibility: number;
    /** Probability of precipitation. The values of the parameter vary between 0 and 1, where 0 is equal to 0%, 1 is equal to 100% */
    pop: number;
    rain?: {
      /** Rain volume for last 3 hours, mm */
      '3h': number;
    };
    snow?: {
      /** Snow volume for last 3 hours, mm */
      '3h': number;
    };
    sys: {
      /** Part of the day (n - night, d - day) */
      pod: 'n' | 'd'
    };
    /** Time of data forecasted, ISO, UTC */
    dt_txt: string;
  }>;
  /** @deprecated built-in geocoder data */
  city?: Record<string, unknown>;
}
export async function getForecast(params: GetForecastParams) {
  const response = await apiClient.get<GetForecastResponse>(
    'https://api.openweathermap.org/data/2.5/forecast',
    { params: { ...params, appid } }
  );
  return response.data;
}
