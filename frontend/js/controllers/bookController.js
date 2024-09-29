app.controller('BookController', function($scope, BookService) {
    $scope.books = [];
    $scope.newBook = {};
    $scope.editMode = false;
    $scope.currentBook = {};

    // Get all books
    BookService.getBooks().then(function(response) {
        $scope.books = response.data;
    });

    // Add a book
    $scope.addBook = function() {
        BookService.addBook($scope.newBook).then(function(response) {
            alert(response.data.message);
            $scope.books.push($scope.newBook);
            $scope.newBook = {};
        });
    };

    // Edit a book
    $scope.editBook = function(book) {
        $scope.currentBook = angular.copy(book);
        $scope.editMode = true;
    };

    // Update a book
    $scope.updateBook = function() {
        BookService.updateBook($scope.currentBook.id, $scope.currentBook).then(function(response) {
            alert(response.data.message);
            const index = $scope.books.findIndex(b => b.id === $scope.currentBook.id);
            $scope.books[index] = $scope.currentBook;
            $scope.editMode = false;
            $scope.currentBook = {};
        });
    };

    // Delete a book
    $scope.deleteBook = function(id) {
        BookService.deleteBook(id).then(function(response) {
            alert(response.data.message);
            $scope.books = $scope.books.filter(b => b.id !== id);
        });
    };
});
