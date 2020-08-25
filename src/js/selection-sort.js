export const selectionSort = (list) => {
    const arr = [...list];
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
};
