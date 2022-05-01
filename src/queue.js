const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  queue = []

  getUnderlyingList() {
      let list = null;
      for (let i = this.queue.length - 1; i >= 0; i--)
        list = {value: this.queue[i], next: list};
      return list;
  }

  enqueue(value) {
    this.queue.push(value)

  }

  dequeue() {
    const value = this.queue[0]
    this.queue.splice(0, 1)
    return value

  }
}

const queue = new Queue();
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);

module.exports = {
  Queue
};
