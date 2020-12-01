public class Tester{
    public static void main(String[] args){

        Dot myDot = new Dot(5, 6);
        System.out.println(myDot.getX());

        Dot myOtherDot = new Dot();
        System.out.println(myOtherDot.getX());

        Rectangle myRect = new Rectangle(6, 10, 5, 5);
        System.out.println(myRect.getLength());
    }
}