/**
 * Created by USER: tarso.
 * On         DATE: 10/10/16.
 * By         NAME: parallel01.js.
 */

var partitionSpace = [0, 1, 2, 3, 4, 5];

var partitionFunc = function(space) {
  var getModPartition = function(space, mod, total) {
    return space.filter(function(value, index) {
      return index % total == mod;
    })
  };
  return [0, 1, 2].map(function(v) {
    return getModPartition(space, v, 3);
  });
};

var executionFunc = function(partition, callback) {
  console.log("Executing on partition: " + partition);
  callback(null, partition);
};
