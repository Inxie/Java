class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null; // to the left should only be less than
        this.right = null; // to the right should only be greater than
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    
    // given a BST add a node to it in the appropriate spot!
    // remember a BST contain values that are larger to the right of a Node, and smaller to the left
    // a BST also does not contain duplicates!
    add(value) {
        let newNode = new BSTNode(value);
        console.log(newNode);
        if (this.root == null) {
            this.root = newNode;
            return;
        }
        let runner = this.root;
        while (runner != null) {
            console.log("The runner is " + runner.value);
            if (runner.value > value) {
                runner = runner.right;
                if (runner.right == null) {
                    runner.right = newNode;
                }
            }
            else if (runner.value < value) {
                runner = runner.left;
                if (runner.left == null) {
                    runner.left = newNode;
                }
            }
            else {
                return "This node already exists.";
            }
        }
        // if (runner.value > value) {
        //     runner.left = newNode;
        // }
        // else {
        //     runner.right = newNode;
        // }
        console.log(newNode);
    }

    // Given a BST, return the value of the min node in the tree
    findMin(){
        // your code here
    }
    
    // Given a BST, return the value of the max node in the tree
    findMax(){
        // your code here
    }

    // print values: [EXTRA Challenge]
    printValues(){
        // your code here
    }
}

var bst = new BST();
bst.add(8);
bst.add(15);
bst.add(3);
bst.add(-12);
bst.add(22);
bst.add(10);
bst.add(5);
bst.add(10);
// console.log(bst.findMax());
// console.log(bst.findMin());