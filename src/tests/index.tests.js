describe ('HW_4', function() {
    describe ('ArrayList', function() {
        describe('Initialization (init)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.init, 'Initialization process has been defined');
            });

            it('should be Warning (undefined)', function() {
                const arr = undefined;
                const expSize = 'Booom try again!';
                const expArr = 'Booom try again!';

                const actual = ArrayList.prototype.init(arr);

                assert.deepEqual(actual, expArr, expSize);
            });

            it('should be Warning (null)', function() {
                const arr = null;
                const expSize = 'Booom try again!';
                const expArr = 'Booom try again!';

                const actual = ArrayList.prototype.init(arr);

                assert.deepEqual(actual, expArr, expSize);
            });

            it('should return ([1, 2, 3])', function() {
                const array = [1, 2, 3];
                const expArr = [1, 2, 3];
                const expSize = 3;
                

                const actual = ArrayList.prototype.init(array);

                assert.deepEqual(actual, expArr)
                
                assert.deepEqual(actual.length, expSize)
            });
        }); 
        describe('addAtEnd (push)', function() {
            it('should be defined', function() {
                assert.isDefined( ArrayList.prototype.addAtEnd, 'Adding process has been defined');
            });

            it('should be Warning (undefined)', function() {
                const arr = undefined;
                const expSize = 'Booom try again!';
                const expArr = 'Booom try again!';

                const actual = ArrayList.prototype.addAtEnd(arr);

                assert.deepEqual(actual, expArr, expSize);
            });

            it('should be Warning (null)', function() {
                const arr = null;
                const expSize = 'Booom try again!';
                const expArr = 'Booom try again!';

                const actual = ArrayList.prototype.addAtEnd(arr);

                assert.deepEqual(actual, expArr, expSize);
            });

            it('should return array [1, 2, 3, 4, 5], element = 5, size = 5, ([1, 2, 3 ,4])', function() {
                const arr = [1, 2, 3, 4];
                const elm = 5;
                const expArr = [1, 2, 3, 4, 5];
                const expSize = 5;                
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.addAtEnd(elm);

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual.length, expSize);
            });
        });    
        describe('deleteLastElm (pop)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.deleteLastElm, 'Deleting last element process has been defined');
            });

            it('should return array [1, 2, 3, 4], ([4])', function() {
                const arr = [1, 2, 3, 4];
                const expArr = 4 ;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.deleteLastElm(arr);

                assert.deepEqual(actual, expArr);
            });
        }); 
        describe('deleteFirstElm (shift)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.deleteFirstElm , 'Deleting first element process has been defined');
            });

            it('should return array [1, 2, 3, 4], element = 1 , size = 3, ([2, 3, 4])', function() {
                const arr = [1, 2, 3, 4];
                const expArr = [2, 3, 4];
                const expSize = 3;                
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.deleteFirstELm;

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual.length, expSize);
            });
        }); 
        describe('addFirstElm (unshift)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.addFirstElm, 'Adding first element process has been defined');
            });

            it('should return array [ 2, 3, 4], element = 1, size = 4, ([1, 2, 3, 4])', function() {
                const arr = [2, 3, 4];
                const elm = 1;
                const expArr = [1, 2, 3, 4];
                const expSize = 4;                
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.addFirstElm(elm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
            
            it('should return [3, 4], size = 2, ([4])', function() {
                const array = [4];
                const element = 3;
                const expArr = [3, 4];
                const expSize = 2;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.addFirstElm(element);

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [4], size = 1, ([])', function() {
                const array = [];
                const element = 4;
                const expArr = [4];
                const expSize = 1;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.addFirstElm(element);

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual.length, expSize);
            });

            it('should return warning  [] (null)', function() {
                const arr = null;
                const expArr = 'Please check your input';
                const expSize = 'Please check your input';

                const actual = ArrayList.prototype.addFirstElm(arr);

                assert.deepEqual(actual, expArr);
               
                assert.deepEqual(actual, expSize)
            });

            it('should return warning  [] (undefined)', function() {
                const arr = undefined;
                const expArr = 'Please check your input';
                const expSize = 'Please check your input';

                const actual = ArrayList.prototype.addFirstElm(arr);

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual, expSize)
            });

            it('should return [] ([])', function() {
                const arr = [];
                const arrElm = [];
                const expArr = [[]];
                const expSize = 1;
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.addFirstElm(arrElm);

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual.length, expSize)
            });
        }); 
        describe('clear', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.clear, 'Clearing has been defined');
            });

            it('should return array [1, 2, 3, 4], size = 0, ([])', function() {
                const arr = [1, 2, 3, 4];
                const expArr = [];
                const expSize = 0;                
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.clear(arr);

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual.length, expSize);
            });
            it('should return array [], size = 0, ([])', function() {
                const arr = [];
                const expArr = [];
                const expSize = 0;                
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.clear(arr);

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual.length, expSize);
            });
        });     
        describe('checkForInclude(includes)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.checkForInclude, 'Including process has been defined');
            });

            it('should return array [1, 2, 3, 4], element = 4, ([])', function() {
                const arr = [1, 2, 3, 4];
                const elm = 4;
                const expected = 'true';               
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.checkForInclude(elm);

                assert.deepEqual(actual, expected);
            });
            it('should warn the user to [ ] (undefined)', function() {
                const arg = undefined;
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.checkForInclude(arg);

                assert.deepEqual(actual, expArr);
            });

            it('should warn the user to [ ] (null)', function() {
                const arg = null;
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.checkForInclude(arg);

                assert.deepEqual(actual, expArr);
            });

            it('should return true, size = 2, ([3, 4])', function() {
                const array = [3, 4];
                const element = 4;
                const expArr = 'true';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForInclude(element);

                assert.deepEqual(actual, expArr);
            });

            it('should return false, size = 1, ([4])', function() {
                const array = [4];
                const element = 6;
                const expArr = 'false';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForInclude(element);

                assert.deepEqual(actual, expArr);
            });

            it('should return false, size = 5, ([2, 4, 5, 6, 7])', function() {
                const array = [2, 4, 5, 6, 7];
                const element = 10;
                const expArr = 'false';
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForInclude(element);

                assert.deepEqual(actual, expArr);
            });
        });
        describe('changeToString(toString)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.changeToString, 'Changing process has been defined');
            });

            it('should return String  `(1, 2, 3, 4)` ', function() {
                const arr = [1, 2, 3, 4]
                const expArr =  '\'[1,2,3,4]\'';                
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.changeToString(arr);

                assert.deepEqual(actual, expArr); 
            });
        }); 
        describe('reverse(reverse)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.reverse, 'Changing process has been defined');
            });

            it('should return array [1, 2, 3, 4], size = 4, ([4, 3, 2, 1]) ', function() {
                const arr = [1, 2, 3, 4]
                const expArr = [4, 3, 2, 1];  
                const expSize = 4              
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.reverse(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize)
            });
            it('should return [4, 3, 2, 6, 5], size = 5, ([5, 6, 2, 3, 4])', function() {
                const array = [5, 6, 2, 3, 4];
                const expArr = [4, 3, 2, 6, 5];
                const expSize = 5;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.reverse();

                assert.deepEqual(actual, expArr);
                
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [4, 3], size = 2, ([3, 4])', function() {
                const array = [3, 4];
                const expArr = [4, 3];
                const expSize = 2;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.reverse();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });

            it('should return [4], size = 1, ([4])', function() {
                const array = [4];
                const expArr = [4];
                const expSize = 1;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.reverse();

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
        });  
        describe('checkForIndex(indexOf)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.prototype.checkForIndex, 'checking process has been defined');
            });

            it('should return array [1, 2, 3, 4], element = 4, (3)', function() {
                const arr = [1, 2, 3, 4];
                const elm = 4;
                expected = 3;               
                ArrayList.prototype.init(arr);

                const actual = ArrayList.prototype.checkForIndex(elm);

                assert.deepEqual(actual, expected);
            });

            it('should warn the user to [ ] (undefined)', function() {
                const arg = undefined;
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.checkForIndex(arg);

                assert.deepEqual(actual, expArr);
            });

            it('should warn the user to [ ] (null)', function() {
                const arg = null;
                const expArr = 'Please input an array';

                const actual = ArrayList.prototype.checkForIndex(arg);

                assert.deepEqual(actual, expArr);
            });

            it('should return -1, size = 5, ([2, 4, 5, 6, 7])', function() {
                const array = [2, 4, 5, 6, 7];
                const element = 10;
                const expArr = -1;
                ArrayList.prototype.init(array);

                const actual = ArrayList.prototype.checkForIndex(element);

                assert.deepEqual(actual, expArr);
            });
        });                                                                                                                                                                                                                                                                        
    });
});