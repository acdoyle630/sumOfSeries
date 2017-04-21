/* jshint esversion: 6*/

const chai = require('chai');
const expect = chai.expect;

const app = require('../app.js');

describe('app function',() =>{
  it('should be a function', () =>{
    expect(app).to.be.a('function');
  });
  it('should return false if sum is num is greater than total sum', () =>{
    expect(app([1,2,3],20)).to.be.equal(false);
  });
  it('should return true if sum exists in array', () =>{
    expect(app([1,2,3,4],5)).to.be.equal(true);
    expect(app([2,4,7,1,3],11)).to.be.equal(true);
    expect(app([5,4,2,7,8,10],25)).to.be.equal(true);
  });
  it('should return false if sum does not exist', () =>{
    expect(app([1,2,5,6,2],9)).to.be.equal(false);
  });
});