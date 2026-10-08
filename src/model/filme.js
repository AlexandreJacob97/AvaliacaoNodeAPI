const filmes = new Array(
    {titulo:"A volta dos que não foram", classificacao: "10", descricao:"a volta das pessoas que nunca foram", lancado:'S'},
    {titulo:"Resident Evil", classificacao:18, descricao:"Filme de zumbi", lancado:'S'},
    {titulo:"Fuga de Ohio", classificacao:14, descricao:"Snake Pliskin retorna para salvar o filho do Presidente", lancado:'N'},
    {titulo:"Gremlins 2", classificacao: "10", descricao:"agora com mais Gremlins", lancado:'S'}
)

class Filme {
    Buscar() {
        return filmes
    }

    BuscarUm(id) {
        return filmes[id]
    }

    BuscarClassificacao(titulo, classificacao) {
        return filmes[titulo, classificacao]
    }

    Criar(titulo,classificacao,descricao,lancado) {
        filmes.push({ titulo, classificacao, descricao, lancado })
    }

    Alterar(id,titulo,classificacao,descricao,lancado) {
        filmes[id].titulo = titulo
        filmes[id].classificacao = classificacao
        filmes[id].descricao = descricao
        filmes[id].lancado = lancado
    }

    AlterarLancado(id,lancado) {
        filmes[id].lancado = lancado
    }

    Deletar(id) {
        titulos.splice(id, 1)
    }
}

export default new Filme()