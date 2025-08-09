import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange: runs before every test
        calculator = new Calculator();
        System.out.println("Setup");
    }

    @After
    public void tearDown() {
        // Cleanup: runs after every test
        System.out.println("Teardown");
    }

    @Test
    public void testAdd() {
        // Act
        int result = calculator.add(2, 3);

        // Assert
        assertEquals(5, result);
    }

    @Test
    public void testSubtract() {
        // Act
        int result = calculator.subtract(5, 2);

        // Assert
        assertEquals(3, result);
    }
}