function validaArray(arr, numero){
    try{
    
        if (!arr && !numero) 
            throw new ReferenceError("Envie os parametros");

        if (typeof arr !== 'object' ) 
            throw new TypeError("Array precisa ser do tipo objet"); 

        if (typeof arr !== 'number' ) 
            throw new TypeError("Array precisa ser do tipo number");

        if(arr.length !== numero) 
            throw new Range("Tamanho iválido"); 

        return arr; 
    }
    catch(e){ 
        if(e instanceof ReferenceError){ 
            console.log("Esse erro é um ReferenceError");
            console.log(e.message); 
        }
        else if(e instanceof TypeError ){ 
            console.log("Esse erro é um TypeError");
            console.log(e.message); 
        }
        else if(e instanceof Range ){ 
            console.log("Esse erro é um Ranges");
            console.log(e.message); 
        }else{
            console.log("Ocorreu um tipo de erro não esperado: " + e);
        }
    }
}

console.log(validaArray());
console.log(validaArray(23,21));
console.log(validaArray([1 ,2 ,3 ,4 ,5 ], 'a'));