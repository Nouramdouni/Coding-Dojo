public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
         BankAccount Account1=new BankAccount();
         BankAccount Account2=new BankAccount();
         BankAccount Account3=new BankAccount();  

        //bakaacount 1
        Account1.deposit(500, "checking");
        Account1.deposit(300, "savings");
        Account1.displayBalance();    
        System.out.println("*********************************************************");
        Account2.deposit(1500, "checking");
        Account2.deposit(400, "savings");
        Account2.displayBalance(); 
         System.out.println("*********************************************************");
        Account3.deposit(1500, "checking");
        Account3.deposit(400, "savings");
        Account3.displayBalance();  
        System.out.println("#########################################################"); 
         Account3.withdraw(400, "checking");
        Account3.withdraw(300, "savings");
        Account3.displayBalance();  
         System.out.println("#########################################################"); 
         Account1.withdraw(500, "checking");
        Account1.withdraw(50, "savings");
        Account1.displayBalance(); 



        System.out.println("Number of accounts: " + BankAccount.getAccounts());
        System.out.printf("Total Money in Bank: $%s \n", BankAccount.getTotalMoney());
    }










        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney

        // Static Test (print the number of bank accounts and the totalMoney)

    }

