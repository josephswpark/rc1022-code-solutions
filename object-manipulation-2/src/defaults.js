/* exported defaults */
/*
input: target --> any object & source --> any object
bring the source into the target object
using the assign method of the Object.
merge target into source and then into target to keep the original property and value
return: does not return anything but it modifies target
*/

function defaults(target, source) { // obj1 is destination, obj2 is source
  for (var key in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}
