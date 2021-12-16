from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

#class User(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
  #  is_active = db.Column(db.Boolean(), unique=False, nullable=False)
   # usuario = db.Column(db.String(120), nullable=False)

class UserData(db.Model):

	_tablename_='UserData'
	id = db.Column(db.Integer, primary_key=True)
	name=db.Column (db.String(120), unique=False, nullable=False)
	surname=db.Column (db.String(120), unique=False, nullable=False)
	email=db.Column (db.String(120), unique=False, nullable=False)
	adress=db.Column(db.String(120), unique=False, nullable=False)
	company=db.Column(db.String(120),unique=False, nullable=True)
	password=db.Column(db.String(120),unique=False, nullable=True)
	numberDocumentation=db.Column(db.String(120), unique=False, nullable=True)
	typeDocumentation=db.Column(db.String(10), unique=False, nullable=True)
	postalCode=db.Column(db.Integer, unique=False, nullable=True)
	#client_id=db.Column(db.Integer(120), ForeignKey("Client.id"), unique=True, nullable=True)

class Supplier(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    nif = db.Column(db.String(50), unique=True, nullable=False)
    address =  db.Column(db.String(120), nullable=False)
    postalCode = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    phoneNumber = db.Column(db.String(50), unique=True, nullable=True)
