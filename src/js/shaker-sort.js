export const shakerSort = (list) => {
    const arr = [...list];
    const length = arr.length;

    let reverseCount = 0;
    for (let i = length - 1; i > 0; i--) {
        for (let j = reverseCount; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }

        for (let j = i - 1; j > reverseCount; j--) {
            if (arr[j] < arr[j - 1]) {
                const temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
            }
        }
        reverseCount++;
    }

    return arr;
};
