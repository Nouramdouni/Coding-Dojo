import java.util.ArrayList;
import java.util.Arrays;

public class TestCafe {
    public static void main(String[] args) {
        // Create an instance of the CafeUtil class
        CafeUtil appTest = new CafeUtil(); 

        /* ============ App Test Cases ============= */

        // Streak Goal Test
        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", appTest.getStreakGoal(10));

        // Order Total Test
        System.out.println("----- Order Total Test -----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: $%.2f \n\n", appTest.getOrderTotal(lineItems));
        
        // Display Menu Test
        System.out.println("----- Display Menu Test -----");
        ArrayList<String> menu = new ArrayList<>(Arrays.asList("drip coffee", "cappuccino", "latte", "mocha"));
        appTest.displayMenu(menu);
    
        // Add Customer Test
        System.out.println("\n----- Add Customer Test -----");
        ArrayList<String> customers = new ArrayList<>();
        // --- Test 4 times ---
        for (int i = 0; i < 4; i++) {
            appTest.addCustomer(customers);
            System.out.println();
        }
        }}
