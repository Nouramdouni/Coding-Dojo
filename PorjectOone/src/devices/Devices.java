package devices;

public class Devices {
	  private int battery ; 
	  public  Devices(){ 
		  this.battery=100; 
	  } 
	  public int getBattery() {
		return battery;
	}
	public void setBattery(int battery) {
		this.battery = battery;
	}
	public void status() {
	        System.out.println("Battery remaining: " + this.battery);
	    }
	 

}
