from flask_app import DB
from flask_app.config.mysqlconnection import connectToMySQL 
from flask import flash 
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')    

class Email:
    def __init__(self,data): 
        self.id=data["id"]  
        self.email=data["email"]
        self.created_at=data["created_at"]
        self.updated_at=data["updated_at"]     
    @classmethod
    def emaill(cls,data): 
        qurey="insert into email (email) values %(email)s;" 
        return connectToMySQL(DB).query_db(qurey,data) 
    @classmethod 
    def get_email(cls,data):
        qurey="select * from email where email=%(email)s;"
        result=connectToMySQL(DB).query_db(qurey,data) 
        if result: 
            x= cls(result[0])
            return x
        return False 

    @classmethod 
    def poster(cls):
        qurey="select * from email;" 
        result=connectToMySQL(DB).query_db(qurey) 
        all_email=[]
        for row in result: 
            all_email.append(cls(row))
        print(all_email) 
        return all_email 
    
    @staticmethod 
    def validate(data): 
        is_valide=True
        if not EMAIL_REGEX.match(data["email"]):
            flash("email not valide","email")
            is_valide=False
        
        
        elif Email.get_email({"email":data['email']}):
            flash("email aleread taken","email")
            is_valide=False
        return is_valide