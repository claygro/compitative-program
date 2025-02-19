function seen(n) {
  let p1 = 1;
  let p2 = 0;
  for (let i = 3; i <= n; i++) {
    let current = p1 + p2;
    p2 = p1;
    p1 = current;
  }
  return p1;
}

console.log(seen(5));
