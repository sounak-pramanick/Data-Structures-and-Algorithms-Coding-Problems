// Leetcode 61
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0) return head;

    let size = 1;
    let curr = head;

    while(curr.next) {
        size++;
        curr = curr.next;
    }
    curr.next = head;
    k = k % size;

    let temp = head;
    for(let i = 1; i < size - k; i++) {
        temp = temp.next;
    }

    head = temp.next;
    temp.next = null;

    return head;
};