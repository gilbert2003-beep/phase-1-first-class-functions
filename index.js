
function receivesAFunction(callback) {
    callback();
    }
    
    function returnsANamedFunction() {
    function sayHi() {
    console.log("Hi");
    }
    return sayHi;
    }
function returnsAnAnonymousFunction() {
    return function() {
    console.log("Hello");
    }
    }
    