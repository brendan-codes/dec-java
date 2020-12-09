
public class GorillaTest {

	public static void main(String[] args) {
		
		Mammal m = new Mammal(500);
		m.displayEnergy();
		
//////////////////////////////////////////////////////////////
		
		Gorilla g = new Gorilla(1000);
		g.throwSomething();
		g.throwSomething();
		g.throwSomething();
		
		g.eatBananas();
		g.eatBananas();
		
		g.climb();
		
///////////////////////////////////////////////////////////////	
	
		Bat b = new Bat(800);
		
		b.attackTown();
		b.attackTown();
		b.attackTown();
		
		b.eatHumans();
		b.eatHumans();
		
		b.fly();
		b.fly();
	}

}
