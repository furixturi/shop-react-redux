const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.get('/items', function(req, res) {
    fs.readFile(path.normalize(__dirname + '/json/all.json'),
        'utf8', 
        function(err, data) {
            if(err) {
                return console.log(err)
            }
            res.send(data)
        }
    )
})

app.get('/items/:id', function(req, res) {
    // const idx = (parseInt(req.params['id']) - 1).toString();
    const idx = req.params['id'];

    fs.readFile(path.normalize(__dirname + '/json/all.json'), 
        'utf8', 
        function(err, data) {
            if(err) {
                return console.log(err)
            }
            const items = JSON.parse(data)
            const item = items.data.find((item) => {
                return item['id'] === idx
            })
            res.send(JSON.stringify(item))
        }
    )
})

app.get('/categories', function(req, res) {
    fs.readFile(path.normalize(__dirname + '/json/categories.json'), 
        'utf8', 
        function(err, data) {
            if(err) {
                return console.log(err)
            }
            res.send(data)
        }
    )
})

app.listen(3000, function() {
    console.log('Node API Server listening on port 3000!')
})