/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let res = null,
        head = null;
    while (l1 || l2) {
        let node;
        if (!l1) {
            node = new ListNode(l2.val);
            l2 = l2.next;
        } else if (!l2) {
            node = new ListNode(l1.val);
            l1 = l1.next;
        } else if (l1.val < l2.val) {
            node = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            node = new ListNode(l2.val);
            l2 = l2.next;
        }

        if (!res)
            res = head = node;
        else {
            head.next = node;
            head = node; 
        }
    }
    return res;
};