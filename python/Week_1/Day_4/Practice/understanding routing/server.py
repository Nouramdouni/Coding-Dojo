from flask import Flask
app=Flask(__name__) 
@app.route("/") 
def  hello():  
       
    return "hello faslk !"  

#############################################################################""
@app.route("/dojo") 
def  hello2():  
       
    return "Dojo!"  

###########################################################################
@app.route("/say/<name>") 
def  hello3(name):  
       
    return 'hi'+" "+name 

#########################################################################################
@app.route("/repeat/<int:number>/<name>" ) 
def  hello4(number,name):  
       
    return (name +' ')*number

if __name__=="__main__":  
    app.run(debug=True)