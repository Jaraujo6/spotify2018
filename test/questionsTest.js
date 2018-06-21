const expect = require('chai').expect
const {
  sortByStrings,
  decodeString,
  changePossibilities,
} = require('../spotifyQuestions')


describe('Tests for Spotify Questions', function() {
  describe('sortByStrings()', function() {
    
    const string1 = 'weather'
    const string2 = 'good'
    const string3 = 'johnny'
    const string4 = ''
    
    const order1 = 'therapyw'
    const order2 = 'odg'
    const order3 = 'mwnokha'
    const order4 = ''
    
    it('should properly reorder chars in arg 1 based on the order of chars in arg2', function() {
      const answer1 = sortByStrings(string1, order1)
      const answer2 = sortByStrings(string2, order2)
      const answer3 = sortByStrings(string3, order3)

      expect(answer1).to.be.equal('theeraw');
      expect(answer2).to.be.equal('oodg'); 
      expect(answer3).to.be.equal('nnoh');  
    })
  
    it ('should not crash if given empty strings', function () {
      expect(_ => sortByStrings(string1, order4)).to.not.throw();
      expect(_ => sortByStrings(string4, order2)).to.not.throw();
    })
  })
  
  describe('decodeString()', function() {
   
    const string1 = '4[ab]'
    const string2 = '2[b3[a]]'
    const string3 = '2[b3[a2[c]]]'

    const decoded1 = 'abababab'
    const decoded2 = 'baaabaaa'
    const decoded3 = 'baccaccaccbaccaccacc'
    
    it('should output encoded string k times', function() {
      const decodedString = decodeString(string1)
      expect(decodedString).to.be.equal(decoded1);  
    })
  
    it('should handle multiple levels of nested encoding', function() {
      const decodedString2 = decodeString(string2)
      const decodedString3 = decodeString(string3)

      expect(decodedString2).to.be.equal(decoded2);
      expect(decodedString3).to.be.equal(decoded3);
    })
  })
  describe('changePossibilities()', function() {
    const amount1 = 6
    const amount2 = 4

    const denominations1 = [1, 3, 5]
    const denominations2 = [1, 2, 3]
    
    it('should output total possible combinations', function() {
      const possibilities1 = changePossibilities(amount1, denominations1)
      const possibilities2 = changePossibilities(amount2, denominations2)

      expect(possibilities1).to.be.equal(4);  
      expect(possibilities2).to.be.equal(4); 
    })
  })
})