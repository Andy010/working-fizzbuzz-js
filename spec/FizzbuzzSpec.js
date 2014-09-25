describe('Fizzbuzz knows', function(){

  var fizzbuzz;

  beforeEach(function(){
    fizzbuzz = new Fizzbuzz();
  });

  describe('when a number is divisible', function(){

    it('by 3', function(){
      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
    });

    it('by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('by 15', function(){
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
    });

  }); // Close describe

  describe('when a number is not divisible', function(){

    it('by 3', function(){
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it('by 5', function(){
      expect(fizzbuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('by 15', function(){
      expect(fizzbuzz.isDivisibleByFifteen(1)).toBe(false);
    });

  }); // Close describe

  describe('if number returns', function(){

    it('"Fizz" when divisible by 3', function(){
      expect(fizzbuzz.ifNumberReturns(3)).toEqual("Fizz");
    });

    it('"Buzz" when divisible by 5', function(){
      expect(fizzbuzz.ifNumberReturns(5)).toEqual("Buzz");
    });

    it('"FizzBuzz" when divisible by 15', function(){
      expect(fizzbuzz.ifNumberReturns(15)).toEqual("FizzBuzz")
    });

  });

}); // Close describe