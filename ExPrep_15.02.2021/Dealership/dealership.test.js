const mocha=require('mocha')
const expect=require('chai').expect
const dealership=require('./dealership')
describe('dealership object',()=>{
    describe('newCarCost',()=>{
        it('support',()=>
        expect(dealership.newCarCost('Audi A4 B8',30000)).to.equal(15000)
        )
        it('no support',()=>{
            expect(dealership.newCarCost('a',1)).to.equal(1)
        })
    })
    describe('carEquipment',()=>{
        it('single',()=>{
            expect(dealership.carEquipment(['a'],[0])).to.deep.equal(['a'])
        })
        it('multiple',()=>{
            expect(dealership.carEquipment(['a','b','c'],[0,1])).to.deep.equal(['a','b'])
        })
        it('multiple single',()=>{
            expect(dealership.carEquipment(['a','b'],[0])).to.deep.equal(['a'])
        })
    })
    describe('euroCategory',()=>{
        it('below',()=>
        expect(dealership.euroCategory(1)).to.equal(`Your euro category is low, so there is no discount from the final price!`)
        )
        it('above',()=>{
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
        it('equal',()=>{
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        })
    })
})