<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

Executar docker-compose up -d
Criar fila *lista_uf_atualizada* em http://localhost:15672/#/queues admin:admin
npm install
npm run start

- GET http://localhost:3000/estados
- GET http://localhost:3000/populacao/rj
- GET http://localhost:3000/estados/fila (método publica na fila lista_uf_atualizada, a mesma consome e printa no log)
- GET http://localhost:3000/estados/rest (mesmo retorno anterior, porém em REST)

