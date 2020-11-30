import java.util.Arrays;
import java.util.ArrayList;

public class Test {
    // public: access modifier - used for defining access and privacy
    // static: special keyword for static methods
    // void: return type, void means return nothing
    public static void main(String[] args){
        System.out.println("Hello world!");

        Example myClassInstance = new Example();

        int age = 40;
        String stringOfCharacters = "Hello world!";

        System.out.println(myClassInstance);

        // String[] colors = ("Red", "Blue", "Green");

        myClassInstance.classMethod();
        Example.staticMethod();

        int number = 13;
        double pi = 3.14;

        char singleChar = 'A';

        int[] numbers = {1, 2, 3, 4};


        String[] colors = {"red", "blue", "pink"};
        ArrayList<Integer> numbersTwo = new ArrayList<Integer>();

        Integer examp = 10;
        examp.

        colors[2] = "orange";
        colors[1] = 3.14;
        System.out.println(Arrays.toString(colors));
    }
}