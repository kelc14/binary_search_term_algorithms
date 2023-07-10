class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (val > current.val) {
        // set new current as current.right if it exist,s otherwise set as node
        if (current.right === null) {
          current.right = newNode;
          return this;
        }

        current = current.right;
      } else {
        // set new current as current.left if it exist,s otherwise set as node
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val > node.val) {
      if (node.right === null) {
        node.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.right);
    } else {
      if (node.left === null) {
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return;

    let current = this.root;

    while (current) {
      if (val > current.val) {
        // set new current as current.right

        current = current.right;
      } else if (val < current.val) {
        // set new current as current.left
        current = current.left;
      } else {
        return current;
      }
    }
    return;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (node === null) return;

    if (val > node.val) {
      // set new current as node.right
      return this.findRecursively(val, node.right);
    } else if (val < node.val) {
      // set new current as node.left
      return this.findRecursively(val, node.left);
    } else {
      return node;
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {}

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {}

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
