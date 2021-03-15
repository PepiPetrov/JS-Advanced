const mocha=require('mocha')
const assert=require('chai').assert
const numberOperations=require('./numberOperations')
describe('numberOperations object',()=>{
    describe('numberChecker tests',()=>{
        it('input is lower than 100',()=>{
            assert.equal(numberOperations.numberChecker(10),`The number is lower than 100!`)
            assert.equal(numberOperations.numberChecker('10'),`The number is lower than 100!`)
        })
        it('input is higher or equal than 100',()=>{
            assert.equal(numberOperations.numberChecker(100),`The number is greater or equal to 100!`)
            assert.equal(numberOperations.numberChecker('100'),`The number is greater or equal to 100!`)
            assert.equal(numberOperations.numberChecker(10000),`The number is greater or equal to 100!`)
        })
        it('input cannot be converted to a number',()=>{
            assert.throw(()=>numberOperations.numberChecker('aiog'))
        })
    })
    describe('pow tests',()=>{
        it('input is a number',()=>{
          assert.equal(numberOperations.powNumber(2),4)
        })
        it('if input is not a number NaN is the result',()=>{
            assert.isNaN(numberOperations.powNumber('a'))
        })
    })
    describe('sumArrays tests',()=>{
        it('single element, single sum',()=>{
            assert.deepEqual(numberOperations.sumArrays([1],[1]),[2])
        })
        it('two or more numbers in first array',()=>{
            assert.deepEqual(numberOperations.sumArrays([1,2],[1]),[2,2])
        })
        it('there is a string in the nums',()=>{
            assert.deepEqual(numberOperations.sumArrays([1,'two'],[2,2]),[3,'two2'])
        })
    })
})