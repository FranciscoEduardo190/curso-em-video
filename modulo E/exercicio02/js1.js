var ini = window.document.getElementById("inicio")
var inii = Number(ini.value)
var espaco = window.document.getElementById("selele")
 function matue(){
     if(inii < 0){
         window.alert("coloque um numero")
     }else{
         var a
         for(var c = 1; c <= 10; c++ ){
            a = c * inii
             espaco.innerHTML += "<option id =" + c + "> + " + a + "</option> "

         }
     }
 }