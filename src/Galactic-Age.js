export class GalacticAgeCalculator
{
  constructor(birthdate)
  {
    this.birthDate = new Date(birthdate);
    this.currentDate = new Date();
  }
  BirthDate()
  {
    return this.birthDate;
  }

  Age()
  {
    let difference = this.currentDate - this.birthDate;
    // This is the amount of Seconds in a year.
    let age = difference / (31557600000);
    return parseFloat (age.toFixed());
  }
  Mercury()
  {
    return parseFloat ( (this.Age() * .24).toFixed() );
  }
  Venus()
  {
    return parseFloat ( (this.Age() * .62).toFixed() );
  }
  Mars()
  {
    return parseFloat ( (this.Age() * 1.88).toFixed() );
  }
  Jupiter()
  {
    return parseFloat ( (this.Age() * 11.86).toFixed() );
  }
  LifeLeft()
  {
    return (this.Age().toFixed() - 79);
  }
}
