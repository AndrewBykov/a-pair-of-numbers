const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const res = document.querySelector('#result')

btn.addEventListener('click', answearText)

function calculate(a) {
    const num = Number(a.value)
    let sum = 0

    let arr = [1,2,3,4,5,6,7,8,9]
    let paris = []

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === num) {
                paris.push([arr[i], arr[j]])
                sum++
            }
        }
    }


    return `Пара чисел, дающих сумму ${num}. Массив ${paris.map(pair => `${pair[0]} + ${pair[1]}`).join(', ')}. Кол-во пар: ${sum}.`
    // return 'Пара числе, дающих сумму. ' + num + '\nМассив:' + res
}

function answearText() {
    const result = calculate(input)

    res.innerHTML = result
}





