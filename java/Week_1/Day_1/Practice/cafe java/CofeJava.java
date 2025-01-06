public class CofeJava {
    public static void main(String[] args) {
      
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        double mochaPrice = 3.5;
        double dripcoffee = 3.5;        
        double latte = 2.5;
        double cappuccino = 4.5;



        String customer1 = "cindhuri";
        String customer2 = "sam";
        String customer3 = "jimmy";
        String customer4 = "noah";

    

        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;       
         boolean isReadyOrder4 = true;

    
      System.out.println(generalGreeting + customer1); 
        if (isReadyOrder4) {
            System.out.println(customer4 + readyMessage);
            System.out.println(displayTotalMessage + cappuccino);
        }
        else {
            System.out.println(customer4 + pendingMessage);
        }
        
       
        System.out.println(displayTotalMessage + latte * 2);
        if (isReadyOrder2) {
            System.out.println(customer2 + readyMessage);
        }
        else {
            System.out.println(customer2 + pendingMessage);
        }


        System.out.println(displayTotalMessage + (latte - dripcoffee));

    }

}
    

