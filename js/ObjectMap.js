let type = 1
// if(count == 1 ) {
//     console.log('width')
// } else if (count == 2) {
//     console.log('height')
// } else if (count == 3) {
//     console.log('age')
// } else {
//     console.log('all')
// }

let caseList = {
    1: 'width',
    2: 'height',
    3: 'age',
    default: 'all'
}

let result = type && (caseList[type] || caseList['default'])
console.log(result)