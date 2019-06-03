import { BaseCortium } from './../src/PS2.js';

describe('CortiumRate', function() {
  let newBase = new BaseCortium;

  beforeEach(function() {
    jasmine.clock().install();
    newBase.cortiumLevel = 10000;
    newBase.name = "Hossin"
    newBase.setDepletion();

  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have the name Hossin and a base rate of 10000', function() {
    expect(newBase.Refill());
    expect(newBase.name).toEqual("Hossin");
    expect(newBase.cortiumLevel).toEqual(10000);
  });


  it('should have a food level of 9980 after 10001 milliseconds', function() {
    jasmine.clock().tick(10001);
    expect(newBase.cortiumLevel).toEqual(9980);
  });

  it('should start to destroy base as the levels of cortium reach zero', function(){
    newBase.cortiumLevel = 0;
    expect(newBase.Deterioration()).toEqual(true);
  });

  it('should alert the player when 10k cortium has depleted', function(){
    jasmine.clock().tick(10000000)
    expect(newBase.Warning()).toEqual(true);
  });

  it('should have a cortium level of 10k when refilled', function(){
    jasmine.clock().tick(10000000)
    newBase.Refill();
    expect(newBase.cortiumLevel).toEqual(10000);
  });
});
