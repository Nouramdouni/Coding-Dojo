#function 1
def basic():  
    for i in range(151): 
        print(i) 
print(basic()) 
print ("*"*20) 
#function 2
def Multiples_of_Five(): 
    for i in range (5,1001):
        if i%5==0:
            print (i) 
print (Multiples_of_Five()) 
print("*"*40)
#funtcion 3
def  Counting_the_Dojo_Way():  
     for i in range (1,101):
        if i%10==0:
            print("coding dojo") 
        elif(i%5==0):
            print("coding ") 
        else:
            print(i)
print(Counting_the_Dojo_Way()) 
print("*"*40)
#function 4

def  Whoa_That_Sucker_s_Huge(): 
    sum=0
    for i in range(500001):
        if i%2==0:
            sum=sum+i 
    return sum 
print(Whoa_That_Sucker_s_Huge()) 
print("*"*40)
#function 4 
def  Countdown_by_Fours():
    for i in range (2018,-1,-4): 
        print(i) 
print(Countdown_by_Fours()) 
print("*"*40) 
#function5
def Flexible_Counter(a,b,c): 
    for i in range (a,b+1): 
        if (i%c==0):
            print (i)
print(Flexible_Counter(2,9,3)) 