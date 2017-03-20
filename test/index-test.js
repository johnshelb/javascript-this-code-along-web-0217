// const expect = require('expect')
//
// const fs = require('fs')
// const jsdom = require('mocha-jsdom')
// const path = require('path')
//
//
// describe('index', () => {
//
//   jsdom({
//     src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
//   })
//
//
//   it('runs', () => {
//     expect(true).to.be.true
//   })
// })
var assert = require('assert');
describe('Array', function() {
describe('#indexOf()', function() {
  it('should return -1 when the value is not present', function() {
    assert.equal(-1, [1,2,3].indexOf(4));
  });
});
});
