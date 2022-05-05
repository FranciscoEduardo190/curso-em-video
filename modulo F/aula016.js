function parimpar(n){
    if(n%2 == 0){
        return "par"
    } else {
        return "impar"
    }
}
console.log(parimpar(4))

function somar(x=0, y=0){
    let a = x + y
    return a;
}
var b = [4,11 ]
 console.log(somar(b[0], b[1]))
 /* */
 let v = function(x) {
     return x*2
 }
 console.log(v(5))
 /* fatorial  recursividade */
 var c = function fatorial(n){
     if(n == 1){
         return 1
     }else{
    far = n * fatorial(n-1)
    return far
    }

 }
 console.log(c(5))
 

