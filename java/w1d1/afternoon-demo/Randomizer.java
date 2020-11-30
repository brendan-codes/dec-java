import java.util.Random;
import java.util.ArrayList;

public class Randomizer {
    // example #1
    public static int randomNumber(int low, int high){
        Random myRandom = new Random();
        return myRandom.nextInt(high - low) + low;
    }

    // example #2
    public int[] randomNumbersList(int size){
        int[] nums = new int[size];

        for(int i = 0; i < size; i++){
            nums[i] = Randomizer.randomNumber(0, 100);
        }

        return nums;
    }

    public ArrayList<Integer> randomNumbersArrayList(int size){
        ArrayList<Integer> nums = new ArrayList<Integer>();

        for(int i = 1; i <= size; i++){
            nums.add(Randomizer.randomNumber(0, 100));
        }

        return nums;
    }
}