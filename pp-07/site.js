<<<<<<< HEAD

=======
>>>>>>> e08082271b97f5c88dd01644f6fca10d334312aa
/*
  1. Correct the variable scope so that the console.log call
  outputs the correct value for x (5).
*/

<<<<<<< HEAD
=======
var x = 5;

>>>>>>> e08082271b97f5c88dd01644f6fca10d334312aa
function double(num) {
  x = num * 2;
  return x;
}
<<<<<<< HEAD
double(6);
var x = 5;
=======

double(6);
>>>>>>> e08082271b97f5c88dd01644f6fca10d334312aa
console.log('The value of x is:', x, 'It should be 5.');

/*
  2. Rewrite the corrected JavaScript above as function that
  does not pollute the global namespace (e.g., neither its
  variables nor the double function can be accessed via the
  `window` global object, like `window.x`).
*/
<<<<<<< HEAD


(function(){
 function double(num) {
  x = num * 2;
  return x;
 }
 double(6);
 var x = 5;
 console.log('The value of x is:', x, 'It should be 5.');
})();
=======
>>>>>>> e08082271b97f5c88dd01644f6fca10d334312aa
