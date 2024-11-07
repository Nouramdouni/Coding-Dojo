from flask_app import DB
from flask_app.config.mysqlconnection import connectToMySQL 
from flask import flash 
class Recip: 
    def __init__(self,data): 
        self.id=data["id"]
        self.name=data["name"]
        self.description=data["description"]
        self.instuction=data["instructions"]
        self.date=data["date"] 
        self.time=data["time"]
        self.user_id=["user_id"]
        self.created_at=data["created_at"]
        self.uqdated_at=data["uqdated_at"] 
        self.posted_by=""
    @classmethod 
    def get_all(cls):
        query="select *from recipe join users on  recipe.user_id=users.id ;" 
        result=connectToMySQL(DB).query_db(query)
        all_recipe=[]
        for row in result: 
            recipe=cls(row) 
            recipe.posted_by=f'{row["first_name"]}'
            all_recipe.append(recipe) 
        print(all_recipe)
        return all_recipe
    @classmethod
    def getBy_id(cls,data): 
        qurey="select* from recipe join users on recipe.user_id=users.id where recipe.id=%(id)s ;" 
        result=connectToMySQL(DB).query_db(qurey,data) 
        recipe=cls(result[0])
        recipe.posted_by=f"{result[0]['name']}"
        return result
    @classmethod
    def insert(cls,data): 
       qurey="insert into recipe (name,description,instructions,date,time,user_id) values (%(name)s,%(description)s,%(instructions)s,%(date)s,%(time)s,%(user_id)s);"
       result=connectToMySQL(DB).query_db(qurey,data) 
       return result
    
    @classmethod 
    def update(cls,data): 
        qurey="upadate recipe set name=%(name)s,description=%(description)s,instructions=%(instructions)s,date=%(date)s,time=%(date)s;"
        result=connectToMySQL(DB).query_db(qurey,data) 
        return result
    @classmethod 
    def delete(cls,data): 
        qurey="delete from recipe where id=%(id)s;" 
        result=connectToMySQL(DB).query_db(qurey,data)
        return result



    @staticmethod 
    def validate(data): 
        is_valid=True 
      
        if(len(data["name"])<3): 
            flash("name most be 3 characters","name")  
            is_valid=False
        if(len(data["description"])<3):
            flash("descrption most be 3 charatctes","description") 
            is_valid=False
        if(len (data["instructions"])<3):
            flash('instruction most be 3 chacratctes',"instructions") 
            is_valid=False
        return is_valid
