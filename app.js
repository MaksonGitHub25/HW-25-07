//task 1
console.log('%c Task 1', 'color: blue; font-size: 1.5rem;');

const arr = [ 
    {
        name : "John" 
    },
    23,
    true,
    ["Hello world", "World hello",
    {
        fields : [
        23 , 32 , 13 , {
            required : true
        }]
    }],
    undefined,
    null ,
    31,
    13,   
    {
        counter : 23 ,
        currentObject : [
            [23], [23], ["23"], ["Hello world"]
        ]
    }
];

const textFields = document.querySelectorAll('.text_space');

let filtredArray;
function filterArr(mainArr) {
    let almostFiltredArray = mainArr.filter(function (elem) {
        return typeof elem == 'object';
    });
    
    filtredArray = almostFiltredArray.filter(function (elem) {
        return !_.isNull(elem);
    });
}

filterArr(arr);

let sumAllCurrentObjNumber;
function checkCurrentObject(filterArr) {
    let currentObjectInObject = filterArr.filter(function (elem) {
        if (!_.isArray(elem)) {
            currentObj = _.get(elem, 'currentObject');
            return currentObj;
        }
    });
    
    currentObjectInObject.filter(function (elem) {
        for (let key in elem) {
            let value = elem[key];
            arrayWithcurrentObjectValue = [];
            if (Array.isArray(value)) {
                arrayWithcurrentObjectValue = [...arrayWithcurrentObjectValue, value];
            }
        }
        return arrayWithcurrentObjectValue;
    });
    
    arrayWithcurrentObjectValue.forEach(function (elem) {
        elem.forEach(function (item) {
            arrayWithcurrentObjectValue = [...arrayWithcurrentObjectValue, item];
        });
    });
    arrayWithcurrentObjectValue.shift();
    // выровнял негра к одному уровню
    
    let currentObjValue = [];
    arrayWithcurrentObjectValue.forEach(function (elem) {
        elem.forEach(function (item) {
            currentObjValue = [...currentObjValue, item];
        });
    });
    
    let currentObjNumbers = currentObjValue.map(function (elem) {
        if (_.isNaN(+elem)) {
            helloMessage = elem;
        } else {
            elem = parseInt(elem);
        }
        return elem;
    });
    _.pull(currentObjNumbers, helloMessage);
    
    const initialValue = 0;
    sumAllCurrentObjNumber = currentObjNumbers.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue;
    }, initialValue);
}

checkCurrentObject(filtredArray);

let fields;
function getFieldsFromArr(filterArr) {
    let arrayWithFields = filtredArray.filter(function (elem) {
        if (_.isArray(elem)) {
            return elem;
        }
    });
    
    arrayWithFields.forEach(function (elem) {
        elem.forEach(function (item) {
            arrayWithFields = [...arrayWithFields, item];
        });
    });
    arrayWithFields.shift();
    
    fields = arrayWithFields.filter(function (elem) {
        if (_.isObject(elem)) {
            return elem;
        }
    });

    return fields;
}

getFieldsFromArr(filtredArray);

let requiredValue;
let addedNumber = [];
function checkObjOnRequired(obj) {
    Object.keys(obj).forEach(function (key) {
        let value = obj[key];
        if (_.isNumber(value)) {
            addedNumber = [...addedNumber, value];
        }
        if (key === 'required') {
            requiredValue = value;
        } else {
            checkObjOnRequired(value);
        }
    });
    return requiredValue;
}

function checkArrayOnNumber(arr) {
    arrayWithNumberInArr = [];
    arr.forEach(function (elem) {
        if (_.isNumber(elem)) {
            arrayWithNumberInArr = [...arrayWithNumberInArr, elem];
        } else if (_.isArray(elem)) {
            arrayWithNumberInArr = [...arrayWithNumberInArr, checkArrayOnNumber(elem)];
        } else if (_.isObject(elem)) {
            arrayWithNumberInArr = [...arrayWithNumberInArr, checkObjOnNumber(elem)];
        }
    });
    return arrayWithNumberInArr;
}

function checkObjOnNumber(obj) {
    arrayWithNumberInObj = [];
    Object.keys(obj).forEach(function (key) {
        let value = obj[key];
        if (_.isNumber(value)) {
            arrayWithNumberInObj = [...arrayWithNumberInObj, value];
        } else if (_.isArray(value)) {
            arrayWithNumberInObj = [...arrayWithNumberInObj, checkArrayOnNumber(value)];
        } else if (_.isObject(value)) {
            arrayWithNumberInObj = [...arrayWithNumberInObj, checkObjOnNumber(value)];
        }
    });
    return arrayWithNumberInObj;
}

