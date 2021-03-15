const mocha=require('mocha')
const assert=require('chai').assert
function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

describe('Test suite of isOddOrEven',()=>{
    it('Parameter type is different from string',()=>{
        assert.isUndefined(isOddOrEven(12))
        assert.isUndefined(isOddOrEven(true))
        assert.isUndefined(isOddOrEven({}))
        assert.isUndefined(isOddOrEven([]))
    })
    it('String length is even',()=>{
        assert.equal(isOddOrEven('baba'),'even')
    })
    it('String length is odd',()=>{
        assert.equal(isOddOrEven('abn'),'odd')
    })
})