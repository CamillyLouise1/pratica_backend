//Paciência e uma boa prova. Que a Força esteja com você!
import { v4 as uuidv4 } from 'uuid'; //Se não souber, não precisa usar.
import  { createServer } from 'node:http';
import fs from 'node:fs';

import lerDadosLivros from '../helper/lerDadosLivros';

const PORT = 3333; 

const server = createServer((request, response)=>{
    const {url, method} = request;
    if(method === 'POST' && url === '/livros'){
     let body = '';
     request.on('data', (chunk)=>{
        body += chunk;
     })
    request.on('end', ()=>{
        const novoLivro = JSON.parse(body)
      if(err){
        response.writeHead(500, {'Contenty-Type':'application.json'})
        response.end(JSON.stringify({message: 'Erro ao ler os livros'}))
        return
      }
      novoLivro.id = uuidv4();
      livros.push(novoLivro);
      fs.watchFile('livros.json', JSON.stringify(livros, null, 2), (err)=>{
        if(err){
            response.writeHead(500, {'Content-type':'application.json'})
            response.end(JSON.stringify({message: 'Erro ao cadastrar os livros'}))
            return
         }
            response.writeHead(201, {'Content-Type':'application.json'})
            response.end(JSON.stringify({novoLivro}))
      })
    })
    }else if(method === 'POST' && url === '/autores'){
        let body = '';
        request.on('data', (chunk)=>{
            body += chunk;
        })
        request.on('end', ()=>{
            const novoAutor = JSON.parse(body)
            if(err){
                response.writeHead(500, {'Content-Type':'application.json'})
                response.end(JSON.stringify({message: 'Erro ao ler autor'}))
                return
            }
            novoAutor.id = uuidv4();
            autores.push(novoAutor);
            fs.watchFile('livros.json', JSON.stringify(autores, null, 2), (err)=>{
                if(err){
                   response.writeHead(500, {'Content-type':'application.json'})
                   response.end(JSON.stringify({message: 'Erro ao cadastrar os autores'}))
                   return
                }
                response.writeHead(201, {'Content-Type':'application.json'})
                response.end(JSON.stringify({novoAutor}))
            })
        })

    }else if(method === 'POST' && url === '/editoras'){
        let body = '';
        request.on('data', (chunk)=>{
            body += chunk;
        })
        request.on('end', ()=>{
            const novoEditor = JSON.parse(body)
            if(err){
                response.writeHead(500, {'Content-Type':'application.json'})
                response.end(JSON.stringify({message: 'Erro ao ler editor'}))
                return
            }
            novoEditor.id = uuidv4();
            editores.push(novoEditor);
            fs.watchFile('livros.json', JSON.stringify(editores, null, 2), (err)=>{
                if(err){
                response.writeHead(500, {'Content-Type':'application.json'})
                response.end(JSON.stringify({novoEditor}))
                }
            })
        })

    }else if(method === 'GET' && url === '/livros/'){
        lerDadosLivros((err, livros)=>{
            if(err){
                response.writeHead(500, {'Content-Type':'application.json'})
                response.end(JSON.stringify({message: 'Erro ao visualizar o livro'}))
                return
            }
            response.writeHead(200, {'Content-Type':'application.json'})
            response.end(JSON.stringify(livros))
        })

    }else if(method === 'PUT' && url === '/editoras/'){

    }else if(method === 'DELETE' && url === '/autores/'){

    }else if(method === 'GET' && url === '/editoras'){
         
    }

})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT http://localhost:${PORT}`);
});
