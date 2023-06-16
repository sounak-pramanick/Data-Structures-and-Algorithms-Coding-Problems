// Pepcoding
// Tag - Stack
// To evaluate given Infix Expression

import java.util.Scanner;
import java.util.Stack;

public class InfixEvaluation {
	
	public static boolean precedence(char op1, char op2) {
		if((op1 == '*' || op1 == '/') && (op2 == '+') || op2 == '-') {
			return false;
		}
		return true;
	}
	
	public static int applyOperation(int val1, int val2, char op) {
		if(op == '+') {
			return val1 + val2;
		}
		else if(op == '-') {
			return val1 - val2;
		}
		else if(op == '*') {
			return val1 * val2;
		}
		else {
			return val1 / val2;
		}
	}
	
	public static int evaluateInfix(String str, int n) {
		Stack<Integer> operands = new Stack<>();
		Stack<Character> operators = new Stack<>();
		
		for(int i = 0; i < n; i++) {
			char ch = str.charAt(i);
			
			if(ch == ' ') {
				continue;
			}
			
			if(ch == '(') {
				operators.push(ch);
			}
			
			// here assumption is that the given expression contains operands of single digit only
			
			else if(Character.isDigit(ch)) { // else if(ch >= '0' && ch <= '9') or else if(ch >= 48 && ch <= 57)
				operands.push(ch-'0');
			}
			
			/*
			This will work if there are more than single digit numbers
			
			else if(ch >= '0' && ch <= '9') {
				StringBuffer sbuf = new StringBuffer(); // can also be done by String
				while(i < n && str.charAt(i) >= '0' && str.charAt(i) <= '9') {
					sbuf.append(str.charAt(i));
					i++;
				}
				i--; // because when while loop ends, i is standing on the next character which is not a digit, so in the next iteration
				// i will again be incremented and this ith character would be skipped if i-- is not done
				operands.push(Integer.parseInt(sbuf.toString()));
			}
			*/
			
			else if(ch == ')') {
				while(operators.peek() != '(') {
					char op = operators.pop();
					int val2 = operands.pop();
					int val1 = operands.pop();
					
					int val = applyOperation(val1, val2, op);
					operands.push(val);
				}
				operators.pop();
			}
			
			else if(ch == '+' || ch == '-' || ch == '*' || ch == '/') {
				while(!operators.isEmpty() && operators.peek() != '(' && precedence(ch, operators.peek()) == true) {
					char op = operators.pop();
					int val2 = operands.pop();
					int val1 = operands.pop();
					
					int val = applyOperation(val1, val2, op);
					operands.push(val);
				}
				operators.push(ch);
			}
		}
		
		while(!operators.isEmpty()) {
			char op = operators.pop();
			int val2 = operands.pop();
			int val1 = operands.pop();
			
			int val = applyOperation(val1, val2, op);
			operands.push(val);
		}
		
		return operands.peek();
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		System.out.println(evaluateInfix(str, str.length()));
		/*
		Input
		(2+(5-3*6/2))
		
		Output
		-2
		*/
	}
}