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

function printAllTOLog() {
    console.log('filtredArray', filtredArray);
    console.log('task 1.1', 'requiredValue', checkObjOnRequired(fields));
    console.log('task 1.2', helloMessage);
    console.log('task 1.3', sumAllCurrentObjNumber);
    console.log('task 1.4');
    console.log('DefaultNumberArray', allNumberObjArray);
    console.log('AddedNumberArray', addNumberOfFieldToNumberOfArr(allNumberObjArray, addedNumber));
}

printAllTOLog();

// 2)
// const arrOfNums = [ [23 , 32 ,15 , 18] , [13 ,31 ,23 ,32 ] , [“Hello world”] , 23 ];

// 2.1) Вырезать arrOfNums первый(0) и второй(1) элемент из массива и сформировать из них новы массив , например : kek
// 2.2) В массиве kek -> не должно быть одинаковых чисел , можно создать новый массив .
// 2.3) Массив отсортирован в порядке возраст.
// 2.4) Массив отсортирован в порядке уб.
// 2.5) Добавить в массив -23 в конец массива и -13 в начало .
// 2.5.1) Вывести в консоль массив с отри. числами.
// 2.6) По итогу : вывести массив у которого нет отриц. чисел .