public class Ninja extends Human{
    int stealth = 10;

    public void steal(Human h){
      h.setHealth(j.getHealth() - stealth);
      setHealth(j.getHealth() + stealth);
    }

    public void runAway() {
		setHealth(getHealth() - 10);
	}

}
