/**
 * Created by triptoli on 4/30/2017.
 */
var User = require('../models/user')
module.exports=function (router) {

    router.get('/', function (req, res) {
        res.send('Welcome to mean')

    });

    router.post('/user', function (req, res) {
        var data = req.body;
        console.log(data);
        var user = new User();
        user.username = data.username;
        user.password = data.password;
        user.email = data.email;
        user.save(function (err) {
            if(err)
            {
                res.json(err);
            }
            else {
                res.json('User Registered successfully');
            }
        });
    })

    return router;
}