let allNumberObjArray = [];
arr.forEach(function (elem) {
    if (_.isNumber(elem)) {
        allNumberObjArray = [...allNumberObjArray, elem];
    } else if (_.isArray(elem)) {
        allNumberObjArray = [...allNumberObjArray, checkArrayOnNumber(elem)];
    } else if (_.isObject(elem)) {
        allNumberObjArray = [...allNumberObjArray, checkObjOnNumber(elem)];
    }
});

function deleteUsedArray(arr) {
    arr.forEach(function (elem, index) {
        if (_.isArray(elem)) {
            arr.splice(index, 1);
        }
    });
}

function copyNumberInMainArray(arr) {
    arr.forEach(function (elem) {
        if (_.isArray(elem)) {
            elem.forEach(function (item) {
                allNumberObjArray = [...allNumberObjArray, item];
                if (_.isArray(item)) {
                    copyNumberInMainArray(item);
                }
            });
        }
    });
    deleteUsedArray(allNumberObjArray);
}

copyNumberInMainArray(allNumberObjArray);

function addNumberOfFieldToNumberOfArr(arrWithMainNumber, arrWithAddNumber) {
    let arrayWithAddedNumberArray = {};
    arrWithAddNumber.forEach(function (elem) {
        const numberForAdd = elem;
        
        const addNumberArray = arrWithMainNumber.map((num) => num + numberForAdd);
        addNumberArray.sort(function (a, b) {
            return a-b;
        });
        arrayWithAddedNumberArray[numberForAdd] = addNumberArray;
    });
    return arrayWithAddedNumberArray;
}

function printAllToLogTask1() {
    console.log('filtredArray', filtredArray);
    console.log('task 1.1', 'requiredValue', checkObjOnRequired(fields));
    console.log('task 1.2', helloMessage);
    console.log('task 1.3', sumAllCurrentObjNumber);
    console.log('task 1.4');
    console.log('DefaultNumberArray', allNumberObjArray);
    console.log('AddedNumberArray', addNumberOfFieldToNumberOfArr(allNumberObjArray, addedNumber));
}

printAllToLogTask1();

// task 2
console.log('%c Task 2', 'color: yellow; font-size: 1.5rem;');

const arrOfNums = [ [23 , 32 ,15 , 18] , [13 ,31 ,23 ,32 ] , ["Hello world"] , 23 ];

function kekArrayManipulation(mainArr) {
    const kek = mainArr.slice(0, 2);
    
    const kekValue = _.flatten(kek);
    
    const uniqKekValue = _.uniq(kekValue);
    
    const uniqKekValueCopyOne = _.uniq(kekValue);
    const uniqKekValueAscending = uniqKekValueCopyOne.sort();
    
    const uniqKekValueCopyTwo = _.uniq(kekValue);
    const uniqKekValueDescending = uniqKekValueCopyTwo.sort(function (a, b) {
        return b - a;
    });
    
    let arrayWithNewNumber = uniqKekValue;
    arrayWithNewNumber = [-13, ...arrayWithNewNumber, -23];
    
    // const arrayWithNewNumber = uniqKekValue;
    // arrayWithNewNumber.unshift(-13);
    // arrayWithNewNumber.push(-23);
    
    const arrayWithNegativeNumber = arrayWithNewNumber.filter(function (number) {
        return number < 0;
    });
    
    const arrayWithoutNegativeNumber = arrayWithNewNumber.filter(function (number) {
        return number > 0;
    });

    function printAllToLogTask2() {
        console.log('arrOfNums', arrOfNums);
        console.log('kek', kek);
        console.log('kekValue', kekValue);
        console.log('uniqKekValue', uniqKekValue);
        console.log('uniqKekValueAscending', uniqKekValueAscending);
        console.log('uniqKekValueDescending', uniqKekValueDescending);
        console.log('arrayWithNewNumber', arrayWithNewNumber);
        console.log('arrayWithNegativeNumber', arrayWithNegativeNumber);
        console.log('arrayWithoutNegativeNumber', arrayWithoutNegativeNumber);
    }

    printAllToLogTask2();
}

kekArrayManipulation(arrOfNums);