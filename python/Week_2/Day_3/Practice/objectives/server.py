from flask import Flask, render_template,redirect,request
from user_model import users
app=Flask(__name__)
app.secret_key="password123"


@app.route("/users") 
def get(): 
    
    return render_template("users.html",users=users.poster())




#@app.route("/users/new",methods=["POST"])  
# # creat or insert  one ures 
# def cerated_ures():

#     new_ures={
#         "first_name":request.form["user_first_name"],
#         "last_name":request.form["user_first_name"],
#         "email":request.form["usre_email"],
#         "usres_id":request.form["usre_id"]
#     }
#     resulat=users.cerate_one(new_ures) 
#     return redirect("/users")

if __name__ == "__main__":
    app.run( debug = True)
