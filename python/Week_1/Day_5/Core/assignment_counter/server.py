from flask import Flask, render_template,redirect,session 
app=Flask(__name__)     
app.secret_key="sectre_key"
@app.route("/") 
def index():

    if 'visits' in session:
        session['visits'] += 1
    else:
        session['visits'] = 1
    return render_template("index.html", visits=session['visits'])
@app.route("/destroy_session ")
def destroy():

    session.clear()
    return redirect('/')

if __name__=="__main__":
    app.run(debug=True)