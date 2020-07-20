//takes in str parens of parenthesis
//return boolean
//how to i make sure 4 idx are in the same direction?

//use a stack to keep track of the latest item and compare to current item, if it is open push to stack, if it is closed, pop off. if the stack has a length after, it is unbalanced

let map = {
  "(": ")",
};

function validParentheses(parens) {
  let newStack = [];
  for (let i = 0; i < parens.length; i++) {
    let el = parens[i];
    if (map[el]) {
      newStack.push(map[el]);
    } else {
      if (el !== newStack.pop()) {
        return false;
      }
    }
  }

  return newStack.length === 0;
}

console.log(validParentheses("(())((()())())"));
