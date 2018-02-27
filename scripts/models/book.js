'use strict'

(function(module) {
function Book(){

}

Book.all = [];

Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    


    return template(this);
};

module.Article =Article;

})(app);