function insertSort(array) {
  var length = array.length
  for (let i = 1; i < length; i++) {
    // 当前需要排序的元素，第一个元素默认已排序
    temp = array[i];
    // j就是已排序的队列长度
    for (let j = i; j >= 0; j--) {
    // 取已排序队列的最后一个元素与temp比较
      if (array[j - 1] > temp) {
        // 如果最后一个元素比temp大，则把这最后一个元素向后移一位
        array[j] = array[j - 1];
      } else {
        // 如果最后一个元素比temp小，则把temp放到已排序队列的末尾
        array[j] = temp;
        break;
      }
    }
  }
  return array;
}
insertSort([1,3,4,5,2,6])