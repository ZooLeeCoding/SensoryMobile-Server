const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());
app.use(express.static(__dirname));

app.post('/upload', function(req, res) {
    if (!req.files) {
        return res.status(400).send('No files were uploaded.');
    }
    let dataFile = req.files.dataFile;
    console.log(req.files.dataFile.name);

    dataFile.mv(__dirname + '/uploads/' + dataFile.name, function(err) {
        if (err) {
            return res.status(500).send(err);
        }
        return res.send('File uploaded!');
    });
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});