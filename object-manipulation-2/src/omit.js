/* exported omit */
/*
input: an object & keys which are properties
1. need a data storage of a new object
2. make the source keys into an array
3. loop through each key in the SOURCE object
4. we only want to add a key and value to 'omittedObj' if our
current iteration of sourceKeys is NOT found in 'keys'
5. need to omit the keys in 'keys'
6. assign the value of sourceKeys of source to sourcekeys
out: a new object with keys that was not matched
*/

// What are our inputs/parameters?
// A: an object 'source' and an array of string 'keys'

// What are they asking that this function do?
// A: given the array of 'keys', omit those keys from the 'source' object and return that object

// What is the return value?
// A: a new object with the properties and values of the 'source' object that are NOT found in 'keys'.
// if a key from 'source' is found in 'keys', that should NOT be included in the returned object

function omit(source, keys) {
  var sourceKeys = Object.keys(source);
  var omittedObj = {};

  for (var i = 0; i < sourceKeys.length; i++) {
    if (!keys.includes(sourceKeys[i])) {
      omittedObj[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }

  return omittedObj;
}

// sourceKeys = [foo, bar, baz];
// keys = [foo, baz];
