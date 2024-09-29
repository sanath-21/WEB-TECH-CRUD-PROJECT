app.factory('BookService', function($http) {
    var service = {};

    service.getBooks = function() {
        return $http.get('http://localhost:5000/books'); 
    };

    service.addBook = function(book) {
        return $http.post('http://localhost:5000/books', book);  
    };

    service.updateBook = function(id, book) {
        return $http.put('http://localhost:5000/books/' + id, book);  
    };

    service.deleteBook = function(id) {
        return $http.delete('http://localhost:5000/books/' + id);  
    };

    return service;
});
