let num =  document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.getElementById("res")
let valores = []
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
    
  return true;
    } else{
        return false;
    }
}
function inLista(n , i){
    if(i.indexOf(Number(n) != -1)){
        return true
    } else{
        return false
    }

}
function adicionar(){
    if(isNumero(num.value) && inLista(num.value , valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = 'valor '+ num.value +' adicionado'
        lista.appendChild(item)

    } else{
        window.alert("deu errado merda")
    }
    num.value = ''
    num.focus()
}
function finalizar() {
    if( valores.length == 0){
        window.alert("coloca numero corno")
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0 
        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma/ tot
        res.innerHTML = ''
        res.innerHTML += '<p> ao todos temos '+ tot +' colocados </p>'
        res.innerHTML += '<p> soma '+ soma +' colocados </p>'
        res.innerHTML += '<p> media '+ media +' colocados </p>'
        res.innerHTML += '<p> menor '+ menor +' colocados </p>'
        res.innerHTML += '<p> maior '+ maior +' colocados </p>'
    }
}
        
    
    
