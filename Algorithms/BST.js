class BSTNode {
    constructor(value) {
        this.value = value;
        this.left = null; // to the left should only be less than
        this.right = null; // to the right should only be greater than
    }

    add(value) {
        if(value < this.value) {
            if(this.left) {
                this.left.add(value);
            } else {
                this.left = new BSTNode(value);
            }
        }

        if(value > this.value) {
            if(this.right) {
                this.right.add(value);
            } else {
                this.right = new BSTNode(value);
            }
        }
    }

    findNodeandParent(value, parent = this.root) {
        if(value < this.value) {
            if(this.left) {
                return this.left.findNodeandParent(value, this);
            } else {
                return null;
            }
        }
        if(value > this.value) {
            if(this.right) {
                return this.right.findNodeandParent(value, this);
            } else {
                return null;
            }
        }
        return { 'parent' : parent, 'node' : this };
    }

    printInOrder() {
        if(this.left) {
            this.left.printInOrder();
        }
        console.log(this.value);
        if(this.right) {
            this.right.printInOrder();
        }
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
        !this.root ? this.root = new BSTNode(value) : this.root.add(value)
    }

    // invert the nodes of a given tree (so left side becomes greater than and right side less than; can assume tree is balanced)
    invertNodes() {
        // your code here
    }

    // find the number of Leaf Nodes (ends of branches)
    countNumberOfLeaves() {
        // your code here
    }

    
    printInOrder() {
        if ( this.root ) {
            this.root.printInOrder();
        }
    }
}

var bst = new BST();
bst.add(10);
bst.add(15);
bst.add(5);
bst.add(20);
bst.add(25);
bst.add(8);
bst.add(3);
console.log("====================");
bst.printInOrder();

bst.printInOrder();

bst.printInOrder();