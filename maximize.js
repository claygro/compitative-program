function seen(prices) {
  let minprice = Infinity;
  let maxprofit = 0;

  for (let price of prices) {
    if (price < minprice) {
      minprice = price;
    } else if (price - minprice > maxprofit) {
      maxprofit = price - minprice;
    }
  }
  return maxprofit;
}

console.log(seen([4, 3, 2, 1, 7]));
