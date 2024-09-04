from forbidden_fruit.main import app
from flask import render_template, url_for

@app.route("/")
@app.route("/home")
def home():
    return render_template("index.html")

@app.route("/labs")
def labs():
    return render_template("labs.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template("404.html"), 404

