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

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(4, (square) => {
            expect(square).toBe(16).toBeA('number');
            done();
        })
    })

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
            firstName: 'Josh',
            lastName: 'Ericson'
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
