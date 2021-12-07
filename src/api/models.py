from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    usuario = db.Column(db.String(50), nullable=False) 

class UserData(Base):

	_tablename_='UserData'
	userDataID=Column(Integer, primary_key=True)
	userID=Column()
	name=Column (String(50), nullable=False)
	adress=Column(String(150), nullable=False)
	company=Column(String(50),nullable=True)
	numberDocumentation=(int, nullable=True)
	typeDocumentation=(int, nullable=True)
	postalCode=(int,nullable=True)
	
	
class User(Base):
	_table_='User'
	userID=Column(Integer, primaryKey=True)
	email=Column(String(50), nullable=true)
	paswword=Column(String(50), nullable=true)

class Client(Base):
	_table_='Client'
	clientID=Column(Integer, primaryKey=True)
	name=Column(String(50), nullable=True)
	nif=Column(int, nullable=True)
	direccion=Column(String(50), nullable=True)
	codigopostal=Column(int, nullable=True)

class Facturas(Base):
	_table_='Facturas'
	facturasID=Column(Integer, primaryKey=True)
	userDataID=Column(int, ForeignKey("UserID"))
   

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "usuario": self.usuario,
            # do not serialize the password, its a security breach
        }