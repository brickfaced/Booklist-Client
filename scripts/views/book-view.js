'use strict';

var app = app || {};

(function(module) {

  function resetView() {
    $('.container').hide();
  }

  const bookView = {};

  bookView.initIndexPage = function() {
    resetView();
    $('.book-view').show();
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = function(ctx) {
    resetView();
    $('.book-details').show();
    $('.book-details').empty();
    // $('.error-view-container').hide();
    // $('#book-form').hide();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('.book-details').append(template(ctx));
  };

  bookView.initCreateFormPage = function() {
    resetView();
    $('#book-form').show();
    $('#create-form').on('submit', function(event) {
      event.preventDefault();

      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };
    });
  };

  module.bookView = bookView;
})(app);

$(function() {
  app.Book.fetchAll(app.bookView.initIndexPage);
});