function ArrayList(){
    this.array = [];
    this.size = 0;
}

ArrayList.prototype.init = function(arr){
    if(!arr) {
        return 'Booom try again!';
    }
    this.array = arr;
    this.size = arr.length;

    return this.array;
}

ArrayList.prototype.addAtEnd = function(myArray){ //push
    if((!myArray)) {
        return 'Booom try again!';
    }
    const arr = this.array;       
    arr[arr.length] = myArray;
    this.size = arr.length;

    return arr;
}

ArrayList.prototype.deleteLastElm = function(){ //pop
    const arr = this.array;
    arr.length === arr;
    return arr.length
}

ArrayList.prototype.deleteFirstElm = function(){ //shift

    const arr = this.array;
    let a = [];
        
    for(i = 1; i < arr.length; i++) {
        a[i - 1] = arr[i]
    }
    this.array = a
    this.size -= 1;
    
    return arr;
}

ArrayList.prototype.addFirstElm = function(addFirst){ //unshift
    if(!addFirst){
        return 'Please check your input';
    } 
    const arr = this.array;
    let a = [addFirst];
    
    for(let i = 0 ; i < arr.length; i++) {
        a[i + 1] = arr[i]
    }
    this.array = a
    this.size +=1 

    return this.array;
}

ArrayList.prototype.clear = function() { //clear
    this.array = [];
    this.size = 0;
    return this.array
}

ArrayList.prototype.checkForInclude = function(elm) { //include
    if(!elm) return 'Please input an array';
    const arr = this.array;

    for(i = 0; i < arr.length; i++) {
        
        if(elm === arr[i]){
            
            return 'true';
        }
        return 'false';
    }

    return arr;
}

ArrayList.prototype.changeToString = function() { //toString
    const arr = this.array;
        
    return `'[${arr}]'`
}

ArrayList.prototype.checkForIndex = function(elm) { //indexOf
    if(!elm) {
        return 'Please input an array';
    }
    const arr = this.array;

    for(i = 0; i < arr.length; i++) {
        if(elm === arr[i]) {
            return  arr[i] - 1;
        }
    }

    return -1;
}

ArrayList.prototype.reverse = function() {
    const arr = this.array;
    const array = [];
    
    for(i = arr.length - 1; i >= 0; i--) {
        array[array.length] = arr[i];
    }
    this.array = array;
    this.size = array.length;
    return array;
}

const testArray = new ArrayList();
testArray.init([1,2,3,4]);
console.log(testArray);
console.log(testArray.checkForInclude(undefined));
console.log(testArray);





