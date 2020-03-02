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
        if(!addFirst) return 'Please check your input';
        
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
        
        if(!elm) return 'Please input an array';
        
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
    checkForIndex: function(elm) { //IndexOf
        const arr = ArrayList.array;
        
        if(!elm) return 'Please input an array';

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





