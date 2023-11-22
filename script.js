console.log(numToDegree(5, 3));

function numToDegree(num, degree) {
  if (degree === 0) {
    return 1;
  } else {
    return num * numToDegree(num, --degree);
  }
}
