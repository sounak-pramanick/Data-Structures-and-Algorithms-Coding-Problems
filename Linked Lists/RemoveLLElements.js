// Leetcode 203
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let curr = head;
    let prev = null;
    let newHead = curr;

    while(curr != null) {
        if(curr.val === val) {
            if(!prev) {
                curr = curr.next;
                newHead = curr;
            }
            else {
                prev.next = curr.next;
                curr = curr.next;
            }
        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }

    return newHead;
};