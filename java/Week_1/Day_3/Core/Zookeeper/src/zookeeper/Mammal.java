package zookeeper;

public class Mammal { 
	private int energy;
//	public Mammal() { 
//		this.energy=100;
//	}
	public int getEnergy() {
		return energy;
	}

	public void setEnergy(int energy) {
		this.energy = energy;
		
	}   
	public  int  displayinfo() { 
		System.out.println("your enrgy: " + energy ); 
		return energy;
	}

	
}
