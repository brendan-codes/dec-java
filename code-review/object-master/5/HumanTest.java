
public class HumanTest {

	public static void main(String[] args) {

		Wizard w1 = new Wizard();
		Ninja n1 = new Ninja();
		Samurai s1 = new Samurai();
		
		s1.howMany();
		System.out.println(n1.getHealth());
		w1.heal(n1);
		System.out.println(n1.getHealth());
		w1.fireball(n1);
		System.out.println(n1.getHealth());
		
		s1.deathBlow(n1);
		System.out.println(n1.getHealth());
		System.out.println(s1.getHealth());
		s1.meditate();
		System.out.println(s1.getHealth());
		
		Ninja n2 = new Ninja();
		n2.steal(s1);
		System.out.println(n2.getHealth());
		n2.runAway();
		System.out.println(n2.getHealth());
		
		Samurai s2 = new Samurai();
		System.out.println(s2.howMany());
		System.out.println(s1.howMany());
	}

}
