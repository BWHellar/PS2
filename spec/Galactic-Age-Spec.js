import { GalacticAgeCalculator } from './../src/Galactic-Age.js';

describe ('GalacticAgeCalculator', function()
{
  it('Should take in and process birthday', function()
  {
    let newAge = new GalacticAgeCalculator('10-13-1989');
    let newDate = new Date('10-13-1989');
    expect(newAge.BirthDate()).toEqual(newDate);
  });

  it('should return Mercury years', function()
  {
    let newCalculator = new GalacticAgeCalculator('10-013-1989');
    expect(newCalculator.Mercury()).toEqual(7);
  });
  it('should return Venus years', function()
  {
    let newCalculator = new GalacticAgeCalculator('10-013-1989');
    expect(newCalculator.Venus()).toEqual(19);
  });
});
