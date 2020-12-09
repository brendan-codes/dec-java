
public class Mammal {
	
	//attribute
	protected int energyLevel;
	

	public int displayEnergy() {
		int e = energyLevel;
		System.out.println(e);
		return energyLevel;
	}

	public Mammal(int energy) {
		this.energyLevel = energy;
	}
	
	
	
}

