/* exported defaults */
/*
What are our inputs: target that is an object & source is an object
check for the key in source
if the source & target key overlap, apply the

target will be the destination because the key:value of target has to stay while source gets removed
return: does not return anything but it modifies target
*/

function defaults(target, source) {
  for (var key in source) {
    // eslint-disable-next-line no-prototype-builtins
    if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
      target[key] = source[key];
      // console.log('target[key]:', target[key]);
      // console.log(source[key]);
    }
  }
  return target;
}
