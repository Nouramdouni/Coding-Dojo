from flask_app import app
from flask import render_template,redirect,request,session,flash  
from flask_app.model.email_model import Email
@app.route("/")
def email(): 
    return render_template("email.html")
@app.route("/email",methods=["POST"])
def register():
    if Email.validate(request.form):
        print(f"**********************{request.form}")
        data={ 
            "email":request.form['email']
        }   
        Email.emaill(data)
        return redirect("/result")      
    else: 
        print(f"-----------------------------{request.form}")
        return redirect("/")

@app.route('/resultt')
def result():
    return render_template('result.html')
@app.route('/result')
def re():
    return render_template('result.html', email=Email.poster())




