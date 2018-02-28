'use strict';

var app = app || {};

(function(module) {
const bookview = {};

bookview.initIndexPage = function() {
    $('.container').hide();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
}

module.bookview = bookview;
})(app)

$(function() {
    app.Book.fetchAll(app.bookView.initIndexPage);
})