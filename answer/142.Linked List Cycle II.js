/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head == null || head.next == null) {
        return null
    }
    let slow = head.next,
        fast = head.next.next,
        q = head;
    while (true) {
        if (fast == null || fast.next == null) {
            return null
        }

        if (fast === slow) {
            while (q !== slow) {
                q = q.next;
                slow = slow.next;
            }
            return q;
        }
        fast = fast.next.next;
        slow = slow.next;
    };
};