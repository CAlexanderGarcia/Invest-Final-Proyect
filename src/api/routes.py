"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, UserData
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