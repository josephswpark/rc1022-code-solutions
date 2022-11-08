function ExampleConstructor() {
}

console.log('value of prototype:', Object.getPrototypeOf(ExampleConstructor));
console.log('typeof:', typeof ExampleConstructor);

var aExampleConstructor = new ExampleConstructor();
console.log('value:', aExampleConstructor);
var isItTrue = aExampleConstructor instanceof ExampleConstructor;
console.log(isItTrue);
