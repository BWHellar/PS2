import { GalacticAgeCalculator } from './../src/Galactic-Age.js';

describe ('GalacticAgeCalculator', function()
{
  it('Should take in and process birthday and return given birthday', function()
  {
    let newAge = new GalacticAgeCalculator('10-13-1989');
    let newDate = new Date('10-13-1989');
    expect(newAge.BirthDate()).toEqual(newDate);
  });

  it('should return known age rounded up according to birthday', function()
  {
    let newCalculator = new GalacticAgeCalculator('10-13-1989');
    expect(newCalculator.Age()).toEqual(30);
  });

  it('should return Mercury years rounded', function()
  {
    let newCalculator = new GalacticAgeCalculator('10-13-1989');
    expect(newCalculator.Mercury()).toEqual(7);
  });

  it('should return Venus years rounded', function()
  {
    let newCalculator = new GalacticAgeCalculator('10-13-1989');
    expect(newCalculator.Venus()).toEqual(19);
  });

  it('should return Mars years rounded', function()
  {
    let newCalculator = new GalacticAgeCalculator('10-13-1989');
    expect(newCalculator.Mars()).toEqual(56);
  });

  it('should return Jupiter years rounded', function()
  {
    let newCalculator = new GalacticAgeCalculator('10-13-1989');
    expect(newCalculator.Jupiter()).toEqual(356);
  });

  it('should return life left rounded', function()
  {
    let newCalculator = new GalacticAgeCalculator('10-13-1989');
    expect(newCalculator.LifeLeft()).toEqual(-49);
  });
});
