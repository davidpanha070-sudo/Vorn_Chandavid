function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    if(width < 0 || height < 0){
        return rectangleString;
    }
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            rectangleString += '*';
        }
        rectangleString += '\n';
    }
    return rectangleString;
}
