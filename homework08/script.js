for (let i = 1; i <= 10; i++) {
  let r = "";
  for (let j = 1; j <=10; j++) {
    if (j>i) {
      r += (i*j) + "\t"
    }
    else {
      r += "\t"
    }
  }
  console.log(r);
}