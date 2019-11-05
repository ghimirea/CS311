"use strict";
/* global Stack */

class SymbolBalancer {
    constructor(text) {
        this.text = text;
        this.stack = new Stack();
    }

    isBalanced(delimiters) {
        let stack = [];
        //iterate through all the characters in the string
        for (let index = 0; index < delimiters.length; index++) {
            let char = str.charAt(i);
            //if the letter is an opening paren, push it in the stack
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else if (char === ")" || char === "}" || char === "]") {
                //peek at the stack to see if there is a opening paren for it
                if (stack.length === 0) {
                    return false;
                } else if (char === "(" && peek(stack) === ")" ||
                    char === "{" && peek(stack) === "}" ||
                    char === "[" && peek(stack) === "]") {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}