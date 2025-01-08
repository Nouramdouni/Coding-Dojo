

public class BankAccount {


    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    public BankAccount(){ 
        this.checkingBalance=0.0;
        this.savingsBalance=0.0; 
        accounts++; 
    }
    // GETTERS
    public double getCheckingBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }
     public static int getAccounts() {
        return accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }
    //METHODS   
    

    public  void deposit(double amount, String accountType)  
    { 
        if (amount>0) { 
          if (accountType.equalsIgnoreCase("checking")) {
               checkingBalance+=amount;
            } 
            else if(accountType.equalsIgnoreCase("saving")){
                checkingBalance+=amount;

            } 
            else{ 
                System.out.println("invalid account"); 

            }
            totalMoney+=amount; 
        
        }else{ 
            System.out.println("this amount is not positive");
        }     
    }  
    public void withdraw(double amount, String accountType) { 
        if (amount>0) { 
          if (accountType.equalsIgnoreCase("checking")) { 
            if(checkingBalance>=amount){ 
                checkingBalance-=amount; 
                totalMoney -=amount;
            } 
            else{ 
                System.out.println("insufficient funds in checking account.");
            }
               
            } 
           else if (accountType.equalsIgnoreCase("savings")) {
                if (savingsBalance >= amount) {
                    savingsBalance -= amount;
                    totalMoney -= amount;

            }   else{ 
                System.out.println("insufficient funds in checking account.");
            }
            } 
            else{ 
                System.out.println("invalid account"); 

            }
        }
        else{ 
            System.out.println("Withdrawal amount");
        }  
    }  








    public  void displayBalance() {
        System.out.printf("Checking Balance: $%s, Savings Balance: $%s \n", checkingBalance, savingsBalance);
        
    }



    
  
}
// "equalsIgnoreCase" et9loke eli thke ture wel false ye3ni ki temchi etchof eli enti hateh fi baktest nefseh eli hathha fi equalsIgnoreCase("dddd")
    // ithe nefseh et9lik ture ithe le  et9lik fasle  doube bech etesti  ethe ethike  nefseh wel leeee   