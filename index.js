// #### **=== GIT ===**
// 1. Клонируем репозиторий с помощью команды git clone git@example.com:example/test.git.
// 2. После клонирования нужно перейти в папку test с помощью команды cd test.
// 3. В папке test выполняем действия которые нам нужны.
// 4. Командой git add . добавляем все наши изменения в репозиторий, командой git commit -m "Указываем изменения которые сделали".
// 5. Командой git push origin master отправляем изменения на удаленный сервер в ветку master.
// END #### **=== GIT ===**

//  ============================= TASK 1
// Обьявляение функции deepEqual с двумя параметрами obj1 и obj2
const deepEqual = (obj1, obj2) => {
  // Переменная в которой обьекты приводятся к строке и сравниваются между собой
  const equal = JSON.stringify(obj1) === JSON.stringify(obj2);

  // Выводим результат в консоль (true или false)
  // console.log(equal);
};

// Вызов функции deepEqual с двумя аргументами
deepEqual({ name: "test" }, { name: "test" });
//  ============================= END TASK 1

//  ============================= TASK 2
// Обьявление функции генертора chunkArray которая принимает параметры array и chunkSize
function* chunkArray(array, chunkSize) {
  // Определяем переменную откуда начинается итерация по массиву
  let index = 0;

  // Используем цикл while для разбития массива на части chunkSize с помощью метода slice
  while (index < array.length) {
    // Используем оператор yield для возврата каждой части массива как значения итератора
    yield array.slice(index, index + chunkSize);

    // На каждой итерации увеличиваем значение index что бы следующая итерация начиналась со следующей части массива
    index += chunkSize;
  }
}
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
//  ============================= END TASK 2

// TASK 3
// Определяем функцию bulkRun которая принимает параметр functions (Массив функций и их аргументов)
function bulkRun(functions) {
  // Создаем новый массив promises и используем метод map для итерации по елементам массива functions. Элементы functions это массивы в котором первый элемент fn это функция а второй элемент args это массив аргументов
  const promises = functions.map(([fn, args]) => {
    // Создаем промис и передаем в него функцию которая принимает один параметр resolve, это функция которая будет вызыватся что бы завершить промис и передать ему результат выполнения функции.
    return new Promise((resolve) => {
      // Вызываэм функцию fn аргументами передавая ей параметры из массива args и функцию обратного вызова (result) => {} которая будет вызыватся функцией fn для передачи результата выполнения. Когда функция fn вызывает функцию обратного вызова с результатом выполнения, мы используем resolve для завершения промиса и передачи ему этого результата.
      fn(...args, (result) => resolve(result));
    });
  });

  // Возвращаем промис который ожидает выполнение всех промисов в массиве promises. Этот промис возвращает массив результатов выполнения функций.
  return Promise.all(promises);
}

const f1 = (cb) => {
  cb(1);
};

const f2 = (a, cb) => {
  cb(a);
};

const f3 = (a, b, cb) => {
  setTimeout(() => cb([a, b]), 1000);
};

// bulkRun([
//   [f1, []],
//   [f2, [2]],
//   [f3, [3, 4]],
// ]).then(console.log);
// END TASK 3

//  ============================= TASK 4
var arr = [
  ["name", "developer"],
  ["age", 5],
  [
    "skills",
    [
      ["html", 4],
      ["css", 5],
      ["js", 5],
    ],
  ],
];

// Обьявляение функции arrayToObject с параметром arr
const arrayToObject = (arr) => {
  // Создание пустого обьекта куда будут ложится преобразованные массивы
  const arrToObj = {};

  for (const item of arr) {
    // Переменной key присваиваем имя ключа
    const key = item[0];

    // Переменной key присваиваем значение ключа
    const value = item[1];

    // Если значение является массивом, вызываем рекурсивно эту же функцию
    if (Array.isArray(value)) {
      // Создание ключа [key] значением которого является массив и повторный вызов функции для преобразования массива в обьект
      arrToObj[key] = arrayToObject(value);
    } else {
      // Создание ключей [key] в обьекте obj и присваивание им значение value
      arrToObj[key] = value;
    }
  }
  // Возвращаем заполненый обьект из функции
  return arrToObj;
};

// Результат выполнения функции arrayToObject помещаем в переменную newObj
const newObj = arrayToObject(arr);
// Выводим готовый результат в консоль
// console.log(newObj);
//  ============================= END TASK 4

//  ============================= TASK 5
const objToArr = {
  // Применяем spread оператор что бы скопировать обьект из предидущей задачи.
  ...newObj,

  // Обьявляем метод objectToArray
  objectToArray() {
    const arr = [];
    // Запускаем итерацию по обьектам
    for (const key in this) {
      // Если тип значения ключа обьект, преобразуем это значение в массив методом Object.entries
      if (typeof this[key] === "object") {
        arr.push([key, Object.entries(this[key])]);
        // Если тип ключа не равен function добавляем его в массив, нужно для того что бы метод objectToArray не попадал в возвращаемый массив
      } else if (typeof this[key] !== "function") {
        // В противном случае просто пеобразуем пару ключ значение полученые из итерации в массив
        arr.push([key, this[key]]);
      }
    }
    // Возвращаем заполненый массив из функции
    return arr;
  },
};
// В переменной newArr присваиваем результат работы метода objectToArray обьекта objToArr.
const newArr = objToArr.objectToArray();
// console.log(newArr);
//  ============================= END TASK 5

