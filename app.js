function randomOrder(arr) {
   let ret = [];
    for (let i = 0; i < arr.length; i = i + 1) {
     let rest = randomOrder(arr.slice(0, i).concat(arr.slice(i + 1)));
      if(!rest.length) {
       ret.push([arr[i]])
     } else {
       for(let j = 0; j < rest.length; j = j + 1) {
         ret.push([arr[i]].concat(rest[j]))
       }
     }
   }
   return ret;
 }

  var arr = [1, 2, 3];

  console.log(randomOrder(arr));

  // output :
  // [ [ 1, 2, 3 ],
  //   [ 1, 3, 2 ],
  //   [ 2, 1, 3 ],
  //   [ 2, 3, 1 ],
  //   [ 3, 1, 2 ],
  //   [ 3, 2, 1 ] ]
