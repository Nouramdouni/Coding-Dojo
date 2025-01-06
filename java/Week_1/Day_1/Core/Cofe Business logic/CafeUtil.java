import java.util.ArrayList;

public class CafeUtil{
    public int getStreakGoal(int numweek ) 
    { 
        int sum=0;
        for (int i=1;i<numweek;i++){ 
            sum+=i;
        } 
        return sum;
    } 
    public double getOrderTotal (double [] prices){ 
        double total =0.0;
        for (double price :prices) { 
            total+= price;
        } return total;
     
    }  

      public void displayMenu(ArrayList<String> menultems) {
        for (int i = 0; i < menultems.size(); i++) {
            System.out.println(i + " " + menultems.get(i));
        }
    }   
    public  void addCustomer(ArrayList<String> customers){ 
        System.out.println ("Please enter your name:")  ;
        String username = System.console().readLine(); 
        System.out.println ("Hello"+ username+ "!!")   ; 
         System.out.println("There are " + customers.size() + " people in front of you.");
        customers.add(username);
        System.out.println("Customer List: " + customers);
        


    }


 
} 