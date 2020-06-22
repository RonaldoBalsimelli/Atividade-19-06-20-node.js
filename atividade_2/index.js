// ## Importe a biblioteca ##
let rs = require('readline-sync')



// ## Faça o código ##

let mascara = rs.question("Quando precisa sair de casa, voce esta usando mascara? Sim ou Nao ")
let maos = rs.question("Voce esta Higienizando as suas maos frequentemente? Sim ou Nao ")



if (mascara == "nao") {
    console.log("Voce precisa se atualizar e respeitar as pessoas que estao tomando a frente do problema, seu corno");
}

else  if (maos == "nao") {
    console.log("Voce precisa se atualizar e respeitar as pessoas que estao tomando a frente do problema, seu corno");  
}

else  {
    console.log("Parabens!! Voce esta seguindo direitinho as normas do ministerio da saude e OMS, voce nao e corno");
}





