/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function(root) {
    return computedDeep(root, 0);
};

var computedDeep = function(root, deep) {
    if(root == null) {
        return deep;
    }
    return Math.max(computedDeep(root.left, deep + 1), computedDeep(root.right, deep + 1));
}

