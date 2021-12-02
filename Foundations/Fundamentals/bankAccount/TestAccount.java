import java.util.ArrayList;

public class TestAccount {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount();
        System.out.println(BankAccount.getAccountNumber());
        account1.depositChecking(250);
        account1.depositSavings(500);
        account1.withdrawChecking(100);
        account1.withdrawSavings(300);
        System.out.println("Your accounts total up to $" + account1.total());
    }
}