const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    const db = client.db('escola');

    if(err){
        console.log(err);
    }

    db.collection('turmas').find({}).toArray((err, dados) => {
        console.log(dados);
        
        for(let turma of dados){
            console.log(turma.nome);
        }
        client.close();
    });

});