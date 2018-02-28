'use strict'
var app = app || {};
var _API_URL_ = 'http://localhost:3000';

(function(module) {

    function errorCallback(err) {
        console.error(err);
        module.errorView.initErrorPage(err);
    }

    function Book(rawBookObj) {
Object.keys(rawBookObj).forEach(key => this[key] = rawBookObj[key]);
}


Book.prototype.toHtml = function() {
    let template = Handlebars.compile($('#book-list-template').text());
    return template(this);
};

Book.all = [];

Book.loadAll = rows => Book.all = rows.sort((a, b) => b.title - a.title).map(book => new Book(book));

Book.fetchAll = callback =>
$.get(`${_API_URL_}/api/v1/books/:id`)
.then(Book.loadAll)
.then(callback)
.catch(errorCallback);

Book.fetchOne = callback =>
$.get(`${_API_URL_}/api/v1/books/:id`)
.then(Book.loadAll)
.then(callback)
.catch(errorCallback);

module.Book = Book;

})(app);

