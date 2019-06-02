export class GalacticAgeCalculator
{
  constructor(year,month,date)
  {
    this.birthdate = new Date();
    this.dateNow = new Date();
    this.deathdate = deathdate;
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
