function count(string){
    let word = 0;
    let inWord = false
    for(let i = 0; i < string.length; i++){
        if(string[i] !== ' ' && !inWord){
            word += 1;
            inWord = true;
        }else if(string[i] === ' '){
            inWord = false;
        }
    }
    return word;
}

let String = "Hello David ";
console.log(count(String));