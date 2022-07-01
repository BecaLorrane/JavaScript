function SomaArray(arr){
    return arr.reduce(function(prev, current){
        return prev + current;
    }, 5)
}

const arr = [1, 2];
console.log(SomaArray(arr))