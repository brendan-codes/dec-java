public class Dot {
    protected int x;
    protected int y;

    public Dot(int x, int y){
        this.setX(x);
        this.setY(y);
    }

    public Dot(){

    }

    public void readLocation(){
        System.out.println(x.toString() + " " + y.toString());
    }

    public int getX(){
        return this.x;
    }

    public void setX(int x){
        this.x = x;
    }

    public int getY(){
        return this.y;
    }

    public void setY(int y){
        this.y = y;
    }
}