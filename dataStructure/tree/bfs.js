//       5
//   3       7
// 2   4   6    8

// queue   []
// result  [5,3,7,2,4,6,8]

class tree {
    constructor() {
        this.root = null;
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


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

