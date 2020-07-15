//  * Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// @param {TreeNode} p
// @param {TreeNode} q
// @return {boolean}

var isSameTree = function (p, q) {
  // let same = true
  if (!p && !q) return true;
  if (p === null && q === null) return false;
  if (p === null || q === null || p.val !== q.val) return;

  if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true;
  }
};

// var isSameTree = function (p, q) {
//   if (!p && !q) return true;

//   return (
//     p != null &&
//     q != null &&
//     p.val === q.val &&
//     isSameTree(p.left, q.left) &&
//     isSameTree(p.right, q.right)
//   );
// };
var isSameTree = function (p, q) {
  let equal = true;

  //if nodes empty on either side, nodes are equal
  if (!p && !q) return equal;

  //make helper function to check equality
  const isSame = (x, y) => {
    //if nodes are both null return
    if (x === null && y === null) return;

    //if xnode OR ynode is null, not the same
    // OR if x val is not equal to y val, nodes are not equal to each other
    if (x === null || y === null || x.val !== y.val) {
      equal = false;
    }

    //use recursion to check equality on either sides of each node
    isSame(x.left, y.left);
    isSame(x.right, y.right);
  };

  //use helper function on original nodes to check equality
  isSame(p, q);
  return equal;
};
