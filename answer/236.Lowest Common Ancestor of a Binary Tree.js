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

 /**
  * LCA 问题
  * 注意p,q必然存在树内, 且所有节点的值唯一!
  * 递归思想, 对以root为根的(子)树进行查找p和q, 如果root === null || root === p || root === q 直接返回root
  * 表示对于当前树的查找已经完毕, 否则对左右子树进行查找, 根据左右子树的返回值判断:
  * 1. 左右子树的返回值都不为null, 由于值唯一左右子树的返回值就是p和q, 此时root为LCA
  * 2. 如果左右子树返回值只有一个不为null, 说明只有p和q存在与左或右子树中, 最先找到的那个节点为LCA
  * 3. 左右子树返回值均为null, p和q均不在树中, 返回null
**/
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root === q) {
        return root;
    }

    let leftNode = lowestCommonAncestor(root.left, p, q),
        rightNode = lowestCommonAncestor(root.right, p, q);
    
    if (leftNode !== null && rightNode !== null) {
        return root;
    }
    if (leftNode !== null) {
        return leftNode;
    }
    if (rightNode !== null) {
        return rightNode;
    }
    return null;
};