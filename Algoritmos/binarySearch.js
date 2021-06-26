const binarySearch = (target, array, start, end) => {
    if (end >= start) {
        let mid = Math.trunc(start + (end - start) / 2);
        if (array[mid] == target) {
            return mid;
        } else if (array[mid] < target) {
            return binarySearch(target, array, mid + 1, end);
        } else {
            return binarySearch(target, array, start, mid - 1)
        }
    }
    return -1
}

let array = [1, 2, 3, 4, 6, 7, 8, 9]
let target = 6
let result = binarySearch(target, array, 0, array.length);

if (result == -1) {
    console.log('El elemento no se encuentra')
} else {
    console.log(`El elemento se encuentra en la posicion ${result}`)
}