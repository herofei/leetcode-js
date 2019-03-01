/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let result = [];
    function midOrder (node) {
        if (node) {
            midOrder(node.left);
            result.push(node.val);
            midOrder(node.right);
        }
    }
    midOrder(root);
    return result[k - 1];
};