const MongoClient = require('mongodb').MongoClient;
let entrada = process.argv[2];

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('escola');

    if(err){
        console.log(err);
    }

    let novaTurma = {
        nome: entrada
    }

    db.collection('turmas').insert(novaTurma, (err, resposta) => {
        console.log(resposta);
        
        client.close();
    });

});