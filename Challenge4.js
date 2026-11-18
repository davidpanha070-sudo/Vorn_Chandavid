function count(string, char){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(char == string[i]){
            count += 1;
        }
    }
    return count;
}

let String = "Hello My name is David";
console.log(count(String, "a"));