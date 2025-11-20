using System;   // Gives access to basic system functionality such as Console

namespace MethodAssignment
{
    // Create a class called MathOperations
    class MathOperations
    {
        // Create a void method that takes two integers
        public void ProcessNumbers(int firstNumber, int secondNumber)
        {
            // Perform a math operation on the first integer (example: multiply by 5)
            int result = firstNumber * 5;

            // Display the result of the operation
            Console.WriteLine("Result of math operation on first number: " + result);

            // Display the second integer on screen
            Console.WriteLine("Second number is: " + secondNumber);
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // Instantiate the MathOperations class
            MathOperations mathOps = new MathOperations();

            // Call the method while passing two integers positionally
            mathOps.ProcessNumbers(10, 25);

            // Call the method again, this time specifying parameters by name
            mathOps.ProcessNumbers(firstNumber: 7, secondNumber: 15);

            // Prevent console from closing automatically when running in Debug mode
            Console.WriteLine("Press any key to exit...");
            Console.ReadKey();
        }
    }
}
