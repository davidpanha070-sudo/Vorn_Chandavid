function average(arr){
    let average = 0;
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        max += arr[i];
    }
    average = max / arr.length;
    return average;
}

let Student = [89, 10, 68, 54];
console.log(average(Student));