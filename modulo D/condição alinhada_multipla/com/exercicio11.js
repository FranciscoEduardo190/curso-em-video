var agora = new Date()
var diasem = agora.getDay()
/*
0-domingo
1segunda
2terça
3quarta
4quinta 
5sexta
6sabado
*/
switch(diasem){
    case 0: console.log("domingo")
    break;
    case 1: console.log("segunda")
    break;
    case 2: console.log("terça")
    break;
    case 3: console.log("quarta")
    break
    case 4: console.log("quinta")
    break;
    case 5: console.log("sexta")
    break;
    case 6: console.log("sabado")
    break;
    default: console.log("que porra é essa ?")
    break;
}