let estado = function (a){
    if (a === "SP" || a === "RJ") {
        return "Acesso permitido"
    } else {
        return "Acesso negado"
    }
}

module.exports = estado