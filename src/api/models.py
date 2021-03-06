from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class UserData(db.Model):
    __tablename__ = 'userdata'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    surname = db.Column(db.String(120), unique=False, nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    company = db.Column(db.String(120), unique=False, nullable=False)
    numberDocumentation = db.Column(db.String(120), unique=False, nullable=False)
    typeDocumentation = db.Column(db.String(120), unique=False, nullable=False)
    postalCode = db.Column(db.String(120), unique=False, nullable=False)
    clients = db.relationship('Client', backref='userdata', lazy=True)
    suppliers = db.relationship('Supplier', backref='userdata', lazy=True)
    bills = db.relationship('Bill', backref='userdata', lazy=True)
    def serialize(self):
        return {
            "id" : self.id,
            "email" : self.email,
            "password" : self.password,
            "surname": self.surname,
            "address": self.address,
            "company":self.company,
            "numberDocumentation": self.numberDocumentation,
            "typeDocumentation": self.typeDocumentation,
            "postalCode": self.postalCode,
        }

class Supplier(db.Model):
    __tablename__ = 'supplier'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(120), nullable=False)
    nif = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(120), unique=False, nullable=False)
    postalCode = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), nullable=False)
    phoneNumber = db.Column(db.String(120), unique=False, nullable=False)
    userData_id = db.Column(db.Integer, db.ForeignKey('userdata.id'), nullable=False)
    products = db.relationship('Product', backref='supplier', lazy=True, cascade="all,delete")
    def serialize(self):
        return {
            "id" : self.id,
            "name" : self.name,
            "nif" : self.nif,
            "address": self.address,
            "postalCode": self.postalCode,
            "email":self.email,
            "phoneNumber": self.phoneNumber,
        }

class Bill(db.Model): #factura
    __tablename__ = 'bill'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    number = db.Column(db.String(120), nullable=False, unique=True)
    date = db.Column(db.Date, nullable=False)
    tax = db.Column(db.Float,nullable=False)
    discount = db.Column(db.Float, nullable=False)
    total = db.Column(db.Float,nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('userdata.id'), nullable=False)
    client_id = db.Column(db.Integer, db.ForeignKey('client.id'), nullable=False)
    productToBills = db.relationship('ProductToBill', backref='bill', lazy=True, cascade="all,delete")

    def serialize(self):
        return {
            "id" : self.id,
            "number" : self.number,
            "date" : self.date,
            "tax": self.tax,
            "discount": self.discount,
            "nif":self.client.nif,
            "total":self.total
        }

class Client(db.Model):
    __tablename__ = 'client'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    nif = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    postalCode = db.Column(db.Integer, nullable=False)
    userData_id = db.Column(db.Integer, db.ForeignKey('userdata.id'), nullable=False)
    bills = db.relationship('Bill', backref='client', lazy=True, cascade="all,delete")
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "nif": self.nif,
            "address": self.address,
            "postalCode": self.postalCode,
            "userData_id": self.userData_id
        }

class ProductToBill(db.Model):
    __tablename__ = 'producttobill'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    quantity = db.Column(db.Integer,nullable=False)
    price = db.Column(db.Float, nullable=False)
    bill_id = db.Column(db.Integer, db.ForeignKey('bill.id'), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'), nullable=False)

    def serialize(self):
        return {
            "id" : self.id,
            "quantity" : self.quantity,
            "price": self.price,
            "product": self.product.serialize(),
            
        }

class Product(db.Model):
    __tablename__ = 'product'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(50), nullable=False)
    code = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    price = db.Column(db.Float, nullable=False)
    supplier_id = db.Column(db.Integer, db.ForeignKey('supplier.id'), nullable=False)
    productToBills = db.relationship('ProductToBill', backref='product', lazy=True, cascade="all,delete")

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "code": self.code,
            "quantity": self.quantity,
            "price": self.price,
            "supplier_id": self.supplier_id,
            "supplier_name":self.supplier.name
        }
