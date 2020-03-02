describe ('HW_3', function() {
    describe ('ArrayList', function() {
        describe('Initialization (init)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.init, 'Initialization process has been defined');
            });

            it('should be Warning (undefined)', function() {
                const arr = undefined;
                const expSize = 'Booom try again!';
                const expArr = 'Booom try again!';

                const actual = ArrayList.init(arr);

                assert.deepEqual(actual, expArr, expSize);
            });

            it('should be Warning (null)', function() {
                const arr = null;
                const expSize = 'Booom try again!';
                const expArr = 'Booom try again!';

                const actual = ArrayList.init(arr);

                assert.deepEqual(actual, expArr, expSize);
            });
        }); 
        describe('addAtEnd (push)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.addAtEnd, 'Adding process has been defined');
            });

            it('should be Warning (undefined)', function() {
                const arr = undefined;
                const expSize = 'Booom try again!';
                const expArr = 'Booom try again!';

                const actual = ArrayList.addAtEnd(arr);

                assert.deepEqual(actual, expArr, expSize);
            });

            it('should be Warning (null)', function() {
                const arr = null;
                const expSize = 'Booom try again!';
                const expArr = 'Booom try again!';

                const actual = ArrayList.addAtEnd(arr);

                assert.deepEqual(actual, expArr, expSize);
            });

            it('should return array [1, 2, 3, 4, 5], element = 5, size = 5, ([1, 2, 3 ,4])', function() {
                const arr = [1, 2, 3, 4];
                const elm = 5;
                const expArr = [1, 2, 3, 4, 5];
                const expSize = 5;                
                ArrayList.init(arr);

                const actual = ArrayList.addAtEnd(elm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
        });    
        describe('deleteLastElm (pop)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.deleteLastElm, 'Deleting last element process has been defined');
            });

            it('should return array [1, 2, 3, 4], ([4])', function() {
                const arr = [1, 2, 3, 4];
                const expArr = 4;
                ArrayList.init(arr);

                const actual = ArrayList.deleteLastElm(arr);

                assert.deepEqual(actual, expArr);
            });
        }); 
        describe('deleteFirstElm (shift)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.deleteFirstELm, 'Deleting first element process has been defined');
            });

            it('should return array [1, 2, 3, 4], element = 1 , size = 3, ([2, 3, 4])', function() {
                const arr = [1, 2, 3, 4];
                const expArr = [2, 3, 4];
                const expSize = 3;                
                ArrayList.init(arr);

                const actual = ArrayList.deleteFirstELm(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
        }); 
        describe('addFirstElm (unshift)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.addFirstElm, 'Adding first element process has been defined');
            });

            it('should return array [ 2, 3, 4], element = 1, size = 4, ([1, 2, 3, 4])', function() {
                const arr = [2, 3, 4];
                const elm = 1;
                const expArr = [1, 2, 3, 4];
                const expSize = 4;                
                ArrayList.init(arr);

                const actual = ArrayList.addFirstElm(elm);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
        }); 
        describe('clear', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.clear, 'Clearing has been defined');
            });

            it('should return array [1, 2, 3, 4], size = 0, ([])', function() {
                const arr = [1, 2, 3, 4];
                const expArr = [];
                const expSize = 0;                
                ArrayList.init(arr);

                const actual = ArrayList.clear(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
            it('should return array [], size = 0, ([])', function() {
                const arr = [];
                const expArr = [];
                const expSize = 0;                
                ArrayList.init(arr);

                const actual = ArrayList.clear(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length, expSize);
            });
        });     
        describe('checkForIncludes(includes)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.checkForIncludes, 'Including process has been defined');
            });

            it('should return array [1, 2, 3, 4], element = 4, ([])', function() {
                const arr = [1, 2, 3, 4];
                const elm = 4;
                expected = 'true';               
                ArrayList.init(arr);

                const actual = ArrayList.checkForIncludes(elm);

                assert.deepEqual(actual, expected);
            });
        });
        describe('changeToString(toString)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.changeToString, 'Changing process has been defined');
            });

            it('should return String  `(1, 2, 3, 4)` ', function() {
                const arr = [1, 2, 3, 4]
                const expArr =  '1,2,3,4' ;                
                ArrayList.init(arr);

                const actual = ArrayList.changeToString(arr);

                assert.deepEqual(actual, expArr); 
            });
        }); 
        describe('reverse(reverse)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.reverse, 'Changing process has been defined');
            });

            it('should return array [1, 2, 3, 4], size = 4 ,([4, 3, 2, 1]) ', function() {
                const arr = [1, 2, 3, 4]
                const expArr = [4, 3, 2, 1];  
                const expSize = 4              
                ArrayList.init(arr);

                const actual = ArrayList.reverse(arr);

                assert.deepEqual(actual, expArr);
                assert.deepEqual(actual.length,expSize)
            });
        });  
        describe('checkForIndexOf(indexOf)', function() {
            it('should be defined', function() {
                assert.isDefined(ArrayList.checkForIndexOf, 'checking process has been defined');
            });

            it('should return array [1, 2, 3, 4], element = 4, (3)', function() {
                const arr = [1, 2, 3, 4];
                const elm = 4;
                expected = 3;               
                ArrayList.init(arr);

                const actual = ArrayList.checkForIndexOf(elm);

                assert.deepEqual(actual, expected);
            });
        });                                                                                                                                                                                                                                                                        
    });
});