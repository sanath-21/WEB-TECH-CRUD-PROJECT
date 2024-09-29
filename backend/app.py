from flask import Flask, request, jsonify
from models import Book, db
from config import app
from flask_cors import CORS

CORS(app)

# Read all books
@app.route('/books', methods=['GET'])
def get_books():
    books = Book.query.all()
    books_list = [{'id': book.id, 'title': book.title, 'author': book.author} for book in books]
    return jsonify(books_list)

# Create a new book
@app.route('/books', methods=['POST'])
def add_book():
    data = request.get_json()
    new_book = Book(title=data['title'], author=data['author'])
    db.session.add(new_book)
    db.session.commit()
    return jsonify({'message': 'Book added successfully!'})

# Update a book
@app.route('/books/<int:id>', methods=['PUT'])
def update_book(id):
    data = request.get_json()
    book = Book.query.get(id)
    if book:
        book.title = data['title']
        book.author = data['author']
        db.session.commit()
        return jsonify({'message': 'Book updated successfully!'})
    return jsonify({'message': 'Book not found!'}), 404

# Delete a book
@app.route('/books/<int:id>', methods=['DELETE'])
def delete_book(id):
    book = Book.query.get(id)
    if book:
        db.session.delete(book)
        db.session.commit()
        return jsonify({'message': 'Book deleted successfully!'})
    return jsonify({'message': 'Book not found!'}), 404

if __name__ == '__main__':
    app.run(debug=True)
