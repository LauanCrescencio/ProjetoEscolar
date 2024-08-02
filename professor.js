function name() {
    var tit = document.getElementById('title')
    var name = window.prompt('Qual o nome do aluno?')
    tit.innerHTML = `ALUNO: ${name.toUpperCase()}`
}

function select() {
    var bimestre = Number(document.getElementById('bimestre').value)
    var materias = ['Português', 'Matemática', 'Ciência', 'Inglês', 'Geografia', 'História']
    switch(bimestre) {
        case 1:
            var notas = []
            materias.forEach ((materias) => {
                notas.push(window.prompt(`Nota de ${materias}:`))
            })
            notas.forEach ((notas, index) => {
                document.getElementById(`a${index + 1}`).innerHTML = notas
            })
        break
        case 2:
            var notas2 = []
            materias.forEach((materias) => {
                notas2.push(window.prompt(`Notas de ${materias}:`))
            })
            notas2.forEach((notas2, index) => {
                document.getElementById(`b${index + 1}`).innerHTML = notas2
            })
            break
        case 3:
            var notas3 = []
            materias.forEach((materias) => {
                notas3.push(window.prompt(`Notas de ${materias}:`))
            })
            notas3.forEach((notas3, index) => {
                document.getElementById(`c${index + 1}`).innerHTML = notas3
            })
        break
        case 4:
            var notas4 = []
            materias.forEach((materias) => {
                notas4.push(window.prompt(`Notas de ${materias}:`))
            })
            notas4.forEach((notas4, index) => {
                document.getElementById(`d${index + 1}`).innerHTML = notas4
            })
        break
        default: 
            window.alert('[ERRO]Bimestre inválido!')
            return
    }
}
function clean() {
    var bimestre = Number(document.getElementById('bimestre').value)
    var prefixoid;
    switch(bimestre) {
        case 1: 
        prefixoid = 'a'
        break
        case 2: 
        prefixoid = 'b'
        break
        case 3: 
        prefixoid = 'c'
        break
        case 4: 
        prefixoid = 'd'
        break
        default:
        return
    }
    for (var i = 1; i<=6; i++) {
        document.getElementById(`${prefixoid}${i}`).innerHTML = 0
    }
}
function exit() {
    window.location.href = 'index.html'
}