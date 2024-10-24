
class Pets:
    def __init__(self,name,type,tricks,noisee):
        self.name=name
        self.type=type
        self.tricks=tricks
        self.health=50
        self.energy=40
        self.noisee=noisee
    def sleep(self):
            self.energy=self.energy+5
            return self
    def eat(self):
        self.energy=self.energy+5
        self.health= self.health+10
        print(self.energy)
        print(self.health)
        return self
    def play(self):
        self.health=self.health+5
        print(self.health)
        return self
    def noise(self):
        print(self.noise)
class Ninja:
    def __init__(self,first_name,last_name,pet,treats,pet_food):
        self.first_name=first_name
        self.last_name=last_name
        self.pet=pet
        self.treats=treats
        self.pet_food=pet_food
    def walk(self):
        self.pet.play()
        return self
    def feed(self):
        print(self.pet_food)
        if len(self.pet_food) > 0:
            food = self.pet_food.pop()
            print(f"Feeding {self.pet.name} {food}!")
            self.pet.eat()
            print(self.pet.eat())
        else:
            print("Oh no!!! you need more pet food!")
            return self        
    def bathe(self):
        self.pet.noise() 


my_treats = ['Snausage','Bacon']
my_pet_food = ['salad','Burger']

nibbles = Pets("Mr. Nibbles","Horse",['nibbles on things','is invisible'],"Hey Hey")

adrien = Ninja("Adrien","Dion",nibbles,my_treats,my_pet_food)
adrien.feed()
adrien.feed()
adrien.feed()
