function reverseString(arr){
    let newString = '';
    if(arr.length == 0){
        newString += "[]";
    }
    for(let i = arr.length - 1; i >= 0; i--){
        newString += arr[i] + " ";
    }
    return newString;
}

const array = [];
console.log(reverseString(array));
