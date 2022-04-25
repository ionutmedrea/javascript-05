
let myFunction = function loggingFunction(message, anotherMessage){
    console.log(message, anotherMessage);
}

let getSecretCode = function(value){
    let code = value * 42;
    return code;
}

myFunction('print this','text');

showMessage(getSecretCode(2));