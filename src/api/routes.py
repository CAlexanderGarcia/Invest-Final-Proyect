"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, redirect
#from flask_jwt_extended import jwt_required, JWTManager, get_jwt_identity
from api.models import db, UserData, Supplier, Client
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


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

@api.route('/register/supplier', methods=['POST'])
def create_supplier():
      name = request.json.get('name') 
      address = request.json.get('address')
      nif = request.json.get('nif')
      postalCode = request.json.get('postalCode')
      email = request.json.get('email')
      phoneNumber = request.json.get('phoneNumber')
      try:
            supplier = Supplier(name=name, address=address, nif=nif, postalCode=postalCode, email=email, phoneNumber=phoneNumber)
            if not (supplier):
                  return jsonify({"message": "Error datos", "created": False }), 400
            
            db.session.add(supplier)
            db.session.commit()   
            return jsonify({"message" : "supplier creado", "created" : True}), 200
      except: 
            return jsonify({"message" : "supplier no creado", "created" : False}), 500

@api.route('/client', methods=['POST'])
#@jwt_required()
def add_client():
     # current_user = get_jwt_identity()
      name = request.json.get("client_name")
      nif = request.json.get("client_nif")
      address = request.json.get("client_address")
      postalCode = request.json.get("client_postalcode")
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



