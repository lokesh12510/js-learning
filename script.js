// function z() {
//   function x() {
//     let a = 10;
//     function y() {
//       console.log(a);
//     }
//     return y;
//   }
//   let b = x();
//   console.log(b);
// }
// z();
function z() {
  function x() {
    return function y() {
      console.log("fn");
    };
  }

  let b = x();

  console.log(b());
}
z();
