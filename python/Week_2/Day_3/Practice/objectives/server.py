from flask import Flask, render_template,redirect,request
from user_model import users
app=Flask(__name__)
app.secret_key="password123"


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





if __name__ == "__main__":
    app.run( debug = True)
