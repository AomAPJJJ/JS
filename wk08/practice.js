let bookInventory = [];

// เพิ่มหนังสือ
const addBook = (bookTitle) => bookInventory.push(bookTitle);

// ลบหนังสือล่าสุด
const removeBook = () => {
    if (bookInventory.length > 0) {
        bookInventory.pop();
    }
};

// แสดงรายการหนังสือทั้งหมด
const viewBooks = () => bookInventory;

// ตัวอย่างการใช้งาน
addBook("Harry Potter and the Sorcerer's Stone");
addBook("To Kill a Mockingbird");

console.log("รายการหนังสือทั้งหมด:", viewBooks());

removeBook();
console.log("รายการหนังสือหลังลบ:", viewBooks());