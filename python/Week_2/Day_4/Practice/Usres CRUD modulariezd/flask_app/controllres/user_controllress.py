from flask import request,render_template,redirect
from flask_app.models.user_model import users
from flask_app import app

@app.route("/users") 
def get(): 
    
    return render_template("users.html",users=users.poster())
 
@app.route("/users/new") 
def addNewUser(): 
    return render_template('index.html')


@app.route("/users/new",methods=["POST"])  
def cerated_ures():
    print("hii")

    new_ures={
        "first_name": request.form["first_name"],
        "last_name":request.form["last_name"],
        "email":request.form["email"]
        # "id": request.form["id"]
    }
    resulat=users.cerate_one(new_ures) 
    print(resulat)
    return redirect("/users")


