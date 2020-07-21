function sayHelloToEveryone(names) {
   names.forEach(function(name){
    console.log('Hello ' + name)
   }) 
}
sayHelloToEveryone(['John','Bob']);