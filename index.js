const express = require('express');

const app = express();
const port = 3000;
// const port = process.env.PORT || "8000";

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
});
app.use(express.json());

/**
 * TEST GET METHOD
 */

/**
 * test url: localhost:3000
 * method: get
 * response: Hello world
 */
app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

/**
 * test url: localhost:3000/getTest
 * method: get
 * response: Hello world! I'm get
 */
app.get('/getTest', (req, res) => {
    res.status(200).send('Hello world! I\'m get');
});

/**
 * test url: localhost:3000/getTestReqParam?name=Reshan&adddress=Galle
 * method: get
 * response: {
    "requestBody": {
        "name": "Reshan",
        "adddress": "Galle"
    }
   }
 */
app.get('/getTestReqParam', (req, res) => {
    res.status(200).json({requestBody: req.query});
});

/**
 * test url: localhost:3000/getTestReqPathVariable/Reshan/Galle
 * method: get
 * response: {
    "requestBody": {
        "name": "Reshan",
        "address": "Galle"
    }
   }
 */
app.get('/getTestReqPathVariable/:name/:address', (req, res) => {
    res.status(200).json({requestBody: req.params});
});

/**
 * test_url: localhost:3000/getTestReqPathVariableWithReqParam/Reshan/Galle?age=24&telephone=12345678
 * method: get
 * response: {
    "requestBody": {
        "pathVariable": {
            "name": "Reshan",
            "address": "Galle"
        },
        "queryParam": {
            "age": "24",
            "telephone": "12345678"
        }
    }
   }
 */
app.get('/getTestReqPathVariableWithReqParam/:name/:address', (req, res) => {
    res.status(200).json({
        requestBody: {
            pathVariable: req.params,
            queryParam: req.query
        }
    });
});

/**
 * TEST POST METHOD
 */

/**
 * test url: localhost:3000/postTest
 * method: post
 * response: Hello world! I'm post
 */
app.post('/postTest', (req, res) => {
    res.status(200).send('Hello world! I\'m post');
});

/**
 * test url: localhost:3000/postTestReqJson
 * method: post
 * request: {
	"name": "Reshan",
	"address": "galle",
	"telephone": 1234567890,
	"isTrue": true,
	"isNull": null
   }
 * response: {
    "name": "Reshan",
    "address": "galle",
    "telephone": 1234567890,
    "isTrue": true,
    "isNull": null
   }
 */
app.post('/postTestReqJson', (req, res) => {
    res.status(200).send(req.body);
});

/**
 * test url: localhost:3000/postTestResJson
 * method: post
 * request: {
	"name": "Reshan",
	"address": "galle"
   }
 * response: {
    "requestBody": {
        "name": "Reshan",
        "address": "galle"
    }
   }
 */
app.post('/postTestResJson', (req, res) => {
    res.status(200).json({requestBody: req.body});
});


/**
 * extra (patch , delete methods)
 */
app.patch('/patchTest', (req, res) => {
    res.status(200).send('Hello world! I\'m patch');
});

app.delete('/deleteTest', (req, res) => {
    res.status(200).send('Hello world! I\'m delete');
});