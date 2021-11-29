class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    //  root 
   // l      r
    insert(value) {
        let curNode = this.root;
        if (curNode === null) {
            this.root = new Node(value);
        }

        while(curNode) {
            if (value < curNode.value) {
                if(curNode.left) {
                    curNode = curNode.left;
                } else {
                    curNode.left = new Node(value);
                    return;
                }

            } else {
                if(curNode.right) {
                    curNode = curNode.right;
                } else {
                    curNode.right = new Node(value);
                    return;
                }
            }
        }
    }

    find(value) {
        let curNode = this.root;
        while(curNode) {
            if (curNode.value === value) {
                return curNode;
            } else if (curNode.value > value) {
                curNode = curNode.left;
            } else {
                curNode = curNode.right;
            }
        }
        return curNode;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const tree = new BinarySearchTree();
tree.root = new Node(5);
tree.root.left = new Node(3);
tree.root.right = new Node(10);
tree.insert(4);
tree.insert(2);
tree.insert(7);
tree.insert(11);



//       5
//  3        10
//2   4    7     11
 
// pre-order
function dfsPreOrder(tree) {
    const result = [];
    const curNode = tree.root;

    function traverse(node) {
        result.push(node.value);
        if(node.left) {
            traverse(node.left);
        }
        if(node.right) {
            traverse(node.right);
        }
    }
    traverse(curNode);
    return result;
}

console.log('PreOrder: ', dfsPreOrder(tree));


// post-order
function dfsPostOrder(tree) {
    const result = [];
    const curNode = tree.root;

    function traverse(node) {

        if (node.left) {
            traverse(node.left);
        }
        
        if (node.right) {
            traverse(node.right);
        }

        result.push(node.value);
    }

    traverse(curNode);
    return result;
}

console.log('Post-Order: ', dfsPostOrder(tree));


function dfsInOrder(tree) {
    const result = [];

    function traverse(node) {
        if(node.left) {
            traverse(node.left);
        }

        result.push(node.value);
    
        if(node.right) {
            traverse(node.right)
        }
    }
    traverse(tree.root);
    return result;
}

console.log('InOrder: ', dfsInOrder(tree));