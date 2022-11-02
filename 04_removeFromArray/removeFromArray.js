const removeFromArray = function() {
let arr = arguments[0];

let removeArr = [];
for(let i=1; i<arguments.length; i++){
    removeArr.push(arguments[i]);
}

const result = arr.filter(num => removeArr.indexOf(num)<0);
return result;
};


//removeFromArray([1, 3, 4, 6, 7], 4, 6)
// Do not edit below this line
module.exports = removeFromArray;
