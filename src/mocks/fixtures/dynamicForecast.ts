export const dynamicForecast = (

  temperature: number,

  rainfall: number,

  snowfall: number,

  wind: number
) => {

  return {

    daily: {

      time: [
        "2026-11-18"
      ],

      temperature_2m_max: [
        temperature
      ],

      precipitation_sum: [
        rainfall
      ],

      snowfall_sum: [
        snowfall
      ],

      windspeed_10m_max: [
        wind
      ]
    }
  };
};