// 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping,
// dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash"
// dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut,
// cetak menggunakan console log atau sejenisnya.

const fishBashFunction = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let strLog = '';
    if (i % 3 === 0) {
      strLog += 'fish';
    }
    if (i % 5 === 0) {
      strLog += strLog ? ' bash' : 'bash';
    }
    console.log(strLog);
    arr.push(strLog);
  }
  return arr;
};

// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar
// dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
const sortNumber = (arrNumber, direction, left = 0, right = arrNumber.length - 1) => {
  if (left < right) {
    const pivot = createPivot(arrNumber, direction, left);
    //   Sorting left side of pivot
    sortNumber(arrNumber, direction, left, pivot - 1);
    //   Sorting right side of pivot
    sortNumber(arrNumber, direction, pivot + 1, right);
  }
  return arrNumber;
};

function createPivot(arr, direction, start = 0) {
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  const pivot = arr[start];
  let swapIndex = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (direction === 'desc') {
      if (pivot < arr[i]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    } else {
      if (pivot > arr[i]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string
// yang diinputkan maka return true jika tidak return false
const reverseString = (str) => {
  return str.split('').reverse().join('');
};

module.exports = { fishBashFunction, sortNumber, reverseString };
