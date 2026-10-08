import ServiceFilme from "../service/filme.js"

class ControllerFilme {

    Buscar(req, res) {
        try {
            const filmes = ServiceFilme.Buscar()

            res.send({ filmes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const titulo = ServiceFilme.BuscarUm(id)

            res.send({ titulo })
        } catch (e) {
            res.send({ message: e.message })
        }

    }

     BuscarClassificacao(req, res) {
        try {
            const classificacao = req.body.classificacao
            const titulo = ServiceFilme.BuscarClassificacao(classificacao)


            res.send({ titulo , classificacao })
        } catch (e) {
            res.send({ message: e.message })
        }

    }


    Criar(req, res) {
        try {
            const titulo = req.body.titulo
            const classificacao = req.body.classificacao
            const descricao = req.body.descricao
            const lancado = req.body.lancado
            ServiceFilme.Criar(titulo, classificacao, descricao, lancado)

            res.send({ message: "Criado com Sucesso!" })
        } catch (e) {
            res.send({ message: e.message })
        }

    }

    Alterar(req, res) {
        try {
            const id = req.params.id
            const titulo = req.body.titulo
            const classificacao = req.body.classificacao
            const descricao = req.body.descricao
            const lancado = req.body.lancado
            ServiceFilme.Alterar(id, titulo, classificacao, descricao, lancado)

            res.send({ message: "Alterado com Sucesso!!" })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    AlterarLancado( req, res ) {
        try {
            const id = req.params.id
            const lancado = req.body.lancado
            ServiceFilme.Alterar(id, lancado)

            res.send({ message: "Alterado com Sucesso!!!"})
        } catch(e) {
            res.send({ message: e.message })
        }
    }
    Deletar(req, res) {
        try{
            const id = req.params.id

            ServiceFilme.Deletar(id)

            res.send({message: "Deletado com Sucesso!"})
        } catch(e){
            res.send({ message: e.message })
        }
    }
}

export default new ControllerFilme