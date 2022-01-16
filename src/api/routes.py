"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, redirect, Blueprint
from flask_jwt_extended import jwt_required, JWTManager, get_jwt_identity, create_access_token #dar de alta JWT y el token
from api.models import db, UserData, Supplier, Client, Product, ProductToBill, Bill
from api.utils import generate_sitemap, APIException
import json 


api = Blueprint('api', __name__)
#############################TOKEN#################################

@api.route("/token", methods=["POST"])
def create_token():
    email = request.json.get("email")
    password = request.json.get("password")
    try:
        user = UserData.query.filter_by(email=email, password=password).first()    
        if user is None:
            return jsonify({"msg": "Email o Contraseñas Incorrectas"}), 401

        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token, "user_id": user.id}) 
    except Exception as e: 
            print(e)
            return jsonify({"message" : "Producto no Creado", "created" : False}), 500    
#############################USUARIOS#################################

@api.route('/register', methods=['POST'])
def create_user():
#obtenemos datos que nos llegan en el api
      body = json.loads(request.data) 
      # validar si el usuario existe o no.
      exist_email = UserData.query.filter_by(email=body["email"]).first()
      exist_documentation = UserData.query.filter_by(numberDocumentation=body["numberDocumentation"]).first()
      
      if not exist_email and not exist_documentation: 
      # validar datos de la api      
            if "surname" not in body:                       
                  return jsonify({"message": "No se han recibido los datos de nombre", "created": False }), 400
            if "company" not in body:                       
                  return jsonify({"message": "No se han recibido los datos de nombre/razón social", "created": False }), 400
            if "address" not in body:            
                  return jsonify({"message": "No se han recibido los datos de dirección", "created": False }), 400      
            if "email" not in body:            
                  return jsonify({"message": "No se han recibido los datos de email", "created": False }), 400      
            if "password" not in body:            
                  return jsonify({"message": "No se han recibido los datos de contraseña", "created": False }), 400
            if "numberDocumentation" not in body:            
                  return jsonify({"message": "No se han recibido los datos de numero de documentación", "created": False }), 400
            if "postalCode" not in body or not body["postalCode"].isdecimal():          
                  return jsonify({"message": "Los datos de código postal no son correctos", "created": False }), 400
            if "typeDocumentation" not in body:            
                  return jsonify({"message": "No se han recibido los datos de tipo de documentación", "created": False }), 400
                    
            
            #creamos el usuario       
            user = UserData(surname=body["surname"], company=body["company"], email=body["email"], address=body["address"], password=body["password"], numberDocumentation=body["numberDocumentation"], postalCode=body["postalCode"], typeDocumentation=body["typeDocumentation"])
            if not user:
                  return jsonify({"message": "Error datos", "created": False }), 400
            db.session.add(user)
            db.session.commit()   
            #retornamos respuesta el usuario se ha creado
            return jsonify({"message" : "usuario creado", "created" : True}), 200
      else:
            return jsonify({"message" : "Los datos de correo electrónico o número de identificación ya se encuentran registrados en nuestar base de datos", "created" : False}), 400 
           
            

#############################PROVEEDORES#################################

@api.route('/supplier', methods=['POST'])
@jwt_required()
def create_supplier():
      current_user = get_jwt_identity()
      name = request.json.get('name') 
      address = request.json.get('address')
      nif = request.json.get('nif')
      postalCode = request.json.get('postalCode')
      email = request.json.get('email')
      phoneNumber = request.json.get('phoneNumber')
      try:
            supplier = Supplier(name=name, address=address, nif=nif, postalCode=postalCode, email=email, phoneNumber=phoneNumber, userData_id=current_user)
            if not (supplier):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            db.session.add(supplier)
            db.session.commit()   
            return jsonify({"message" : "supplier creado", "created" : True}), 200
      except Exception as e: 
            print(e)
            return jsonify({"message" : "supplier no creado", "created" : False}), 500

@api.route('/supplier', methods=['GET'])
@jwt_required()
def get_supplier():
      current_user = get_jwt_identity()
      suppliers = Supplier.query.filter_by(userData_id=current_user)
      data = [supplier.serialize() for supplier in suppliers]
      return jsonify(data), 200

