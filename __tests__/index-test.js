jest.dontMock('./../index.js');

var sut;

describe('index', function() {
    sut = require('./../index.js');
    // Mocked automatically by jest
    someMockedDep = require('./../someRequire.js');

    it('should return boolean value', function() {
        expect(sut.someMethod(0)).toBe(false);
        expect(sut.someMethod(1)).toBe(true);
    });

    it('should call other method with param', function() {
        var arg = 0;
        sut.someCompositeMethod(arg);

        expect(someMockedDep).toBeCalledWith(arg);
    });
});