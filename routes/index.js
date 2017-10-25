var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readFile('gyf.txt', 'utf-8', function(err, data) {
        var num = parseInt(data.split('：')[1]) + 1;
        fs.writeFile('gyf.txt', '访问量：' + num, function(err) {
            res.render('index', {
                title: '访问量：' + num
            });
        })
    })
});
router.post('/gyf', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // if (req.body.abc == 1) {
    //     res.send({
    //         "name": "男装"
    //     })
    // } else if (req.body.abc == 2) {
    //     res.send({
    //         "name": "女装"
    //     })
    // } else {
    //     res.send({
    //         "name": "报错"
    //     })
    // }
    // var temp = '';
    // switch (req.body.abc) {
    //     case "1":
    //         temp = 'nanzhuang'
    //         break;
    //     case "2":
    //         temp = 'nvzhuang'
    //         break;
    // }
    // res.send({
    //     "name": temp
    // })
    var temp = [];
    switch (req.body.abc) {
        case "1":
            temp = [1, 2, 3]
            break;
        case "2":
            temp = [4, 5, 6]
            break;
    }
    res.send(temp)
})
module.exports = router;