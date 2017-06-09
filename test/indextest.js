const assert = require('chai').assert;
const sayhello = require('../index').sayhello;

describe('Index', function(){
  it('app should return hello' , function(){
    assert.equal(sayhello(),'hello' );
    console.log("test executed!");

  });
});
