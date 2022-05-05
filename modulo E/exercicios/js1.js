function pamonha(){
        var n1 = document.getElementById("n1")
        var n1s = Number(n1.value)
        var n2 = document.getElementById("n2")
        var n2s = Number(n2.value)
        var n3 = document.getElementById("n3")
        var n3s = Number(n3.value)
        var s1 = document.getElementById("s1")
        if(n3s <= 0){
                window.alert("passo inalido")
        }

       if(n2s <= 0 || n1s <= 0 || n3s <= 0){
               s1.innerHTML = "coloca um numero"
               }
               else{
                       //contagem crescente
                       if(n1s < n2s)
                    for(let c = n1s; c<= n2s; c += n3s){
                            s1.innerHTML += c + "\u{1F449}"
                    } else{
                            //contagem descrecente
                            for(let c = n1s; c >= n2s; c -= n3s){
                                    s1.innerHTML += c + "\u{1F449}"
                            }
                    }
              /* meu codigo errado
               while(n1s <= n2s){
                 var n4 = n1s + n3s 
                 s1.innerHTML += n4
                 break; 

               }*/
       }
}


