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

let almostFiltredArray = arr.filter(function (elem) {
    return typeof elem == 'object';
});

let filtredArray = almostFiltredArray.filter(function (elem) {
    return !_.isNull(elem);
});

let currentObjectInObject = filtredArray.filter(function (elem) {
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
let sumAllCurrentObjNumber = currentObjNumbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
}, initialValue);

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

let fields = arrayWithFields.filter(function (elem) {
    if (_.isObject(elem)) {
        return elem;
    }
});

let requiredValue;
function checkObjOnRequired(obj) {
    Object.keys(obj).forEach(function (key) {
        let value = obj[key];
        if (key === 'required') {
            requiredValue = value;
        } else {
            checkObjOnRequired(value);
        }
    });
    return requiredValue;
}

console.log('almostFiltredArray', almostFiltredArray);
console.log('filtredArray', filtredArray);
console.log('currentObjectInObject', currentObjectInObject);
console.log('arrayWithcurrentObjectValue', arrayWithcurrentObjectValue);
console.log('currentObjValue', currentObjValue);
console.log('task 1.2', helloMessage);
console.log('currentObjNumbers', currentObjNumbers);
console.log('task 1.3', sumAllCurrentObjNumber);
console.log('arrayWithFields', arrayWithFields);
console.log('fields', fields);
console.log('task 1.1', 'requiredValue', checkObjOnRequired(fields));


//* 1.1) Вывести в консоль свойство required .
//* 1.2) Получить “Hello world” из currentObject .
//* 1.3) Сложить все значения которые можно в currentObject
// 1.4) Написать функцию которая будет 23 из fields добавлять ко всем числам что лежат в массиве arr .

// 2)
// const arrOfNums = [ [23 , 32 ,15 , 18] , [13 ,31 ,23 ,32 ] , [“Hello world”] , 23 ]

// 2.1) Вырезать arrOfNums первый(0) и второй(1) элемент из массива и сформировать из них новы массив , например : kek
// 2.2) В массиве kek -> не должно быть одинаковых чисел , можно создать новый массив .
// 2.3) Массив отсортирован в порядке возраст.
// 2.4) Массив отсортирован в порядке уб.
// 2.5) Добавить в массив -23 в конец массива и -13 в начало .
// 2.5.1) Вывести в консоль массив с отри. числами.
// 2.6) По итогу : вывести массив у которого нет отриц. чисел .