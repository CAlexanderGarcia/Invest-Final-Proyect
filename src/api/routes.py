"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Supplier
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

@api.route('/positions', methods=['GET'])
def positions():
      list_positions = Position.query.all()
      return jsonify([position.serialize() for position in list_positions]), 200


@api.route('/register', methods=['POST'])
def create_user():
#obtenemos datos que nos llegan en el api
      usuario = request.json.get('usuario') 
      nombre = request.json.get('nombre')
      apellidos = request.json.get('apellidos')
      email = request.json.get('email')
      direccion = request.json.get('usuario')

      
      # validar datos de la api
      if not (usuario):
            return jsonify({"message": "Error datos", "created": False }), 400
      #creamos el usuario 
      user = User(usuario=usuario, is_active = True)
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

      supplier = Supplier(name=name, address=address, nif=nif, postalCode=postalCode, email=email, phoneNumber=phoneNumber)
      if not (supplier):
            return jsonify({"message": "Error datos", "created": False }), 400
      
      db.session.add(supplier)
      db.session.commit()   
      return jsonify({"message" : "supplier creado", "created" : True}), 200