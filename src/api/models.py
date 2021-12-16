from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserData(db.Model):
	_tablename_='UserData'
	id = db.Column(db.Integer, primary_key=True)
	name = db.Column (db.String(120), unique=False, nullable=False)
	surname = db.Column (db.String(120), unique=False, nullable=False)
	email = db.Column (db.String(120), unique=False, nullable=False)
	adress = db.Column(db.String(120), unique=False, nullable=False)
	company = db.Column(db.String(120),unique=False, nullable=True)
	password = db.Column(db.String(120),unique=False, nullable=True)
	numberDocumentation = db.Column(db.String(120), unique=False, nullable=True)
	typeDocumentation = db.Column(db.String(10), unique=False, nullable=True)
	postalCode = db.Column(db.Integer, unique=False, nullable=True)
	supplier = db.relationship('Supplier', backref='supplier.id', lazy=True)
	client = db.relationship('Client', backref='client.id', lazy=True)
	#client_id=db.Column(db.Integer(120), ForeignKey("Client.id"), unique=True, nullable=True)

class Supplier(db.Model): #proveedores
    id = db.Column(db.Integer, primary_key=True)
	userData = db.Column(db.Integer, db.ForeignKey('userdata.id'),
        nullable=False)
    name = db.Column(db.String(120), unique=True, nullable=False)
    nif = db.Column(db.String(50), unique=True, nullable=False)
    address =  db.Column(db.String(120), nullable=False)
    postalCode = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    phoneNumber = db.Column(db.String(50), unique=True, nullable=True)
	product = db.relationship('Product', backref='product.id', lazy=True)

class Bill(db.Model): #factura
	id = db.Column(db.Integer, primary_key=True)
	client = db.Column(db.Integer, db.ForeignKey('client.id'),
        nullable=False)
	number = db.Column(db.Integer, nullable=False, unique=True)
	date = db.Column(db.DateTime, nullable=False)
	tax = db.Column(db.Integer,nullable=False)
	discount = db.Column(db.Integer, nullable=False)
	productToBill = db.relationship('ProductToBill', backref='producttobill.id', lazy=True)

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    nif = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    postalCode = db.Column(db.Integer, nullable=False)
	userData = db.Column(db.Integer, db.ForeignKey('userdata.id'),
        nullable=False)
	bill = db.relationship('Bill', backref='bill.id', lazy=True)

class ProductToBill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    quantity = db.Column(db.Integer,nullable=False)
    price = db.Column(db.Float, nullable=False)
    bill = db.Column(db.Integer, db.ForeignKey('bill.id'),
        nullable=False)
    product = db.Column(db.Integer, db.ForeignKey('product.id'),
        nullable=False)

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    code = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
	price = db.Column(db.Float, nullable=False)
	supplier = db.Column(db.Integer, db.ForeignKey('supplier.id'),
        nullable=False)
	productToBill = db.relationship('ProductToBill', backref='producttobill.id', lazy=True)