public class TestOrders {


 public static void main(String[] args) {
        // Create menu items
        Item item1 = new Item("Drip Coffee", 1.50);
        Item item2 = new Item("Cappuccino", 3.50);
        Item item3 = new Item("Latte", 4.00);
        Item item4 = new Item("Mocha", 3.75);

        // Create orders 
        //Create 2 orders for unspecified guests. Do not specify a name.
        Order order1 = new Order();
        Order order2 = new Order(); 
       // Create 3 orders using the overloaded constructor to give each a name for the order.

        Order order3 = new Order("Cindhuri");
        Order order4 = new Order("Jimmy");
        Order order5 = new Order("Noah");

        order1.addItem(item1);
        order1.addItem(item2);

        order2.addItem(item3);
        order2.addItem(item4);

        order3.addItem(item2);
        order3.addItem(item4);

        order4.addItem(item1);
        order4.addItem(item3);

        order5.addItem(item2);
        order5.addItem(item3);

        order1.setReady(true);
        order4.setReady(true); 
        System.out.println(order1.getStatusMessage());
        System.out.println(order3.getStatusMessage());

        // Test getOrderTotal
        System.out.println(order1.getOrderTotal());
        System.out.println(order5.getOrderTotal()); 
        order1.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();

        
    }
}
