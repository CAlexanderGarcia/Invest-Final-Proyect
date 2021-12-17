from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserData(db.Model):
    __tablename__ = 'userdata'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    surname = db.Column(db.String(120), unique=False, nullable=False)
    adress = db.Column(db.String(120), unique=False, nullable=False)
    company = db.Column(db.String(120), unique=False, nullable=False)
    numberDocumentation = db.Column(db.String(120), unique=False, nullable=False)
    typeDocumentation = db.Column(db.String(120), unique=False, nullable=False)
    postalCode = db.Column(db.String(120), unique=False, nullable=False)
    client_id = db.relationship('Client', backref='userdata', lazy=True)
    

class Supplier(db.Model):
    __tablename__ = 'supplier'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    nif = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=True, nullable=False)
    postalCode = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    phoneNumber = db.Column(db.String(120), unique=True, nullable=False)
    userData_id = db.Column(db.Integer, db.ForeignKey('userdata.id'), nullable=False)


class Bill(db.Model): #factura
    __tablename__ = 'bill'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    number = db.Column(db.Integer, nullable=False, unique=True)
    date = db.Column(db.DateTime, nullable=False)
    tax = db.Column(db.Integer,nullable=False)
    discount = db.Column(db.Integer, nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)
    productToBill_id = db.relationship('ProductToBill', backref='bill', lazy=True)

class Client(db.Model):
    __tablename__ = 'client'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    nif = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    postalCode = db.Column(db.Integer, nullable=False)
    userData_id = db.Column(db.Integer, db.ForeignKey('userdata.id'), nullable=False)
    bill_id = db.relationship('Bill', backref='client', lazy=True)

class ProductToBill(db.Model):
    __tablename__ = 'producttobill'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    quantity = db.Column(db.Integer,nullable=False)
    price = db.Column(db.Float, nullable=False)
    bill_id = db.Column(db.Integer, db.ForeignKey('bill.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    code = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    supplier_id = db.Column(db.Integer, db.ForeignKey('supplier.id'), nullable=False)
    productToBill_id = db.relationship('ProductToBill', backref='product', lazy=True)