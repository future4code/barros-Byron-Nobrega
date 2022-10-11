console.log("exercicio 1");

const fahrenheit = (temperature) => {
  return console.log(
    `${temperature}°  Celsius é equivalente a ${
      temperature * 1.8 + 32
    }° Farenheit`
  );
};
const kelvin = (temperature) => {
  return console.log(
    `${temperature}°  Celsius é equivalente a ${temperature + 273.15}° Kelvin`
  );
};

const converteCelsius = (temperature, measurements) => {
  if (isNaN(temperature)) {
    return console.log(
      `Erro. Parâmetro inválido ${temperature} não é um números.`
    );
  } else if (measurements === "F") {
    fahrenheit(temperature);
  } else if (measurements === "K") {
    kelvin(temperature);
  } else {
    return console.log(`Erro. Parâmetro inválido ${measurements}.`);
  }
};

converteCelsius("trinta", "F");
converteCelsius(3.5, "F");
converteCelsius(3, "K");
converteCelsius(3, "k");
