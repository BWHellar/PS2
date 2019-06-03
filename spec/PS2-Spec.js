import { CortiumRate } from './../src/PS2.js';

describe('CortiumRate', function() {
  let newBase = new CortiumRate("Hossin");

  beforeEach(function() {
    jasmine.clock().install();
    newBase.setCortiumDepletion();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have the name Hossin and a base rate of 10000', function() {
    expect(newBase.name).toEqual("Hossin");
    expect(newBase.cortiumLevel).toEqual(10000);
  });


  it('should have a food level of 9980 after 10001 milliseconds', function() {
    jasmine.clock().tick(10001);
    expect(newBase.cortiumLevel).toEqual(9980);
  });
});
