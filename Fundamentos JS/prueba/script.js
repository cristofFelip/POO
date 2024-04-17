function html(){
    let array = [];
    let x = 0;
    while( x < 5 ) {
        let valores = parseInt(prompt("Ingrese valores: "))
        array.push(valores);
        x++;
    }
    function noNegative(arr){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < 0){
                arr[i] = 0;
            }
        }
        return arr;
    }
document.getElementById("lista").innerHTML = `<p>Números:</p> <h2>${array}</h2> <br> <p>Negativos eliminados: </p><h2>${noNegative(array)}</h2> `;
};
