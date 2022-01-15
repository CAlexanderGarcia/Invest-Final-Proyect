"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, UserData, Supplier
from api.utils import generate_sitemap, APIException
import json 


api = Blueprint('api', __name__)


@api.route('/register', methods=['POST'])
def create_user():
#obtenemos datos que nos llegan en el api
      body = json.loads(request.data) 
      # validar si el usuario existe o no.
      exist_email = UserData.query.filter_by(email=body["email"]).first()
      exist_documentation = UserData.query.filter_by(numberDocumentation=body["numberDocumentation"]).first()
      
      if not exist_email and not exist_documentation: 
      # validar datos de la api      
            if "name" not in body:                       
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
                  return jsonify({"message": "No se han recibido los datos de código postal", "created": False }), 400
            if "typeDocumentation" not in body:            
                  return jsonify({"message": "No se han recibido los datos de tipo de documentación", "created": False }), 400
                    
            
            #creamos el usuario       
            user = UserData(company=body["name"], email=body["email"], address=body["address"], password=body["password"], numberDocumentation=body["numberDocumentation"], postalCode=body["postalCode"], typeDocumentation=body["typeDocumentation"])
            if not user:
                  return jsonify({"message": "Error datos", "created": False }), 400
            db.session.add(user)
            db.session.commit()   
            #retornamos respuesta el usuario se ha creado
            return jsonify({"message" : "usuario creado", "created" : True}), 200
      else:
            return jsonify({"message" : "Los datos de correo electrónico o número de identificación ya se encuentran registrados en nuestar base de datos", "created" : False}), 400 
           
            

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
