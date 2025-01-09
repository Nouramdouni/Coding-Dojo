package zookeeper;

public class Bat extends Mammal {


	 
	public void fly() {
		this.setEnergy(getEnergy()-50);
		System.out.println("the bat is airborne");
	}
	
	public void eatHumans() {
		this.setEnergy(getEnergy()+25);
		System.out.println("the bat has eat a human");
	}
	
	
	public void attackTown() {
		this.setEnergy(getEnergy()-100);
		System.out.println("the bat has attack a town");
	}
	
	
	
}
