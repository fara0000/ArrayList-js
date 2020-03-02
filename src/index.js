const ArrayList = {
    array: [],
    size: 0,
    init: function(arr) {
        ArrayList.array = arr;
        if(!arr){
            return 'Booom try again!';
        }
        ArrayList.size = arr.length;
    },
    deleteLastElm: function() { //pop()
        const arr = ArrayList.array;
         arr.length === arr;
        return arr.length;
    },   
    addAtEnd: function(myArrayEnd) { //push()
        const arr = ArrayList.array;
        if((!arr)){
            return 'Booom try again!';
        }
        arr[arr.length] = myArrayEnd;
        ArrayList.size = arr.length;
        
        return arr;
    },
    deleteFirstELm: function() { //shift()
        const arr = ArrayList.array;
        let a = [];
        for(i = 1; i < arr.length; i++) {
            a[i - 1] = arr[i]
        }
        ArrayList.array = a
        ArrayList.size -= 1;
        return ArrayList.array;
    },
    addFirstElm: function(addFirst) { //unshift()
        const arr = ArrayList.array;
        let a = [addFirst];
        for(let i = 0 ; i < arr.length; i++){
            a[i + 1] = arr[i]
        }
        ArrayList.array = a
        ArrayList.size +=1
        return ArrayList.array;
    },
    clear: function() { //clear()
        const arr = ArrayList.array;
        arr.length = 0; // second variant arr.length = []; 
        ArrayList.size = arr.length;
        return arr;
    },  
    checkForIncludes: function(elm) { //includes()
        const arr = ArrayList.array;
        for(i = 0; i < arr.length; i++) {
            if(elm === arr[i]){
                return 'true';
            }
        }
        return 'false';
    },
    changeToString: function() { //toString
        const arr = ArrayList.array;
        return `${arr}`
    },
    checkForIndexOf: function(elm) { //IndexOf
        const arr = ArrayList.array;
        
        for(i = 0; i < arr.length; i++){
            if(elm === arr[i]){
                return  arr[i] - 1;
            }
        }
        return -1;
    },
    reverse: function(){ //reverse
        const arr = ArrayList.array;
        const array = [];
        
        for(i = arr.length - 1; i >= 0; i--) {
            array[array.length] = arr[i];
        }
        ArrayList.array = array;
        ArrayList.size = array.length;
        return ArrayList.array;
    }
};
// let myArray = ['a' , 2 , 4 , 6];
// ArrayList.init(myArray);
// console.log(ArrayList);

// ArrayList.init([1,2,3,4]);
// console.log(ArrayList.deleteLastElm());

// let myArrayEnd = ('fakhri');
// ArrayList.addAtEnd(myArrayEnd);
// console.log(ArrayList);

// ArrayList.init(myArray);
// console.log(ArrayList);
// ArrayList.deleteFirstELm();
// console.log(ArrayList);

// ArrayList.init(myArray);
// console.log(ArrayList);
// ArrayList.addFirstElm('qaqa');
// console.log(ArrayList);

// ArrayList.init([1,2,3,4]);
// console.log(ArrayList.checkForIncludes(4));


// ArrayList.clear();
// console.log(ArrayList);


// ArrayList.init([1,2,3,4]);
// console.log(ArrayList.changeToString());

// ArrayList.init([1,2,3,4]);
// console.log(ArrayList.checkForIndexOf(5));




