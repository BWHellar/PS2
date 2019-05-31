export class GalacticAgeCalculator
{
  constructor(year,month,date)
  {
    this.birthdate = birthdate;
    this.dateNow = new Date();
    this.deathdate = deathdate;
  }
  personAge()
  {
    const personAge = new Date(this.year, this.month, this.date);
    let currentDate = new Date();

    let change = currentDate.getTime() - personAge.getTime();
    const age = (Date.now() - birthdate.getTime())/1000/60/60/24/365;
    return Math.round(age*100)/100;
  }

  MercuryAge()
  {
    return parseFloat ( (this.personAge() / .24).toFixed(1) );
  }
  VenusAge()
  {
    return parseFloat ( (this.personAge() / .62).toFixed(1) );
  }
}
