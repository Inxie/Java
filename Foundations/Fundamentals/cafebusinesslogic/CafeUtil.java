import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
public class CafeUtil {

    public int getStreakGoal() {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices) {
        double sum = 0;
        double [] arr = {3.5, 1.5, 4.0, 4.5};
        for (int i = 0; i<arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }

    public void displayMenu(ArrayList<String> menuItems) {
        System.out.println("0 " + menuItems.get(0));
        System.out.println("1 " + menuItems.get(1));
        System.out.println("2 " + menuItems.get(2));
        System.out.println("3 " + menuItems.get(3));
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        System.out.println("Hello, " + userName);
        System.out.println("There are " + customers.size() + " people in front of you.");
        customers.add(userName);
        System.out.println(customers);
    }

}