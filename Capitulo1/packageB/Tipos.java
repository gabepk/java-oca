/**
 * Pagina 14. Criacao de pacotes e execucao por linha de comando
 * Compilacao ed 2 arquivos ao mesmo tempo
 */

package packageB;

import java.lang.Math;

public class Tipos {
    public static void main(String args[]) {
        boolean n_boolean = true;
        byte n_byte = 127; // (byte) Math.pow(2, 7) - 1; -> Nao faz operacao
        short n_short = 32767; // (short) Math.pow(2, 15) - 1; -> Nao faz operacao
        int n_inteiro = (int) Math.pow(2, 31) - 1;
        long n_long = (long) Math.pow(2, 63) - 1;
        float n_float = 1_2_3_4.111F; // Unico que tem essa frescura na frente
        double n_double = 123456789_987654321.123456789_987654321;
        char n_char = 50 + ' ';

        System.out.println(n_boolean + " is a boolean");
        System.out.println(n_byte + " is a byte");
        System.out.println(n_short + " is a short");
        System.out.println(n_inteiro + " is a int");
        System.out.println(n_long + " is a long");
        System.out.println(n_float + " is a float");
        System.out.println(n_double + " is a double");
        System.out.println(n_char + " is a char");
    }
}
