from flask import Flask, render_template,session,request
import random
app=Flask(__name__)  
app.secret_key="keep it safe " 
@app.route("/")
def  index(): 
    return render_template("index.html") 
@app.route("/guess", methode=['POST'])
def index2():
    guess=int(request.form['guess'])
    numbre_guess=session["numbre_gess"]  

    

    













if __name__=='__main__':
    app.run(debug=True)