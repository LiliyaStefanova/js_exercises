const arrays = [[1,4], [11], [3, 5, 7]];

const sum = arrays.reduce((sum, subArray) => sum + subArray.reduce((subSum, number) => subSum + number, 0),0);

console.log(sum);