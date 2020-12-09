public class WizardTest {
    
    public static void main(String[] args) {
        Human a = new Human ("Abe");
        Human b = new Human ("Bert");
        Wizard wiz = new Wizard();
        Samurai sam = new Samurai();
        Samurai sam2 = new Samurai();
        Samurai sam3 = new Samurai();
        Ninja bob = new Ninja();

        System.out.println("Abe's health: " + a.getHealth());
        wiz.heal(a);
        System.out.println("Abe's health after healing"  + a.getHealth());
        System.out.println("Bert's health: " + b.getHealth());
        wiz.fireball(b);
        System.out.println("Bert's health after fireball" + b.getHealth());

        System.out.println(a.getHealth());
        System.out.println(sam.getHealth());
        sam.deathblow(a);
        System.out.println(a.getHealth());
        System.out.println(sam.getHealth());

        System.out.println(sam.getHealth());
        sam.meditate();
        System.out.println(sam.getHealth());

        System.out.println(sam.getNumberOfSamurais());
        System.out.println(sam2.getNumberOfSamurais());
        System.out.println(sam3.getNumberOfSamurais());

        System.out.println(b.getHealth());
        System.out.println(bob.getHealth());
        bob.steal(b);
        System.out.println(b.getHealth());
        System.out.println(bob.getHealth());

        System.out.println(bob.getHealth());
        bob.runAway();
        System.out.println(bob.getHealth());

    }
}