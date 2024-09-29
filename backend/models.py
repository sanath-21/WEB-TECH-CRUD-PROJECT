from config import db, app

class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    author = db.Column(db.String(100))

# Create the database tables
with app.app_context():
    db.create_all()