@api.route('/supplier/<int:supplier_id>', methods=['DELETE'])
@jwt_required()
def delete_suppliers(supplier_id):
      current_user = get_jwt_identity()
      supplier = Supplier.query.filter_by(id=supplier_id).first() 

      if not supplier:
            return jsonify({"message": "El Proveedor no fue encontrado"}), 400
      db.session.delete(supplier)
      db.session.commit()
      return jsonify({"message" : "El Proveedor fue borrado con éxito"}), 200

@api.route('/supplier/<int:supplier_id>', methods=['PUT'])
@jwt_required()
def update_supplier(supplier_id):
      current_user = get_jwt_identity()
      address = request.json.get('address')
      name = request.json.get('name')
      nif = request.json.get('nif')
      email = request.json.get('email')  
      postalCode = request.json.get('postalCode')
      phoneNumber =  request.json.get('phoneNumber')
      try:
            supplier = Supplier.query.get(supplier_id)       
            if not (supplier):
                  return jsonify({"message": "Error datos", "created": False }), 400
            print(name, nif, address, postalCode, email, phoneNumber)
            
            if supplier.name != name : 
                  supplier.name=name
            if supplier.nif != nif : 
                  supplier.nif=nif
            supplier.address = address
            supplier.postalCode = postalCode
            if supplier.email != email : 
                  supplier.email=email
            supplier.phoneNumber = phoneNumber
            db.session.commit()   
            return jsonify({"message" : "Proveedor Modificado", "created" : True}), 200
      except Exception as e:
            print(e) 
            return jsonify({"message" : "Proveedor no modificado", "created" : False}), 500

#############################CLIENTES#################################

@api.route('/clients', methods=['GET'])
@jwt_required()
def get_clients():
      current_user = get_jwt_identity()
      clients = Client.query.filter_by(userData_id=current_user)
      serialized_clients = list(map(lambda x: x.serialize(), clients))
      return jsonify({"clients": serialized_clients}), 200

@api.route('/client', methods=['POST'])
@jwt_required()
def add_client():
      current_user = get_jwt_identity()
      name = request.json.get("name")
      nif = request.json.get("nif")
      address = request.json.get("address")
      postalCode = request.json.get("postalCode")
      try:
            print(current_user)
            new_client = Client(name=name, address=address,nif=nif, postalCode=postalCode, userData_id= current_user)
            
            if not (new_client):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            db.session.add(new_client)
            db.session.commit()   
            return jsonify({"message" : "New Client Created", "created" : True}), 200
      except Exception as e: 
            print(e)
            return jsonify({"message" : "Cliente no Creado", "created" : False}), 500


@api.route('/client/<int:client_id>', methods=['DELETE'])
@jwt_required()
def delete_clients(client_id):
      current_user = get_jwt_identity()
      client = Client.query.filter_by(id=client_id).first() #o podemos usar el filter_by que siempre nos retorna un array(vacio o no)//.get:busca si no lo encuentra nos dice que no existe

      if not client:
            return jsonify({"message": "El Cliente no fue encontrado"}), 400
      db.session.delete(client)
      db.session.commit()
      return jsonify({"message" : "El Cliente fue borrado con éxito"}), 200

@api.route('/client/<int:client_id>', methods=['PUT'])
@jwt_required()
def update_client(client_id):
      current_user = get_jwt_identity()
      name = request.json.get('name') 
      address = request.json.get('address')
      nif = request.json.get('nif')
      postalCode = request.json.get('postalCode')
      try:
            client = Client.query.filter_by(userData_id=current_user, id=client_id).first()         
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
@api.route('/product/<int:product_id>', methods=['PUT'])
@jwt_required()
def update_product(product_id):
      try:
            current_user = get_jwt_identity()
            name = request.json.get('name') 
            code = request.json.get('code')
            quantity = request.json.get('quantity')
            price = request.json.get('price')
            supplier = request.json.get('supplier')
            product = Product.query.filter_by( id=product_id).first() 
            print(supplier, product_id)        
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