//  ============================= TASK 6
function NotificationException() {
  return "notification";
}
function ErrorException() {}

function primitiveMultiply(a, b) {
  const rand = Math.random();

  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}

// Обьявляем функцию reliableMultiply которая принимает два параметра a,b
function reliableMultiply(a, b) {
  // Работу функции оборачиваем в блок (try, catch) что бы иметь возможность отловить тип исключения
  try {
    // Возвращаем вызов функции primitiveMultiply
    return primitiveMultiply(a, b);
  } catch (error) {
    // Делаем проверку по типу исключения, если тип исключения NotificationException продолжаем вычисление
    if (error instanceof NotificationException) {
      console.log("Сontinue the calculation");
      return primitiveMultiply(a, b);
      // В любом другом случае останавливаем вычисление
    } else {
      throw new Error("Calculation stopped");
    }
  }
}
// console.log(reliableMultiply(8, 8));
//  ============================= END TASK 6

//  ============================= TASK 7
const obj = {
  a: {
    b: {
      c: 12,
      d: "Hello World",
    },
    e: [1, 2, 3],
  },
};

// Обьявление функции mapObject которая принимает параметры obj - обьект для преобразования, parentKey - строка которая представляет родительский ключ
const mapObject = (obj, parentKey = "") => {
  // Пустой обьект который будет содержать результат преобразования
  let result = {};

  // Цикл for in итерируется по всем ключам обьекта
  for (const key in obj) {
    // Проверка ключей обьекта на то что их значения являются обьектами а не массивами
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      // Рекурсивно вызываем функцию mapObject переавая текущий вложенный обьект obj[key] и обновляем parentKey добавляя текущий ключ + key и + /, нужно для построения нового parentkey для вложенных обьектов
      const innerObject = mapObject(obj[key], parentKey + key + "/");
      // Обьеденяем результат innerObject с обьектом result с помощью spread оператора для обьединения ключей и значений из вложенного обьекта innerObject с обьектом result
      result = { ...result, ...innerObject };
      // Если значение ключа key не является обьектом или же является массивом входим в этот блок кода
    } else {
      // Добавление елемента в обьект result с ключом который состоит из parentKey + key и сприсваиваем ему значение obj[key], это нужно для сохранение ключей и значений из обьекта obj
      result[parentKey + key] = obj[key];
    }
  }
  // возвращаем обьект result который содержит преобразованные ключи и значения из обьекта obj
  return result;
};

// Выводим результат работы функции mapObject в консоль
// console.log(mapObject(obj));

//  ============================= END TASK 7

// ============================= TASK 8
// Обьявление функции combos которая принимает один параметр number
const combos = (number) => {
  // Массив который будет хранить найденные комбинации
  const result = [];

  // Обьявление функции findCombos которая используется для рекурсивного поиска комбинаций, принимает три параметра (remaining - остаточная сумма которая должна разделится на комбинации), (currentCombo - текущая комбинация цисел которая формируется), (start с этого значения начинается итерация для добаления чисел к текущей комбинации)
  const findCombos = (remaining, currentCombo, start) => {
    // Условие если remaining будет 0 это означает что комбинация чисел собрана сумма которых равна number
    if (remaining === 0) {
      // если сумма чисел в текущей комбинации равна number создаем копию комбинации и добавляем ее в масив result.
      result.push([...currentCombo]);
      // после добавления комбинации завершаем выполнение текущего вызова функции.
      return;
    }
    // Цикл будет итерироваться по всем числам для добавления к текущей комбинации, начало со start и до remaining
    for (let i = start; i <= remaining; i += 1) {
      //  Добавляем текущее число i к комбинации currentCombo
      currentCombo.push(i);
      // Рекурсивно вызываем findCombos с новыми параметрами (remaining - i, уменьшается remaining на i для учета выбранног числа), (currentCombo - передаем текущую комбинацию), (i - используется в качестве стартового значения)
      findCombos(remaining - i, currentCombo, i);

      // После рекурсивного вызова удаляем последний елемент из комбинации для возврата к предидущему состоянию для поиска других комбинаций.
      currentCombo.pop();
    }
  };
  // Вызывает функцию findCombos с параметрами number, [] пустой массив начальная комбинация, 1 число скоторого начинается итерация
  findCombos(number, [], 1);
  // Возвращаем массив result который содержит найденные комбинации сума которых равна number
  return result;
};

// Выводим в консоль результат работы функции combos
// console.log(combos(3));
// console.log(combos(10));
// ============================= END TASK 8

// ============================= TASK 9
// Обьявляем функцию add с параметром currentNumber
const add = (currentNumber) => {
  // Обьявляем функцию innerAdd которая принимает один параметр nextNumber, функция возвращает вызов функции с аргументами (currentNumber + nextNumber)
  const innerAdd = (nextNumber) => add(currentNumber + nextNumber);

  //С помощью метода valueIf преобразовываем функцию innerAdd в число это позволяет использовать конструкцию Number(innerAdd) чтобы получить результат сложения хранящийся в currentNumber
  innerAdd.valueOf = () => currentNumber;

  // возвращаем созданную функцию innerAdd
  return innerAdd;
};
// console.log(Number(add(1)(2)(19)));
//  ============================= END TASK 9
