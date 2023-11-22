console.log(numToDegree(2, 3));

function numToDegree(num, degree) {
  degree--;
  num = num * num;

  if (degree > 1) {
    numToDegree(num, degree);
  }

  return num;
}
