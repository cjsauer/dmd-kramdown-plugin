module.exports = function(options){
    options.partial = options.partial.concat([ __dirname + "/../partial/*.hbs" ]);
    options.partial = options.helper.concat([ __dirname + "/../helper/*.js" ]);
};
