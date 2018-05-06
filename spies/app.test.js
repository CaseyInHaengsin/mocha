const expect = require('expect');


describe('App', () => {
    it('should call the spy correctly', () => {
      //spy creation
      var spy = expect.createSpy();
      spy('Andrew', 25);

      expect(spy).toHaveBeenCalledWith('Andrew', 25);


    });
});