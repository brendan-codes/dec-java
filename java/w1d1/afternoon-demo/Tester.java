import java.util.Arrays;
import java.util.ArrayList;

public class Tester {
    public static void main(String[] args) {
        int myRandomNumber = Randomizer.randomNumber(5, 20);
        System.out.print(myRandomNumber + "\n");

        Randomizer myRandomizer = new Randomizer();
        System.out.println(Arrays.toString(myRandomizer.randomNumbersList(15)) + "\n");


        ArrayList<Integer> output = myRandomizer.randomNumbersArrayList(myRandomNumber);
        output.add(9999);
        System.out.println(output + "\n");


        // Tester.randomizer();
    }

    // public static randomizer(){

    // }

}