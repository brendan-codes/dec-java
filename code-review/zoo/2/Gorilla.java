public class Gorilla extends Mammal {

	public void throwSomething() {
		System.out.println("Threw something and lost energy");
		energyLevel -= 5;
	}

	public void eatBananas(){
		System.out.println("Ate bananas and increased energy");
		energyLevel += 10;
	}

	public void climb(){
		System.out.println("Climbed a tree and decreased energy");
		energyLevel-=10;
	}
}
