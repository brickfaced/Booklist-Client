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
    $('.book-details').empty();
    $('.book-details').show();
    let template = Handlebars.compile($('#book-detail-template').text());
    $('.book-details').append(template(ctx));
  };

  bookView.initCreateFormPage = function() {
    resetView();
    $('.book-form').show();
    $('#create-form').on('submit', function(event) {
      event.preventDefault();

      let book = {
        title: event.target.bookTitle.value,
        author: event.target.bookAuthor.value,
        isbn: event.target.bookIsbn.value,
        image_url: event.target.bookImage.value,
        description: event.target.bookDescription.value,
      };
      module.Book.create(book);
    });
  };

  module.bookView = bookView;
})(app);