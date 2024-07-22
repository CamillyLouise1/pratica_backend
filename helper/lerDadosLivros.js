import fs from 'node:fs';

const lerDadosLivros = (callback) => {
    fs.readFile('livros.json', 'utf8', (err, data)=>{
        if(err){
            callback(err)
        }
        try{
            const livros = JSON.parse(body)
            callback(null, livros)
        } catch (error) {
            callback(error)
        }

    })
}

export default lerDadosLivros;