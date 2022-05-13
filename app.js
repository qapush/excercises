function SeriesSum(n)
{
  // Happy Coding ^_^
  
  let result = 0;

  if (n == 0) {
    return result.toFixed(2)
  } else if (n == 1) {
    result = 1;
    return result.toFixed(2)
  }

  result = 1;

  for (let x = 4, y = 2; y <= n; y++, x += 3){
    result += (1 / x);
  }

  return result.toFixed(2);

}

console.log(SeriesSum(0))
console.log(SeriesSum(1))
console.log(SeriesSum(2))
console.log(SeriesSum(3))
// SeriesSum(3)


// Test.assertEquals(SeriesSum(1), "1.00")
// Test.assertEquals(SeriesSum(2), "1.25")
// Test.assertEquals(SeriesSum(3), "1.39")
// Test.assertEquals(SeriesSum(4), "1.49")
