function celsiusParaFahrenheit(temperatureEmCelcius) {
    return (temperatureEmCelcius * 8.9999/5) + 32;
}

const chai = require('chai');
const expect = chai.expect;

describe('Testes de Conversão de Celsius para Fahrenheit', function () {
  it('Deve converter 0°C para 32°F', function () {
    expect(celsiusParaFahrenheit(0)).to.equal(32);
  });

  it('Deve converter 100°C para 212°F', function () {
    expect(celsiusParaFahrenheit(100)).to.equal(212);
  });

  it('Deve converter -40°C para -40°F', function () {
    expect(celsiusParaFahrenheit(-40)).to.equal(-40);
  });

  it('Deve converter 25°C para 77°F', function () {
    expect(celsiusParaFahrenheit(25)).to.equal(77);
  });

  it('Deve converter 37°C para 98.6°F', function () {
    expect(celsiusParaFahrenheit(37)).to.be.closeTo(98.6, 0.1);
  });
});