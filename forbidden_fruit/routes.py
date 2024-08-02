from forbidden_fruit.main import app
from flask import render_template

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/labs"):
    return render_template("labs.html")
