from flask import Flask, request, url_for, redirect, render_template, session, send_file
#from flask_sqlalchemy import SQLAlchemy
from datetime import *
import time
import RPi.GPIO as GPIO
import motorpix1

from datetime import timedelta
#from flask_session import Session
import csv
from io import StringIO
#import mysql.connector
import json

#-----------------------MOTOR----------------------------------------------------------
# Use BCM GPIO references
# Instead of physical pin numbers
GPIO.setmode(GPIO.BCM)

app = Flask(__name__)
#app.config["SESSION_PERMANENT"] = False
#app.config["SESSION_TYPE"] = "filesystem"
"""Session(app)
app.permanent_session_lifetime = timedelta(minutes=2)"""


"data e hora"
data = datetime.today().strftime('%Y-%m-%d')
time = datetime.today().time()

"validação se há estoque disponível e se o pix foi pagado"
valida = 1

app = Flask(__name__, template_folder="templates")
#app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
#app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/pi5'
#db = SQLAlchemy(app)

#class Compras(db.Model):
    #id = db.Column("id", db.Integer, primary_key= True, autoincrement= True)
    #tipo = db.Column(db.String(10))
    #quantidade = db.Column(db.Integer)
    #valor = db.Column(db.Float(2))
    #data = db.Column(db.DATE)
    #horario = db.Column(db.Time)

    #def __init__(self, tipo, quantidade, valor, data, horario):
    #self.tipo = tipo
#    self.quantidade = quantidade
#   self.valor = valor
#   self.data = data
#   self.horario = horario


@app.route('/')
def index():
    """bancodedados = Compras.query.all()"""
    return render_template('index.html', data=data)

@app.route('/girassol')
def girassol():
    return render_template("girassol.html",v = valida)


@app.route('/painco')
def painco():
    return render_template("painco.html",v = valida)

@app.route('/tab', methods=['GET', 'POST'])
def tabela():
    filtro = request.form['data']
    #bancofiltro = Compras.query.filter_by(data=filtro)
    #return render_template("dados.html", bancofiltro=bancofiltro, data=data, time=time)
    return render_template("dados.html", data=data, time=time)

if valida == 1:

    @app.route('/add', methods=['GET', 'POST'])
    def add():

            tipo = request.form['tipo']
            quantidade = request.form['quantidade']
            valor = float(quantidade) * 0.10
            data = datetime.today().strftime('%Y-%m-%d')
            time = datetime.today().time()


            if request.method == 'POST':
                #banco = Compras(tipo, quantidade, valor, data, time)
                #db.session.add(banco)
                #db.session.commit()


                print(quantidade)

                if tipo == 'painco':

                    if quantidade == '1':
                        nb = 0
                        motorpix1.libera()

                        return render_template("pix_1.html")

                    #if quantidade == '2':

                    #if quantidade == '3':

                #else:
                    #if quantidade == '1':

                    #if quantidade == '2':

                    #if quantidade == '3':


            return("index.html", motorpix1)
else:
    @app.route('/add', methods=['GET', 'POST'])
    def add():
        if request.method == 'POST':
            return render_template("index.html")


if __name__== "__main__":
    #db.create_all()
    app.run(port=5000, host='127.0.0.1', debug=True, threaded=True)