from flask import Flask,render_template
app=Flask(__name__)  

@app.route("/") 
def index(): 
    return render_template("index.html")
@app.route("/number")

if __name__=="__main__": # Ensure this file is being run directly
    app.run(debug=True) #  