import {pingPong} from './../src/ping-pong.js';

describe('pingPong', function() {

  it('should return ping pong if the number is equal to 15', function() {
    var output = new pingPong(3);
    expect(output).toEqual([1,2,"ping"]);
  });
});
