public class HumanTest {
    public static void main(String[] args){
        Human a = new Human ("Abe");
        Human b = new Human ("Bert");
        Human c = new Human ("Charles");
        a.attack(b);
        a.attack(b);
        c.attack(b);
        a.attack(c);
        a.attack(c);
        c.attack(a);
        
    }
}
