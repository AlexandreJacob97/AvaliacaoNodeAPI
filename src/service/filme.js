import Filme from "../model/filme.js"

class ServiceFilme{
    Buscar() {
        return Filme.Buscar()
    }

    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o número")
        }

        return Filme.BuscarUm(id)
    }

    BuscarClassificacao(titulo, classificacao) {
        if( !titulo || !classificacao  ) {
            throw new Error("Favor informar a classificação indicativa correta")
        }

        return Filme.BuscarClassificacao(titulo, classificacao)
    }

    Criar(titulo, classificacao, descricao, lancado) {
        if (!titulo || !classificacao || !descricao || !lancado) {
            throw new Error("Favor informar os dados corretamente!")
        }

        Filme.Criar(titulo,classificacao,descricao,lancado)
    }

    Alterar(id, titulo, classificacao, descricao, lancado) {
        if(!id || isNaN(id) || !titulo || !classificacao || !descricao || ! lancado) {
            throw new Error("Favor informar os dados corretamente!")
        }

        Filme.Alterar(id, titulo, classificacao, descricao, lancado)
    }

    AlterarLancado(id,lancado) {
        if(!id || isNaN(id) || !lancado) {
            throw new Error("Favor informar os dados corretamente")
        }

        Filme.AlterarLancado(id, lancado)
    }

    Deletar(id){
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id Correto...")
        }

        Filme.Deletar(id)
    }
}

export default new ServiceFilme()