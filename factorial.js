let fac = 1;
function seen(n) {
  for (let i = n; i >= 1; i--) {
    fac = fac * n;
  }
  return fac;
}
console.log(seen(25));
