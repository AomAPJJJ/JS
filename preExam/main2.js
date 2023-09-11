let m = 1;

// Optional Chaining
console.log(m?.charAt(0)); // undefined (m is not a string, so charAt() is not defined)
console.log(m?.[0]);       // undefined (m is not an array or string)
console.log(m?.id);        // undefined (m has no 'id' property)

// Nullish Coalescing Operator
let n = m ?? 0; // equals to m !== null && m !== undefined ? m : 0
console.log(n); // 1 (m is not null or undefined, so n is assigned the value of m)

let y = [];  // Array initialization with an empty array
let z = {};  // Object initialization with no properties
console.log(typeof y);  // "object" (an empty array is of type "object")
console.log(typeof z);  // "object" (an empty object is of type "object")

let a = [1, 3, 5, 7];
a = a ?? y; // a = a if a is not null or undefined, otherwise a = y
console.log(a); // [1, 3, 5, 7] (a is not null or undefined, so it remains unchanged)


let str1 = 'ant';
let str2 = 'Ant';
let str3 = 'ANT';
let str4 = 'ant';

console.log(str1 === str2); // false, เพราะ 'a' !== 'A'
console.log(str1 !== str3); // true, เพราะ 'a' !== 'A'
console.log(str2 === str3); // false, เพราะ 'A' === 'A' แต่ 'n' !== 'N'
console.log(str1 === str4); // true, เพราะทุกตัวอักษรเหมือนกัน

console.log(str1 < str2); // false, เพราะ 'a' (97) ไม่น้อยกว่า 'A' (65)
console.log(str3 < str1); // true, เพราะ 'A' (65) น้อยกว่า 'a' (97)

console.log('----');

console.log(str1.includes('nt')); // true, เพราะ 'ant' มี 'nt'
console.log(str1.includes('Nt')); // false, เพราะ 'ant' ไม่มี 'Nt'
console.log(str1.toLowerCase().includes('Nt'.toLowerCase())); // true, เมื่อแปลงทั้งคู่เป็นตัวพิมพ์เล็ก
console.log(str1.toUpperCase().includes('Nt'.toUpperCase())); // true, เมื่อแปลงทั้งคู่เป็นตัวพิมพ์ใหญ่
console.log(str1.includes('ant')); // true, เพราะ 'ant' มี 'ant'
