import java.util.Scanner;

public class FinancialForecast {

    // Forecast function using compound interest formula
    public static double forecastAmount(double initialAmount, double growthRate, int years) {
        return initialAmount * Math.pow((1 + growthRate / 100), years);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // Taking user inputs
        System.out.print("Enter initial amount (₹): ");
        double initialAmount = sc.nextDouble();

        System.out.print("Enter annual growth rate (%): ");
        double growthRate = sc.nextDouble();

        System.out.print("Enter number of years: ");
        int years = sc.nextInt();

        // Calculating forecast
        double forecastedValue = forecastAmount(initialAmount, growthRate, years);

        // Display result
        System.out.printf("Forecasted value after %d years = ₹%.2f\n", years, forecastedValue);

        sc.close();
    }
}