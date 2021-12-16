from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    usuario = db.Column(db.String(50), nullable=False) 


   

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "usuario": self.usuario,
            # do not serialize the password, its a security breach
        }

class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    nif = db.Column(db.String(50), nullable=False)
    address =  db.Column(db.String(120), nullable=False)
    postalCode = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    phoneNumber = db.Column(db.String(50), unique=True, nullable=True)


