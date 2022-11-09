/* exported defaults */
/*
What are our inputs: target that is an object & source is an object
check for the key in source
if the key in the target is not present, add the key: value from source into target
target will be the destination because the key:value of target has to stay while source gets removed
return: does not return anything but it modifies target
*/

function defaults(target, source) {
  for (var key in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
}
