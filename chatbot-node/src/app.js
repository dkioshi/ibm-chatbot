const express = require('express');
const bodyParser = require('body-parser');
const watson = require('../src/watson/client-watson');
const cors = require('cors')({origin: true});
const app = express();

//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/message/', (req, res) => {
    cors(req, res, () => {
        const {text, context = {}} = req.body;

        const params = {
            input: {
                text: 'quero abrir um chamado'
            },
            workspace_id: '4e98299c-4d7d-404e-b521-0a12a9da06e4',
            context,
        };
    
        watson.message(params, (err, response) => {
            if (err) res.status(500).json(err);
            res.json(response);
        });  
    });
});

app.listen(4000);