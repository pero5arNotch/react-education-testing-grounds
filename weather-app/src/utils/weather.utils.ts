export abstract class TemperatureConversion {
  public static kelvinToCelsius = (tempK: number) => tempK - 273.15;
  public static kelvinToFahrenheit = (tempK: number) => tempK * (9/5) - 459.67;
}
