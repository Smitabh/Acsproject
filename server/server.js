var express = require('express');
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// test route
router.get('/getTeacher', function(req, res) {
    res.json({ message: 'API call' });
});

app.use('/api', router);
app.listen(8108);