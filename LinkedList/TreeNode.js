function TreeNode(value) {
    this.data = value;
    this.next = null;
}

function LinkedList() {
    this._length = 0;
    this.head = null;

    this.insert = function (value) {
        let node = new TreeNode(value);
        let currentNode = this.head;

        if (!currentNode) {
            this.head = node;
            this._length++;
            return;
        }

        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this._length++;
    }

    this.traverse = function () {

        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }

}

let linked = new LinkedList();
linked.traverse();

linked.insert(1);
linked.insert(2);
linked.insert(3);

linked.traverse();
