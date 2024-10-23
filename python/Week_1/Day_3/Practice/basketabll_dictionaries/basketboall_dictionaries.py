

# players = [
#     {
#     	"name": "Kevin Durant", 
#     	"age":34, 
#     	"position": "small forward", 
#     	"team": "Brooklyn Nets"
#     },
#     {
#     	"name": "Jason Tatum", 
#     	"age":24, 
#     	"position": "small forward", 
#     	"team": "Boston Celtics"
#     },
#     {
#     	"name": "Kyrie Irving", 
#     	"age":32,
#         "position": "Point Guard", 
#     	"team": "Brooklyn Nets"
#     },
#     {
#     	"name": "Damian Lillard", 
#     	"age":33,
#         "position": "Point Guard", 
#     	"team": "Portland Trailblazers"
#     },
#     {
#     	"name": "Joel Embiid", 
#     	"age":32,
#         "position": "Power Foward", 
#     	"team": "Philidelphia 76ers"
#     },
#     {
#         "name": "DeMar DeRozan",
#         "age": 32,
#         "position": "Shooting Guard",
#         "team": "Chicago Bulls"
#     }
# ]


# class Player:
#     list=[]
#     def __init__(self,data):
#         self.name =data["name"]
#         self.age =data["age"]
#         self.position = data["position"]
#         self.team = data["team"] 
#     @classmethod
#     def player(cls,data):
#         for key in data: 
#             list.append(cls(key))
#         return list 
#     # def affiche(self):
#     #     for player in list:
#     #         print(f"{player.name} plays as {player.position} for {player.team}") 


# # player_jason = Player(jason)
# # player_kevin = Player(kevin)
# # player_kyrie = Player(kyrie)
# # print(player_jason)
# # print(player_kevin)
# # print(player_kyrie)
# player= Player(players)
# print(player)
    
# # Create your Player instances here!
# # player_jason = ???


        
players = [
    {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard", 
        "age":33,
        "position": "Point Guard", 
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid", 
        "age":32,
        "position": "Power Forward", 
        "team": "Philadelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]

class Player:
    list_players = []
    
    def __init__(self, data):
        self.name = data["name"]
        self.age = data["age"]
        self.position = data["position"]
        self.team = data["team"]
    
    @classmethod
    def create_players(cls, data_list):
        for data in data_list: 
            cls.list_players.append(cls(data))
        return cls.list_players
    
    def __repr__(self):
        obj=( f"{self.name} ({self.age}) / {self.position} / {self.team}")
        return obj
objects = Player.create_players(players)

for player in objects:
    print(player)
