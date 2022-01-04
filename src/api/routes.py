"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, redirect, Blueprint
from flask_jwt_extended import jwt_required, JWTManager, get_jwt_identity, create_access_token #dar de alta JWT y el token
from api.models import db, UserData, Supplier, Client, Product
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


#############################USUARIOS#################################

@api.route('/register', methods=['POST'])
def create_user():
#obtenemos datos que nos llegan en el api
      name = request.json.get('name', None)       
      surname = request.json.get('surname', None)
      email = request.json.get('email', None)
      adress = request.json.get('adress', None)
      company = request.json.get('company', None)
      password = request.json.get('password', None)
      numberDocumentation = request.json.get('numberDocumentation', None)
      typeDocumentation = request.json.get('typeDocumentation', None)
      postalCode = request.json.get('postalCode', None)


      # validar datos de la api
      
      #creamos el usuario 
      user = UserData(name=name, surname=surname, email=email, adress=adress, company=company, password=password, numberDocumentation=numberDocumentation, typeDocumentation=typeDocumentation, postalCode=postalCode)
      if not (user):
            return jsonify({"message": "Error datos", "created": False }), 400
      db.session.add(user)
      db.session.commit()   
      #retornamos respuesta el usuario se ha creado
      return jsonify({"message" : "usuario creado", "created" : True}), 200

#############################PROVEEDORES#################################

@api.route('/supplier', methods=['POST'])
def create_supplier():
      name = request.json.get('name') 
      address = request.json.get('address')
      nif = request.json.get('nif')
      postalCode = request.json.get('postalCode')
      email = request.json.get('email')
      phoneNumber = request.json.get('phoneNumber')
      try:
            supplier = Supplier(name=name, address=address, nif=nif, postalCode=postalCode, email=email, phoneNumber=phoneNumber, userData_id=1)
            if not (supplier):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            db.session.add(supplier)
            db.session.commit()   
            return jsonify({"message" : "supplier creado", "created" : True}), 200
      except Exception as e: 
            print(e)
            return jsonify({"message" : "supplier no creado", "created" : False}), 500


@api.route('/supplier', methods=['GET'])
#@jwt_required()
def get_supplier():
      # current_user = get_jwt_identity()
      suppliers = Supplier.query.filter_by(userData_id=1)
      data = [supplier.serialize() for supplier in suppliers]
      return jsonify(data), 200

@api.route('/supplier/<int:supplier_id>', methods=['DELETE'])
#@jwt_required()
def delete_suppliers(supplier_id):
      # current_user = get_jwt_identity()
      supplier = Supplier.query.filter_by(id=supplier_id).first() 

      if not supplier:
            return jsonify({"message": "El Proveedor no fue encontrado"}), 400
      db.session.delete(supplier)
      db.session.commit()
      return jsonify({"message" : "El Proveedor fue borrado con éxito"}), 200

@api.route('/supplier/<int:supplier_id>', methods=['PUT'])
def update_supplier(supplier_id):
      name = request.json.get('name') 
      nif = request.json.get('nif')
      address = request.json.get('address')  
      postalCode = request.json.get('postalCode')
      email = request.json.get ('email')
      phoneNumber =  request.json.get('phoneNumber')
      try:
            supplier = Supplier.query.filter_by(userData_id=1).first()         
            if not (supplier):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            supplier.name = name
            supplier.nif = nif
            supplier.address = address
            supplier.postalCode = postalCode
            supplier.email = email
            supplier.phoneNumber = phoneNumber
            db.session.commit()   
            return jsonify({"message" : "Proveedor Modificado", "created" : True}), 200
      except Exception as e:
            print(e) 
            return jsonify({"message" : "Proveedor no modificado", "created" : False}), 500

#############################CLIENTES#################################

@api.route('/client', methods=['POST'])
#@jwt_required()
def add_client():
     # current_user = get_jwt_identity()
      name = request.json.get("name")
      nif = request.json.get("nif")
      address = request.json.get("address")
      postalCode = request.json.get("postalCode")
      try:

            new_client = Client(name=name, address=address, nif=nif, postalCode=postalCode, userData_id= 1)
            #new_client = Client(name=name, address=address,nif=nif, postalCode=postalCode, userData_id= current_user)
            if not (new_client):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            db.session.add(new_client)
            db.session.commit()   
            return jsonify({"message" : "New Client Created", "created" : True}), 200
      except Exception as e: 
            print(e)
            return jsonify({"message" : "Cliente no Creado", "created" : False}), 500


