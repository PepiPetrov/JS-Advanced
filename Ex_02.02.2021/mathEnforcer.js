const assert = require('chai').assert;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('mathEnforcer',()=>{

    describe("addFive", () =>{

        it('with invalid argument', () =>{

            actualResult = mathEnforcer.addFive([1,2,3,5]);
            expectedResult = undefined;
            assert.equal(actualResult, expectedResult, '');
        })

        it('with valid argument',()=>{
            actualResult = mathEnforcer.addFive(9);
            expectedResult = 14;

            assert.equal(actualResult, expectedResult, '');
        })
        it('with valid negative num',()=>{
            actualResult = mathEnforcer.addFive(-10);
            expectedResult = -5;

            assert.equal(actualResult, expectedResult, '');
        })
        it('with valid floating num',()=>{
            actualResult = mathEnforcer.addFive(-10.5);
            expectedResult = -5.5;

            assert.equal(actualResult, expectedResult, '');
        })
    })

    describe('subtract', () => {
        it('is not number',() => {
            assert.isUndefined(mathEnforcer.subtractTen("a"));
            assert.isUndefined(mathEnforcer.subtractTen(undefined));
        });
        it('subtract properly',()=>{
            assert.equal(mathEnforcer.subtractTen(0), -10);
            assert.equal(mathEnforcer.subtractTen(-5), -15);
            assert.equal(mathEnforcer.subtractTen(10.2), 0.1999999999999993);
            assert.equal(mathEnforcer.subtractTen(1), -9);
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(20), 10);
        })
    })
    describe('sum',()=>{
        it('number plus string', () =>{
            assert.isUndefined(mathEnforcer.sum('1',1));
            assert.isUndefined(mathEnforcer.sum(1,'1'));
        })
        it('numbers', () =>{
            assert.equal(mathEnforcer.sum(1,1), 2);
            assert.equal(mathEnforcer.sum(1,-1), 0);
            assert.equal(mathEnforcer.sum(1,0), 1);
            assert.equal(mathEnforcer.sum(-1,-1), -2);
            assert.equal(mathEnforcer.sum(-1.2,-1.3), -2.5);
            assert.equal(mathEnforcer.sum(1.3,-1.2), 0.10000000000000009); 
        });
    });
});