public class TestOred {
    public static void main(String[] args) {
         Coffekiosk kiosk = new  Coffekiosk();

        // Adding menu items
        kiosk.addMenuItem("Banana", 2.00);
        kiosk.addMenuItem("Coffee", 1.50);
        kiosk.addMenuItem("Latte", 4.50);
        kiosk.addMenuItem("Cappuccino", 3.00);
        kiosk.addMenuItem("Muffin", 4.00);

        // Processing a new order
        kiosk.newOrder();
    }
}
