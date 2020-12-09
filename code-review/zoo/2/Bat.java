public class Bat extends Mammal {
	int energyLevel = 300;

	public void fly(){
		System.out.println("Flying sounds");
		energyLevel-=50;
	}

	public void eatHumans(){
		System.out.println("Ate humans energy increased");
		energyLevel+=25;
	}

	public void attackTown(){
		System.out.println("People scream and energy lost");
		energyLevel-=100;
	}

	public void displayEnergy(){
		System.out.println("Bat energy level is: "+energyLevel);
	}

}