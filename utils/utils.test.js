const utils = require('./utils');
const expect = require('expect');

it('Should add two numbers', () => {
    var res = utils.add(33, 11);


    expect(res).toBe(44).toBeA('number');

});

    //expect(res).toBe(44);

it('Should square a number', () => {
      var res = utils.square(3);

      expect(res).toBe(9).toBeA('number');


});

    //should verify that first and last names are set

    it('should verify first and last names are set', () => {
        //assert it includes first name and last name with proper values
        var user = {
            location: 'Provo',
            age: 25
        };
        var res = utils.setName(user, 'Josh Ericson');

        //expect(user).toEqual(res);
        expect(res).toInclude({
            firstName: 'Casey',
            lastName: 'Rowley'
        })


    });



/*
it('should expect some values', () => {
   //expect(12).toNotBe(13);
    expect({
        name: 'Casey',
        age: 25,
        location: 'Philadelphia'
    }).toInclude({
        age: 23
    })
});
*/
