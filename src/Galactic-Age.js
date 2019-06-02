export class GalacticAgeCalculator
{
  constructor(birthdate)
  {
    this.birthDate = new Date(birthdate);
    this.currentDate = new Date();
  }
  birthDate()
  {
    return this.birthDate;
  }

  Age()
  {
    let age = this.currentDate.toFixed(1) - this.birthDate.toFixed(1);
    return age;
  }
  Mercury()
  {
    return parseFloat ( (this.Age() * .24).toFixed(1) );
  }
  Venus()
  {
    return parseFloat ( (this.Age() * .62).toFixed(1) );
  }
  Mars()
  {
    return parseFloat ( (this.Age() * 1.88).toFixed(1) );
  }
  Jupiter()
  {
    return parseFloat ( (this.Age() * 11.86).toFixed(1) );
  }
  LifeLeft()
  {
    return (this.Age().toFixed(1) - 79);
  }
}
