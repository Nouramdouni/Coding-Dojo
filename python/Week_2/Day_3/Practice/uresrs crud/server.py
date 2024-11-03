from flask import Flask, render_template,redirect,request # type: ignore
from user_model import users
app=Flask(__name__)
app.secret_key="password123"


@app.route("/users") 
def get(): 
    
    return render_template("users.html",users=users.poster())
 
@app.route("/users/new") 
def addNewUser(): 
    return render_template('index.html')

#########################ajoute ########################################################################
@app.route("/users/new",methods=["POST"])  
def cerated_ures():
    print("hii")

    new_ures={
        "first_name": request.form["first_name"],
        "last_name":request.form["last_name"],
        "email":request.form["email"]
    
    }
    resulat=users.cerate_one(new_ures) 
    print(resulat)
    return redirect("/users"+str(resulat))
##########################################################################################################

@app.route("/usres/<int:id>") 
def read_one(id) : 
    data={ 
        "id":id
    } 
    return render_template("read_one.html",user=users.get_user(data))
###########################################################################################################
@app.route("/users/edit") 
def edit():
    return render_template("edit.html")
# @app.route("/users/<int:id>/edit",methods=["POST"])
# def update_usres(id):
#     data={
#         "id":id,
#         "first_name": request.form["first_name"],
#         "last_name":request.form["last_name"],
#         "email":request.form["email"]
    
#     }
#     users.update_one(data)
#     return redirect("/users")

if __name__ == "__main__":
    app.run( debug = True)
