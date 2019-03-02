/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let val = root.val;
    if ((val - p.val) * (val - q.val) <= 0) {
        return root;
    } else if (val - p.val > 0 && val - q.val > 0) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return lowestCommonAncestor(root.right, p, q);
};