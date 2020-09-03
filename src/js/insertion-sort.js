export const insertionSort = (list) => {
    const arr = [...list];
    const length = arr.length;

    for (let i = 1; i < length; i++) {
        const num = arr[i];

        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > num) {
                arr[j + 1] = arr[j];
                arr[j] = num;
            }
        }
    }

    return arr;
};
