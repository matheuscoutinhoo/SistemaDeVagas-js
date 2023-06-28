let option
const listaVagas = []
menu()

function menu() {
    option = prompt("O que você quer fazer:\n1 - Criar vaga\n2 - Visualizar uma vaga\n3 - Inscrever um candidato\n4 - Excluir uma vaga\n5 - Listar vagas\n6 - sair")
    while (option !== '6') {
        switch(option) {
            case '1':
                criarVaga()
                break
            case "2":
                visualizarVaga()
                break
            case '3':
                inscreverCandidato()
                break
            case '4':
                excluirVaga()
                break
            case "5":
                listarVagasDisponiveis()
                break
            case '6':
                alert("Saindo...")
                break
            default:
                alert("Algo deu errado...")
                break
        }
        option = prompt("O que você quer fazer:\n1 - Criar vaga\n2 - Visualizar uma vaga\n3 - Inscrever um candidato\n4 - Excluir uma vaga\n5 - Listar vagas\n6 - sair")
    }
}

function criarVaga() {
    const novaVaga = {
        nome: "",
        descricao: "",
        dataLimite: "",
        qtdCandidatos: 0,
        candidatos: []
    }
    novaVaga.nome = prompt("Insira o nome da vaga:")
    novaVaga.descricao = prompt("Insira a descrição da vaga:")
    novaVaga.dataLimite = prompt("Insira a data limite da vaga:")
    listaVagas.push(novaVaga)
    alert("Vaga registrada!")
}

function visualizarVaga() {
    let index = prompt(`Você possui ${listaVagas.length} vagas. Insira o número da vaga a ser visualizada:`)
    index = parseInt(index) - 1
    if (index >= 0 && index < listaVagas.length) {
        alert(`Vaga número ${index + 1}:\nNome: ${listaVagas[index].nome}\nDescrição: ${listaVagas[index].descricao}\nData limite: ${listaVagas[index].dataLimite}\nQtd de candidatos: ${listaVagas[index].qtdCandidatos}`)
    } else {
        alert("Índice inválido!")
    }
}

function inscreverCandidato() {
    const candidato = {
        nome:""
    }

    candidato.nome = prompt("Insira o nome do candidato:")
    let index = parseInt(prompt(`Você possui ${listaVagas.length} vagas. Insira o número da vaga do candidato:`))
    index--
    if(index >= 0 && index < listaVagas.length) {
        const confirmar = confirm(`Deseja inscrever o candidato nessa vaga:\nVaga número ${index + 1}:\nNome: ${listaVagas[index].nome}\nDescrição: ${listaVagas[index].descricao}\nData limite: ${listaVagas[index].dataLimite}\nQtd de candidatos: ${listaVagas[index].qtdCandidatos}`)
        if(confirmar) {
            listaVagas[index].qtdCandidatos++
            listaVagas[index].candidatos.push(candidato.nome)
            console.log(listaVagas[index].candidatos)
            alert("Candidato inscrito")
        } else {
            menu()
        }
    } else {
        alert("índice inválido")
    }
}

function excluirVaga() {
    let index = parseInt(prompt(`Você possui ${listaVagas.length} vagas. Insira o número da vaga a ser excluída:`))
    index--
    if(index >= 0 && index < listaVagas.length) {
        const confirmar = confirm(`Deseja excluir essa vaga:\nVaga número ${index + 1}:\nNome: ${listaVagas[index].nome}\nDescrição: ${listaVagas[index].descricao}\nData limite: ${listaVagas[index].dataLimite}\nQtd de candidatos: ${listaVagas[index].qtdCandidatos}`)
        if(confirmar) {
            listaVagas.splice(index, 1)
            alert(`Vaga excluída com sucesso. Você possui ${listaVagas.length} vagas agora.`)
        } else {
            menu()
        }
    } else {
        alert("índice inválido")
    }
}

function listarVagasDisponiveis() {
    var listaVagasDisponiveis = ""
    for (let i = 0; i < listaVagas.length; i++) {
        listaVagasDisponiveis += (`${i+1} - ${listaVagas[i].nome}\n`)
    }
    alert(`Lista de vagas disponíveis:\n ${listaVagasDisponiveis}`)
}
