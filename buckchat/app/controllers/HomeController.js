var blueprint = require('@onehilltech/blueprint')
    , util    = require('util')
    , User    = require('../models/User');
    ;

function HomeController() {
    blueprint.BaseController.call(this);
}

blueprint.controller(HomeController);

HomeController.prototype.displayPage = function() {
    return function(req, res) {
        return res.render('home.pug', {name: req.user.name});
    };
};

module.exports = exports = HomeController;