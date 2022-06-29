function substituiPares(list){
    if(!list) return -1; // se não tem uma lista
    if(!list.length) return -1; // se não tem nenhuma letra
    for(let i =0; i < list.length; i++){
        if(list[i] === 0 ){ 
            console.log("Você já é 0!"); //caso já tenha um num 0
        }else if(list[i] % 2 ===0 ){
            console.log( `Substituindo ${list[i]} por 0...`); //se for par ele transforma o num em 0
           list[i] = 0; 
        } 
    }    
    return list;
}

let array = [0, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(array));