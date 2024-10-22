class BankAccount:
    account=[]
    def __init__(self, int_rate, balance): 
       self.int_rate=int_rate
       self.balance=balance

    def deposit(self, amount):
        self.balance=self.balance+amount
        return self
    def withdraw(self, amount):
        if self.balance<amount:
            print("Insufficient funds: Charging a $5 fee and deduct $5")
            self.balance=self.balance-5
        else: 
            self.balance=self.balance-amount  
        return self
    def display_account_info(self):
          print(f"Balance: {self.balance}")  
    def yield_interest(self): 
        if self.balance > 0:
            self.balance = self.balance+ self.balance * self.int_rate 
        return self 
    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()
account1 = BankAccount(0.02, 100)  
account2 = BankAccount(0.04, 200)  
account1.deposit(50).deposit(100).deposit(150).withdraw(200).yield_interest().display_account_info()
print("*"*50)
account2.deposit(100).deposit(50).withdraw(50).withdraw(100).withdraw(200).withdraw(25).yield_interest().display_account_info()

        

