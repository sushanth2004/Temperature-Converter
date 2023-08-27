

var celsius=document.querySelector("#celsius");

var farenheit=document.querySelector("#farenheit");

celsius.oninput=()=>{
    var c=celsius.value;
    var f=(c*(9/5))+32;
    farenheit.value=parseFloat(f.toFixed(2));
}

farenheit.oninput=()=>{
    var f=farenheit.value;
    var c=(f-32)*(5/9);
    celsius.value=parseFloat(c.toFixed(2));
}

function reset(){
    celsius.value=null;
    farenheit.value=null;
}