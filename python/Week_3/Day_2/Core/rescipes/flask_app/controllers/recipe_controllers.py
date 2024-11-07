from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user_models import User  
from flask_app.models.recipe_models  import Recip  
@app.route("/recipe") 
def recipes():
    return render_template("dashboard.html")
@app.route("/recipes")
def dashboard():   
    if not 'user_id'in session:
        return redirect('/')
    recipes=Recip.get_all() 
    logged_user=User.get_by_id({"id":session['user_id']})
    return render_template("dashboard.html", logged_user=logged_user ,request=recipes) 
##############################################################################""
@app.route("/recipe/new")
def new_recipe(): 
    if not 'user_id'in session:
        return redirect('/')
    return render_template("recipe.html")
###############################################################################"""" 

@app.route("/recipe/create",methods=["POST"]) 
def create_recipe(): 
    if Recip.validate(request.form): 
        data={ 

            **request.form,
            "user_id":session["user_id"] 
        }
        print(data)
        Recip.insert(data) 
        return redirect("/recipes")
    return redirect("/recipe/new")
######################################################################################"""" 
@app.route("/recipe/<int:id>")
def show_one(id): 
    if not 'user_id'in session:
        return redirect('/')
    recip=Recip.getBy_id({"id":id})
    logged_user=User.get_by_id({"id":session['user_id']})
    return render_template("view_recipe.html",recipe=recip ,logged__user=logged_user) 

@app.route("/recipe/edit/<int:id>",methods=["POST"]) 
def edit(id):
    if Recip.validate(request.form): 
        data={  
            **request.form,
            "id":id
        } 
        Recip.updat(data) 
        return redirect("/recipes") 
    return redirect(f"/recipe/edit/{id}")

@app.route("/recipe/<int:id>/delete",methods=["POST"]) 
def delete(id): 
    Recip.dalete({"id":id}) 
    return redirect("/")
##########################################################################################

