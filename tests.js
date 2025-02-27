// Unit tests for the helloWorld function

describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello('Alex')).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello('Pat')).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).not.toBe('undefined');
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello('true')).not.toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello('false')).not.toBe("Hello, World!");
    });
    it('should return the string "Hello, " + input + "!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isFive', function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter what the input is', function () {
        expect(typeof isFive(input)).toBe('boolean');
    });
    it('should return true when calling the number 5 as the input', function () {
        expect(isFive(5)).toBe('true');
    });
});

describe('isEven', function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter what the input is', function () {
        expect(isEven(input)).toBe('boolean');
    });
    it('should return true when executing the number 2 as the input', function () {
        expect(isEven(2)).toBe('true');
    });
    it('should return true when executing the number -4 as the input', function () {
        expect(isEven(-4)).toBe('true');
    });
    it('should return false when executing the number 3 as the input', function () {
        expect(isEven(3)).toBe('false');
    });
    it('should return false when calling "banana" as the input', function () {
        expect(isEven("banana")).toBe('false');
    });
    it('should return true when calling the number 8 as the input', function () {
        expect(isEven(8)).toBe('true');
    });
    it('should return false when calling Infinity as the input', function () {
        expect(isEven(Infinity)).toBe('false');
    });
    it('should return false when calling the string true', function () {
        expect(isEven(true)).toBe('false');
    });
    it('should return false when calling false', function () {
        expect(isEven(false)).toBe('false');
    });
    it('should return false when calling without an argument', function () {
        expect(isEven()).toBe('false');
    });
});

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean no matter what the input is', function () {
        expect(typeof isVowel(input)).toBe('boolean');
    });
})
