
// Old school
function f( ) {
  // access params?
  // transform to a real array
  console.log(Array.prototype.slice.call(null, arguments));
}

// new way
const draw = (color, ...nums) => {
  console.log(nums);
};

draw('green', 10, 20, 30, 40);
