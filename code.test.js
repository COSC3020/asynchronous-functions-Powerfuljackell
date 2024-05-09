const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testset = [{array:[12, 4, 12, 19, 21, 12, 9,  8, 14],key:12},
                {array:[ 2, 1, 3, 3, 2, 6, 2, 2, 4, 6 ],key:2},
                {array:[ 1, 1, 1, 3, 6, 6, 1, 3, 4, 6 ],key:1},]
testset.forEach(({ array,key}, index) => {
    asyncMatches(array,key).then(x => {let testWorks = JSON.stringify(x) === JSON.stringify(nMatches(array,key))
        console.log("\ntest:",index++, testWorks == true ? "Success" : "Failed");
        if(!testWorks){ throw console.log("Failed with values:", array,"\nExpected Result:",expected,"\nGot Result:", JSON.stringify(nMatches(array,key)));}
    });
});
