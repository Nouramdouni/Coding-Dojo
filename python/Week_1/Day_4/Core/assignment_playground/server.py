from flask import Flask, render_template #Import Flask to to allow us to create our app
app = Flask(__name__)
@app.route('/') 
def index():
    return render_template("index.html")

@app.route("/<int:x>")
def index2(x):
    return render_template("index2.html",x=x)

@app.route("/<int:x>/<col>")
def index3(x ,col):
    return render_template("index3.html",x=x,col=col)










if __name__=="__main__": # Ensure this file is being run directly
    app.run(debug=True) # Run the app in debug mode