import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Product class to hold product information
class Product {
    int id;
    String name;
    String category;
    double price;

    public Product(int id, String name, String category, double price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }

    public void displayProduct() {
        System.out.println("Name: " + name + ", Category: " + category + ", Price: ₹" + price);
    }
}

// Main class
public class EcommerceSearch {
    // Function to search products
    public static List<Product> searchProducts(List<Product> products, String keyword) {
        List<Product> result = new ArrayList<>();
        keyword = keyword.toLowerCase();

        for (Product p : products) {
            if (p.name.toLowerCase().contains(keyword) || p.category.toLowerCase().contains(keyword)) {
                result.add(p);
            }
        }
        return result;
    }

    public static void main(String[] args) {
        // Sample product list
        List<Product> products = new ArrayList<>();
        products.add(new Product(101, "Redmi Note 13", "Mobile", 11999));
        products.add(new Product(102, "Samsung Galaxy S21", "Mobile", 49999));
        products.add(new Product(103, "Sony Headphones", "Electronics", 2999));
        products.add(new Product(104, "Dell Inspiron Laptop", "Laptop", 56999));
        products.add(new Product(105, "Apple iPhone 15", "Mobile", 79999));
        products.add(new Product(106, "HP Pavilion", "Laptop", 45999));
        products.add(new Product(107, "boAt Bassheads 900", "Electronics", 999));

        // User input
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter product name or category to search: ");
        String keyword = scanner.nextLine();

        // Search and display results
        List<Product> matched = searchProducts(products, keyword);
        if (matched.isEmpty()) {
            System.out.println("No products found matching your search.");
        } else {
            System.out.println("\nSearch Results:");
            for (Product p : matched) {
                p.displayProduct();
            }
        }
        scanner.close();
    }
}