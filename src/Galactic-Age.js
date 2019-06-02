export class GalacticAgeCalculator
{
  constructor(birthdate)
  {
    this.birthDate = new Date(birthdate);
    this.currentDate = new Date();
  }
  // Just your birthday
  BirthDate()
  {
    return this.birthDate;
  }
  // This function will give the general age rounded to the nearest.
  Age()
  {
    // Take the current date and subtract it by your birthdate
    let difference = this.currentDate - this.birthDate;
    // Take the result above and divide it by the amount of seconds in the year.
    let age = difference / (31557600000);
    // Return it to fixed.
    return parseFloat (age.toFixed());
  }
  // We want to find your birthday on Mercury so we multiply by .24.
  Mercury()
  {
    return parseFloat ( (this.Age() * .24).toFixed() );
  }
  // We want to find your birthday on Venus so we multiply by .62.
  Venus()
  {
    return parseFloat ( (this.Age() * .62).toFixed() );
  }
  // We want to find your birthday on Mars so we multiply by 1.88.
  Mars()
  {
    return parseFloat ( (this.Age() * 1.88).toFixed() );
  }
  // We want to find your birthday on Jupiter so we multiply by 11.86.
  Jupiter()
  {
    return parseFloat ( (this.Age() * 11.86).toFixed() );
  }
  // We want to find how much life you have left to live so we subtract 79.
  LifeLeft()
  {
    return (this.Age().toFixed() - 79);
  }
}
