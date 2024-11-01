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
