function receivesAFunction(a){
    return a()
  }
  
  function returnsANamedFunction(){
    return function test(){
    }
  }
  
  function returnsAnAnonymousFunction(){
    return function(){
      console.log('testy')
    }
  }