@api.route('/client', methods=['GET'])
#@jwt_required()
def get_clients():
      # current_user = get_jwt_identity()
      clients = Client.query.filter_by(userData_id=1)
      data = [client.serialize() for client in clients]
      return jsonify(data), 200

@api.route('/client/<int:client_id>', methods=['DELETE'])
#@jwt_required()
def delete_clients(client_id):
      # current_user = get_jwt_identity()
      client = Client.query.filter_by(id=client_id).first() #o podemos usar el filter_by que siempre nos retorna un array(vacio o no)//.get:busca si no lo encuentra nos dice que no existe

      if not client:
            return jsonify({"message": "El Cliente no fue encontrado"}), 400
      db.session.delete(client)
      db.session.commit()
      return jsonify({"message" : "El Cliente fue borrado con éxito"}), 200

@api.route('/client/<int:client_id>', methods=['PUT'])
def update_client(client_id):
      name = request.json.get('name') 
      address = request.json.get('address')
      nif = request.json.get('nif')
      postalCode = request.json.get('postalCode')
      try:
            client = Client.query.filter_by(userData_id=1, id=client_id).first()         
            if not (client):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            client.name = name
            client.address = address
            client.nif = nif
            client.postalCode = postalCode
            db.session.commit()   
            return jsonify({"message" : "Cliente Modificado", "created" : True}), 200
      except: 
            return jsonify({"message" : "Cliente no modificado", "created" : False}), 500

#############################PRODUCTOS#################################

@api.route('/product', methods=['POST'])
#@jwt_required()
def add_product():
     # current_user = get_jwt_identity()
      name = request.json.get("name")
      code = request.json.get("code")
      quantity = request.json.get("quantity")
      price = request.json.get("price")
      supplier = request.json.get("supplier")
      try:

            new_product = Product(name=name, code=code, quantity=quantity, price=price, supplier_id=supplier)
           
            if not (new_product):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            db.session.add(new_product)
            db.session.commit()   
            return jsonify({"message" : "Nuevo Producto Creado", "created" : True}), 200
      except Exception as e: 
            print(e)
            return jsonify({"message" : "Producto no Creado", "created" : False}), 500


@api.route('/product', methods=['GET'])
#@jwt_required()
def get_products():
      # current_user = get_jwt_identity()
      suppliers = Supplier.query.filter_by(userData_id=1)
      suppliers_ids = [supplier.id for supplier in suppliers]
      products = Product.query.filter(Product.supplier_id.in_(suppliers_ids))#buscamos todos los productos del listado de proveedores
      data = [product.serialize() for product in products] 
      return jsonify(data), 200

@api.route('/product/<int:product_id>', methods=['DELETE'])
#@jwt_required()
def delete_products(product_id):
      # current_user = get_jwt_identity()
      product = Product.query.filter_by(id=product_id).first() #o podemos usar el filter_by que siempre nos retorna un array(vacio o no)//.get:busca si no lo encuentra nos dice que no existe

      if not product:
            return jsonify({"message": "El Producto no fue encontrado"}), 400
      db.session.delete(product)
      db.session.commit()
      return jsonify({"message" : "El Producto fue borrado con éxito"}), 200

@api.route('/product/<int:product_id>', methods=['PUT'])
def update_product(product_id):
      name = request.json.get('name') 
      code = request.json.get('code')
      quantity = request.json.get('quantity')
      price = request.json.get('price')
      supplier = request.json.get('supplier')
      try:
            product = Product.query.filter_by(supplier_id=supplier, id=product_id).first()         
            if not (product):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            product.name = name
            product.code = code
            product.quantity = quantity
            product.price = price
            product.supplier_id = supplier
            db.session.commit()   
            return jsonify({"message" : "Producto Modificado", "created" : True}), 200
      except Exception as e:
            print(e) 
            return jsonify({"message" : "Producto no modificado", "created" : False}), 500