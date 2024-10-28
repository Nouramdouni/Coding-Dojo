class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    
    # other methods
    def  make_deposit(self, amount): 
          
        if amount > 0:
            self.balance += amount 
            print(f"Deposited: ${amount}. New balance: ${self.balance}.")
        else: 
            print("Invalid amount. Please enter a positive number.")
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrew: ${amount}. New balance: ${self.balance}.")
        else:
            print(" Charging a $5 fee")
            self.balance -= 5  
            print(f"New balance after fee: ${self.balance}.")

    def display_account_info(self):
        print(f"Balance: ${self.balance:.2f}, Interest Rate: {self.int_rate:.2%}")

    def yield_interest(self):
        if self.balance > 0:
            interest = self.balance * self.int_rate
            self.balance += interest
            print(f"Interest yielded: ${interest:.2f}. New balance: ${self.balance:.2f}.")

    @classmethod
    def print_all_accounts_info(cls):
        for account in cls.accounts:
            account.display_account_info()


class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = []  

    def add_account(self, int_rate=0.01, balance=0):
        new_account = BankAccount(int_rate=int_rate, balance=balance)
        self.accounts.append(new_account)
        print(f"New account added for {self.name} with balance: ${balance:.2f}")

    def make_deposit(self, amount, account_index=0):
        if account_index < len(self.accounts):
            self.accounts[account_index].deposit(amount)
        else:
            print("Invalid account index.")

    def make_withdrawal(self, amount, account_index=0):
        if account_index < len(self.accounts):
            self.accounts[account_index].withdraw(amount)
        else:
            print("Invalid account index.")

    def display_user_balance(self, account_index=0):
        if account_index < len(self.accounts):
            self.accounts[account_index].display_account_info()
        else:
            print("Invalid account index.")

    def transfer_money(self, amount, other_user, from_account_index=0, to_account_index=0):
        if from_account_index < len(self.accounts) and to_account_index < len(other_user.accounts):
            if self.accounts[from_account_index].balance >= amount:
                self.accounts[from_account_index].withdraw(amount)
                other_user.accounts[to_account_index].deposit(amount)
                print(f"Transferred ${amount} from {self.name}'s account to {other_user.name}'s account.")
            else:
                print("Insufficient funds for transfer.")
        else:
            print("Invalid account index.")

user1 = User("Alice", "alice@example.com")
user2 = User("Bob", "bob@example.com")
user1.add_account(int_rate=0.2, balance=300)
user1.add_account(int_rate=0.6, balance=200)
user2.add_account(int_rate=0.04, balance=300)
user1.make_deposit(50, 0)
user1.make_withdrawal(30, 0)
user1.display_user_balance(0)
user1.transfer_money(40, user2, from_account_index=0, to_account_index=0)
user1.display_user_balance(0)
user2.display_user_balance(0)
BankAccount.print_all_accounts_info()