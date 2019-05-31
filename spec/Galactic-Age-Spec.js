import { GalacticAgeCalculator } from './../src/Galactic-Age.js';

describe('GalacticAgeCalculator', function()
{
  it('should test for the earth age and return 31.87', function()
  {
    let age = new GalacticAgeCalculator(1986,6,11);
    expect(parseFloat(age.getAge())).toEqual(31.87);
  });

  it('should test for the mercury age and return 132.8', function()
  {
    let age = new GalacticAgeCalculator(1986,6,11);
    expect(parseFloat(age.getMercuryYears())).toEqual(132.8);
  });
});
