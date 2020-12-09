
public class HumanTest {
	public static void main(String[] args) {
		
		Human h = new Human();
		
		int personHealth = 100;
		h.attack(personHealth);
		
		Wizard w = new Wizard();
		System.out.println("Your Health Level: " + h.health);
		System.out.println("Wizard healed you.");
		w.heal(h);
		System.out.println("You have been healed. Health Level: " + h.health);
		System.out.println("Wizard is a backstabber. He attacked you with fireball!");
		w.fireball(h);
		System.out.println("Your Health Level: " + h.health);


		Ninja n = new Ninja();
		System.out.println("Your Health Level: " + h.health);
		n.steal(h);
		System.out.println("Ninja stole your health! Your Health Level: " + h.health);
		System.out.println("Ninja Health Level: " + n.health);
		n.runAway();
		System.out.println("Ninja ran away. Ninja lost health. Health Level: " + n.health);

		Samurai s1 = new Samurai();
		Samurai s2 = new Samurai();
		Samurai s3 = new Samurai();
		s1.deathBlow(h);
		System.out.println("Samurai used Deathblow. You died...Health Level: " + h.health);
		System.out.println("Samurai healed from Deathblow. Health Level: " + s1.health);
		s1.meditate();
		System.out.println("Samurai used Meditate. He added half of current health. Health Level: " + s1.health);
		System.out.println(Samurai.numberOfSamurai);

	}
}
