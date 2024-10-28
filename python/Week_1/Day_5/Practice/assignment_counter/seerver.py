from doctest import debug
from flask import Flask, render_template #Import Flask to to allow us to create our app
app = Flask(__name__) # Create a new instance of the Flask class called "app"
@app.route("/") 
def index(): 
    return render_template("index.html") 
if __name__=="__main__":
    app.run(debug=True)