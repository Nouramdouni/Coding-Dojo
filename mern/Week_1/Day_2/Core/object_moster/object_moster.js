const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]); 

const PokenomId=pokemon.filter(a=> a.id%3==0);
console.log(PokenomId)

const PokenomFire=pokemon.filter(t => t.types=="fire");
console.log(PokenomFire)

const Pokenomtype=pokemon.filter(t => t.types.length>1); 
console.log(Pokenomtype)

const PokennomIame=pokemon.map(n=>n.name);
console.log(PokennomIame) 

const PokennomIdname=pokemon.filter(n=>n.id>99).map(n=>n.name)
console.log(Pokennomidname) 

const Pokennomnametypes=pokemon.filter(n=>n.types=="poison").map(n=>n.name)
console.log(Pokennomnametypes) 

const PokenSecondtype =pokemon.filter(n=>n.types[1]=="flying").map(n=>n.types[0])
console.log(PokenSecondtype) 

const PokennSome =pokemon.filter(n=>n.types=="normal").length
console.log(PokennSome)   

 const Pokennexcept =pokemon.filter(n=>n.id!=148);
 console.log(Pokennexcept)  
const pokemonname =pokemon.filter(n=>n.id==35).map(n=>n.types="fairy") ;
console.log(pokemonname)

