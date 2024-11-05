from mysqlconnection import connectToMySQL 
class users: 
    def __init__(self,data): 
        self.first_name=data["first_name"]
        self.last_names=data["last_names"]
        self.email=data["email"]
        self.created_at=data["created_at"]
        self.updated_at=data['updated_at']
        self.id=data["id"] 
 
    @classmethod 
    def poster(cls):
        query="select * from users ;"
        result=connectToMySQL("users_schema").query_db(query) 
        print(result)  
        users=[] 
        for data in result : 
            users.append(cls(data)) 
        return users 
    
  
    @classmethod
    def cerate_one(cls,data):
        print("test cerate_one ✌✌")
        query="insert into users (first_name,last_names,email) VALUES (%(first_name)s,%(last_name)s,%(email)s);"
        result=connectToMySQL("users_schema").query_db(query,data) 
        print(result)
    @classmethod
    def get_user(cls,data):
         query="select * from users where id=%(id)s"
         result=connectToMySQL("users_schema").query_db(query,data)
         print(result)
         users=result[0]
         return users 
    @classmethod 
    def update_one(cls,data):
        qurey="update users set first_name=%(first_name)s,last_names=%(last_name)s,email=%(email)s where id=%(id)s; "
        result=connectToMySQL("users_schema").query_db(qurey,data) 
        return result 
    