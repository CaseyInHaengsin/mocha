const utils = require('./utils');

it('Should add two numbers', () => {
    var res = utils.add(33, 11);

    if (res !== 44){
        throw new Error(`Expected 44, but got ${res}`);
    }
});

it('Should square a number', () => {
      var res = utils.square(3);

      if (res !== 9){
          throw new Error(`Expecting 9 and got ${res}`);
    }
});