@api.route('/bills', methods=['POST'])
@jwt_required()
def create_bill():
      current_user = get_jwt_identity()
      name = request.json.get("name")
      code = request.json.get("code")
      quantity = request.json.get("quantity")
      price = request.json.get("price")
      supplier = request.json.get("supplier")
      print(request.json)
      user = UserData.query.get(current_user)    
      if user is None:
            return jsonify({"msg": "Email o Contraseñas Incorrectas"}), 401
      try:
            client_id = request.json.get("client_id")
            number_bill = request.json.get("number_bill")
            date_bill = request.json.get("date_bill")
            products = request.json.get("products")#almacenado de todos los productos
            total = request.json.get("total")
            if not client_id or not number_bill or not date_bill or not products or not total: return jsonify({"message": "Revisar campos que falten"}), 400
            client = Client.query.filter_by(id=client_id).first() #o podemos usar el filter_by que siempre nos retorna un array(vacio o no)//.get:busca si no lo encuentra nos dice que no existe

            if not client:
                  return jsonify({"message": "ID del Cliente no Existe"}), 400

            bill = Bill(number=number_bill, date=date_bill, tax=21, discount=0, client_id=client_id, total=total, user_id=user.id) #Creacion de factura
          
            if not (bill):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            db.session.add(bill)
            db.session.commit()
            for product in products: 
                  product = Product.query.filter_by(code=product.get("code"), supplier_id=product.get("supplier_id")).first()
                  product_to_bill = ProductToBill(quantity=product.quantity, price=product.price, bill_id=bill.id, product_id=product.id)
                  db.session.add(product_to_bill)
                  db.session.commit()      
            return jsonify({"message" : "La Factura ha sido Creada", "created" : True}), 200
      except Exception as e: 
            print(e)
            return jsonify({"message" : "La Factura no se ha Creado", "created" : False}), 500


@api.route('/products', methods=['GET'])
@jwt_required()
def get_products():
      current_user = get_jwt_identity()
      suppliers = Supplier.query.filter_by(userData_id=current_user)
      suppliers_ids = [supplier.id for supplier in suppliers]
      products = Product.query.filter(Product.supplier_id.in_(suppliers_ids))#buscamos todos los productos del listado de proveedores
      serialized_products = list(map(lambda p: p.serialize(), products))
      return jsonify({"products": serialized_products}), 200


@api.route('/product/<int:product_id>', methods=['DELETE'])
@jwt_required()
def delete_products(product_id):
      current_user = get_jwt_identity()
      product = Product.query.filter_by(id=product_id).first() #o podemos usar el filter_by que siempre nos retorna un array(vacio o no)//.get:busca si no lo encuentra nos dice que no existe

      if not product:
            return jsonify({"message": "El Producto no fue encontrado"}), 400
      db.session.delete(product)
      db.session.commit()
      return jsonify({"message" : "El Producto fue borrado con éxito"}), 200

@api.route('/product', methods=['POST'])
@jwt_required()
def add_product():
      current_user = get_jwt_identity()
      name = request.json.get("name")
      code = request.json.get("code")
      quantity = request.json.get("quantity")
      price = request.json.get("price")
      supplier = request.json.get("supplier")
      print(request.json)
      try:

            new_product = Product(name=name, code=code, quantity=quantity, price=price, supplier_id=supplier )
           
            if not (new_product):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            db.session.add(new_product)
            db.session.commit()   
            return jsonify({"message" : "Nuevo Producto Creado", "created" : True}), 200
      except Exception as e: 
            print(e)
            return jsonify({"message" : "Producto no Creado", "created" : False}), 500

#############################FACTURAS#################################

@api.route('/bills', methods=['GET'])
@jwt_required()
def list_bills():
      current_user = get_jwt_identity()
      clients = Client.query.filter_by(userData_id=current_user)
      clients_ids=[client.id for client in clients]
      bills = Bill.query.filter(Bill.client_id.in_(clients_ids))#buscar facturas asociados a esos clientes
      serialized_bills = list(map(lambda b: b.serialize(), bills))
      return jsonify({"bills": serialized_bills}), 200

@api.route('/bills/<int:id>', methods=['GET'])
@jwt_required()
def get_bill(id):
      current_user = get_jwt_identity()#id user
      user = UserData.query.get(current_user) #buscamos al usuario por id
      bill = Bill.query.get(id) #buscar la factura en BD
      data = {}
      data["bill"] = bill.serialize()
      data["client"] = bill.client.serialize()
      data["user"] = user.serialize()
      data["products"] = [product.serialize() for product in bill.productToBills]
      return jsonify({"data": data}), 200      