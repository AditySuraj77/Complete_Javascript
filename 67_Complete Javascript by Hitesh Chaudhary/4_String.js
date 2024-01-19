const str1 = "Hello World"
console.log(str1);
const str2 = "Hello"
const str3 = " World"
console.log(str2 + str3);

// string define by literal
let myname = 'Demon'
const lt_str = `Hello my name is ${myname} have a nice day !`
console.log(lt_str);


// Some method on string 

console.log(lt_str.toUpperCase());
console.log(lt_str.length);
console.log(lt_str.charAt(6));
console.log(lt_str.indexOf('h'));

console.log(lt_str.substring(0,5));
console.log(lt_str.slice(-1));
console.log(lt_str.slice(0,5));

// trim method use for removing white spaces

const trim_str = "   good morning        "
console.log(trim_str.trim());


// replace

const repl_str = "https://google.co.in"
console.log(repl_str.replace('.', '-'));
console.log(lt_str.split('-'));

console.log(repl_str.includes('in'));

const str6 = new String(55)
console.log(str6);