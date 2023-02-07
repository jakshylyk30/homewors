const num = [10, 20, 30, 50, 235, 3000]
const arr = []

for (let i = 0; i < num.length; i++){
    const str = num[i].toString()
    if (str[0] === '1' || str[0] === '2' || str[0] === '5'){
        arr.push(num[i])
    }
}
console.log(arr);

//2
for (let i = 20; i >= 0; i--){
    console.log(i);
}

//светофор
const obj2 = {
    red: 'STOP',
    красный: 'стоп',
    yellow: 'wait',
    желтый: 'подожди',
    green: 'Go',
    зеленый: 'летс го',
    error: 'Не верный цвет. Пожалуйста, введите "красный" "желтый" или "зеленый".'
};

const color = prompt('введите цвет светофора');
const message = obj2[color];

if (message) {
    alert(message)
} else {
    alert(trafficlight.error);
}