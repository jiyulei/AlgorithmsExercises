class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
       const popItem = this.data[this.length - 1];
       delete this.data[this.length - 1];
       this.length--;
       return popItem;
    }

    delete(index) {
        const deletedItem = this.data[index];
        this.shiftItems(index);
        return deletedItem;
    }

    unshift(itemsArr) {
       this.unshiftItems(itemsArr);
    }

    shift() {
        const firstItem = this.data[0];
        this.shiftItems(0);
        return firstItem;
    }

    unshiftItems(itemsArr) {
       const addedLength = itemsArr.length;

        for (let i = this.length - 1; i >=0 ; i--) {
            this.data[i+addedLength] = this.data[i]; 
        }
       
        this.length += addedLength;

        for (let j = 0; j < addedLength; j++) {
            this.data[j] = itemsArr[j];
        }
    }
     
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
           this.data[i] = this.data[i + 1];    
        }
        delete this.data[this.length - 1];
        this.length--;
    }

}

const arr1 = new Array();
arr1.get(0);
arr1.push('a');
arr1.push('b');
arr1.push('c');
console.log(arr1);
arr1.unshift(['y','z','x'])
console.log(arr1);
arr1.shift();
console.log(arr1);
