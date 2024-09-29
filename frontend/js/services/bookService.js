app.factory('BookService', function($http) {
    var service = {};

    service.getBooks = function() {
        return $http.get('http://localhost:5000/books');  // Updated URL
    };

    service.addBook = function(book) {
        return $http.post('http://localhost:5000/books', book);  // Updated URL
    };

    service.updateBook = function(id, book) {
        return $http.put('http://localhost:5000/books/' + id, book);  // Updated URL
    };

    service.deleteBook = function(id) {
        return $http.delete('http://localhost:5000/books/' + id);  // Updated URL
    };

    return service;
});
