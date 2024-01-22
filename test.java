import java.util.Scanner;

class test{
    public static void main(String[] args) {
        int[] array = new int[5];
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 5 array elements : ");
        for( int i = 0 ; i < array.length ; i++ ){
            array[i]=sc.nextInt();
        }
        System.out.println("Array elements are : ");
        for(int arr : array){
            System.out.println(arr);
        }
        System.out.println("");
        sc.close();
    }
}