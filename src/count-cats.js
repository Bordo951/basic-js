module.exports = function countCats(matrix) {
    let catsAmount = 0,
        matrixArray = Array.prototype.concat.apply([], matrix);

        for (let i = 0; i < matrixArray.length; i++) {
            if (matrixArray[i] === '^^') {
                catsAmount++;
            }
        }

    return catsAmount;
};
