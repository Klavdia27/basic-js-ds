const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.node = null;
  }
  
  root() {
    return this.node;
  }

  add(data) {
    if (!this.node) {
      this.node = new Node(data);
      return;
    }
    let currunt = this.node;
    while (currunt) {
      if (currunt.data > data && currunt.left == null) {
        currunt.left = new Node(data);
        return;
      } else if (currunt.data < data && currunt.right == null) {
        currunt.right = new Node(data);
        return;
      }
      if (currunt.data > data) {
        currunt = currunt.left;
      } else {
        currunt = currunt.right;
      }
    }
  }

  has(data) {
    if (this.find(data) === null) return false;
    else return true;
  }

  find(data) {
    let currunt = this.node;
    while (currunt) {
      if (data > currunt.data) {
        currunt = currunt.right;
      } else if (data < currunt.data) {
        currunt = currunt.left;
      } else if (data == currunt.data) {
        return currunt;
      }
    }
    return null;
  }

  remove(data) {
    if (this.has(data)) {
      this.node = removeWithin(this.node, data);
      function removeWithin(node, data) {
        if (node.data == data) {
          if (node.left == null && node.right == null) {
            return null;
          } else if (node.left == null) {
            node = node.right;
            return node;
          } else if (node.right == null) {
            node = node.left;
            return node;
          } else {
            if (node.right.left == null) {
              node.data = node.right.data;
              node.right = node.right.right;
              return node;
            }
            let rem = minLeft(node.right);
            node = removeWithin(node, rem.data);
            node.data = rem.data;
            function minLeft(node) {
              while (node.left) {
                node = node.left;
              }
              return node;
            }
            return node;
          }
        }
        if (node.data < data) {
          node.right = removeWithin(node.right, data);
          return node;
        } else {
          node.left = removeWithin(node.left, data);
          return node;
        }
      }
    }
  }

  min() {
    let currunt = this.node;
    while (currunt.left) {
      currunt = currunt.left;
    }
    return currunt.data;
  }

  max() {
    let currunt = this.node;
    while (currunt.right) {
      currunt = currunt.right;
    }
    return currunt.data;
  }
}

module.exports = {
  BinarySearchTree
};