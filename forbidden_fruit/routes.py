from forbidden_fruit.main import app
from flask import render_template, url_for

@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/labs")
def labs():
    return render_template("labs.html")

