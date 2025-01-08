public class TestOrders {
    public static void main(String[] args) { 


        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");   

        Item item1=new Item("mocha",5.5); 
        Item item2=new Item("latte",6.5);
        Item item3=new Item("drip coffee",4.5);
        Item item4=new Item("cappuccion",3.5); 

      

        order3.addItem(item4);

        order4.addItem(item2);

       
        order1.setReady(true);

    
        order4.addItem(item2);
        order4.addItem(item2);

        order2.setReady(true);



        System.out.printf("Name: %s\n", order1.name); 
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);  
        System.out.printf("******************* \n"); 
        System.out.printf("Name: %s\n", order2.name);
        System.out.printf("Total: %s\n", order2.total);
        System.out.printf("Ready: %s\n", order2.ready); 
        System.out.printf("******************* \n"); 
        System.out.printf("Name: %s\n", order3.name);
        System.out.printf("Total: %s\n", order3.total);
        System.out.printf("Ready: %s\n", order3.ready);  

    }
}
