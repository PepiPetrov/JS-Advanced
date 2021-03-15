const mocha=require('mocha')
const assert=require('chai').assert
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}
describe('lookupChar function test suite',()=>{
    it('Type different from string',()=>{
        assert.isUndefined(lookupChar(123,2))
    })
    it('Index is a float-pointing number',()=>{
        assert.isUndefined(lookupChar('123',0.1))
    })
    it('Index is bigger or equal than the length and smaller than zero',()=>{
        assert.equal(lookupChar('aa',2),"Incorrect index")
        assert.equal(lookupChar('aa',3),"Incorrect index")
        assert.equal(lookupChar('a',-1),"Incorrect index")
    })
    it('Correct index',()=>{
        assert.equal(lookupChar('aab',2),'b')
    })
})