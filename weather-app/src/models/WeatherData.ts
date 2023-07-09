export interface ForecastDataPoint {
  /** Data point key, usually a timestamp */
  key: string;
  /** Temperature in Kelvin */
  temperature: number;
  /** Pressure in hPa */
  pressure: number;
  /** Humidity percentage, [0, 100] */
  humidity: number;
  /** Probability of precipitation, [0, 1] */
  precipitation: number;
}