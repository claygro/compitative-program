let str = "alison heck";
str = str.trim();
for (let i = 0; i < 1; i++) {
  str = str[i].toUpperCase("");
}

for (let i = 0; i < str.length; i++) {
  if (str[i] == " ") {
    str = str[i + 1].toUpperCase("");
  }
}

console.log(str);
