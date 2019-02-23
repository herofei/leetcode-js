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
var addTwoNumbers = function(l1, l2) {
    let flag = 0, 
        res, 
        head;

    while(l1 || l2) {
        let a = l1 ? l1.val : 0,
            b = l2 ? l2.val : 0,
            sum = a + b + flag,
            node = new ListNode(sum % 10);

        flag = ~~(sum / 10);

        if (!res)
            res = head = node;
        else {
            head.next = node;
            head = node; 
        }

        if (l1) {
            l1 = l1.next;
        }

        if (l2) {
            l2 = l2.next;
        }
    }

    if (flag) {
        let node = new ListNode(flag);
        head.next = node;
        head = node;
    }

    return res;
};