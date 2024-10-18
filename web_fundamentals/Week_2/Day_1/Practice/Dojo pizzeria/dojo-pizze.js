function pizza(custType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.bread = custType;
    pizza.protein = sauceType;
    pizza.cheese = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var p1 = pizzaFactory("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var p2= pizzaFactory("hand tossed", "marinara", ["mozzarella","feta"], ["mushrooms", "olives","onions"])
var p3=pizzaFactory("Neapolitan Crust", "white sauce", ["mozzarella"], ["mushrooms", "chicken","onions"])
var p3=pizzaFactory("New York Style Crust", "spicy sauce", ["chedar"], ["bacon","onions"])
console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);