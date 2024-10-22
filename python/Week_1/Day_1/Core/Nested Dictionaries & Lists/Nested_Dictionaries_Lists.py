
# 1 Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
################################################################
x[1][0]=15
print(x) 
############################################################### 
students[0]['last_name'] = "bryant"  
print(students)
#############################################################
sports_directory["soccer"][1] = "andres" 
print(sports_directory)
############################################################# 
z[0]["y"]=30
print(z) 
print("*"*50)
#2 Iterate Through a List of Dictionaries
students = [
         {'first_name':  'Michael', 'last_name' : 'Jordan'},
         {'first_name' : 'John', 'last_name' : 'Rosales'},
         {'first_name' : 'Mark', 'last_name' : 'Guillen'},
         {'first_name' : 'KB', 'last_name' : 'Tonel'}
    ]

# should output: (it's okay if each key-value pair ends up on 2 separate lines;
# bonus to get them to appear exactly as below!)
def iterateDictionary(students): 
    for dictionary in students: 
        list=[] 
        for  key ,value in dictionary.itmes():
            list.append(f"{key} - {value}") 
        print (list) 
print(iterateDictionary(students))         
        


def iterateDictionary2(key_name, some_list): 
    for i in range (len(some_list)):
        print(some_list[i][key_name])
print(iterateDictionary2("first_name",students)) 

##########################################################################################""""


dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
} 
def printinfo(some_dict): 
        for val in some_dict.values(): 
            print (val) 
print(printinfo(dojo))

