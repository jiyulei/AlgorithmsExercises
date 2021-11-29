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
 
// console.log(tree.root.right);


function breadthFirstSearch(tree) {
    const queue = [];
    const result = [];
    if (tree.root === null) {
        return result;
    }
    queue.push(tree.root);

    //     3
    // 1        4

    // q: []
    // r: [3,1,4]

    while(queue.length) {
        if (queue[0].left) {
            queue.push(queue[0].left);
        } 
        if (queue[0].right) {
            queue.push(queue[0].right);
        }
        result.push(queue[0].value);
        queue.shift();
    }
    
    return result;
}

console.log(breadthFirstSearch(tree));