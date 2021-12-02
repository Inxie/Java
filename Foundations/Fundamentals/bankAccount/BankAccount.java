import java.util.ArrayList;

public class BankAccount {
    private double checkingBalance;
    private double savingsBalance;
    private static int numberOfAccounts = 0;
    private static double totalAmountInAccount = 0; 

    
    public BankAccount() {
        numberOfAccounts++;
    }
    
    public static int getAccountNumber() {
        return numberOfAccounts;
    }

    public void setChecking(double checkingBalance) {
        this.checkingBalance = checkingBalance;
    }

    public void setSavings(double savingsBalance) {
        this.savingsBalance = savingsBalance;
    }

    public double getCheckingBalance() {
        return this.checkingBalance;
    }

    public double getSavingsBalance() {
        return this.savingsBalance;
    }

    public void depositChecking(int depositAmount) {
        this.checkingBalance += depositAmount;
        System.out.println("You have deposited $" + depositAmount + " into Checking.");
        System.out.println("Your new Checking total is $" + checkingBalance);
    }

    public void depositSavings(int depositAmount) {
        this.savingsBalance += depositAmount;
        System.out.println("You have deposited $" + depositAmount + " into Savings.");
        System.out.println("Your new Savings total is $" + savingsBalance);
    }

    public void withdrawChecking(int withdrawAmount) {
        if (getCheckingBalance() < withdrawAmount) {
            System.out.println("Insufficient funds!");
        }
        else {
            checkingBalance -= withdrawAmount;
            System.out.println("You have withdrawn $" + withdrawAmount + " from Checking.");
            System.out.println("Your new Checking total is $" + checkingBalance);
        }
    }

    public void withdrawSavings(int withdrawAmount) {
        if (getSavingsBalance() < withdrawAmount) {
            System.out.println("Insufficient funds!");
        }
        else {
            savingsBalance -= withdrawAmount;
            System.out.println("You have withdrawn $" + withdrawAmount + " from Savings.");
            System.out.println("Your new Savings total is $" + savingsBalance);
        }
    }

    public double total() {
        totalAmountInAccount += savingsBalance;
        totalAmountInAccount += checkingBalance;
        return totalAmountInAccount;
    }
}