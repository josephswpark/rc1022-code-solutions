/* exported defaults */
/*
input: target --> any object & source --> any object
bring the source into the target object
using the assign method of the Object.
merge target into source and then into target to keep the original property and value
return: does not return anything but it modifies target
*/
function defaults(target, source) {
  var newObjects = Object.assign(target, { ...source, ...target});
}
