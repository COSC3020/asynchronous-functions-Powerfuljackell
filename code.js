/*Utilized:
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
https://stackoverflow.com/questions/49938266/how-to-return-values-from-async-functions-using-async-await-from-function
*/
function nMatches(arr, key) {
    let m = 0;
    for(let i = 0; i < arr.length; i++) {
    if(arr[i] == key) m++;
    }
    return m;
}
/*
function asyncMatches(arr, key){
    doneVal = 0;
    setTimeout(nMatches,500,arr,key,doneVal);
}*/

function asyncMatchHelper(arr,key) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(nMatches(arr,key));
      }, 2000);
    });
  }
  
async function asyncMatches(arr,key) {
    const x = await asyncMatchHelper(arr,key);
    return x;
}
/*
var a1 = [3,5,9,3,4,6,7,2,1,8,3,3,5,2,3,9];
//asyncMatches(array,3).then(x => {returnVal = x});
asyncMatches(a1,3).then(x => {console.log( JSON.stringify(x) == JSON.stringify(nMatches(a1,3)))});
//var finval = asyncMatches(array,3);*/