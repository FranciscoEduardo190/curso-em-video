function carregar(){
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imgs")
var fundo = window.document.body
var mss = window.document.getElementById("horario")


var horario = new Date()
var rhorario = horario.getHours
if(rhorario <= 12 && rhorario >= 5){
    msg.innerHTML = "BOM DIA agora" 
    img.src = "imabens/manha.jpeg"
    fundo.style.background = "yellow"

}
else if(rhorario > 12 && rhorario < 18){
    msg.innerHTML = "BOA TARDE"
    img.src = "imabens/tarde.jpeg"
    fundo.style.background = "orange"   
}
else{
    msg.innerHTML = "BOA NOITE"
    img.src = "imabens/noite.png"
    fundo.style.background = "black"

}
}
