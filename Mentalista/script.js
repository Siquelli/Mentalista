var numSecreto = parseInt(Math.random() * 10)
var tentativas = 3
function verificar (){
    var res = document.getElementById("res")
    var tent = document.getElementById("tent")                  
    while(tentativas > 0){
        var num = document.getElementById("num").value
        if (num == numSecreto) {
            res.innerHTML = "Acertou!!"
            tent.innerHTML = ""
            break
        } else if (num > numSecreto) {
            res.innerHTML = "O número é menor"
            tentativas -= 1
            tent.innerHTML = `Você tem ${tentativas} tentativa(s)`
            break
        } else if (num < numSecreto){
            res.innerHTML = "O número é maior"
            tentativas -= 1
            tent.innerHTML = `Você tem ${tentativas} tentativa(s)`
            break
        }
    }
    if (tentativas == 0){
        res.innerHTML = "Suas tentativas acabaram!! O número secreto era " + numSecreto
        tent.innerHTML = ""              
    }    
}
