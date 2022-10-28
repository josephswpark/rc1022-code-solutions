var arrayOfBooks = [
  {
    title: 'Of Mice and Men',
    isbn: ' 978-0140177398',
    author: 'John Steinbeck '
  },
  {
    title: '1984',
    isbn: '978-0451524935',
    author: 'George Orwell '
  },
  {
    title: 'To Kill a Mockingbird',
    isbn: '978-0446310789',
    author: 'Harper Lee'
  }
];

console.log('array of books:', arrayOfBooks);
console.log('typeof:', typeof arrayOfBooks);
console.log('string of books array:', JSON.stringify(arrayOfBooks));
console.log('typeof:', typeof JSON.stringify(arrayOfBooks));

var student = '{ "Number": 3, "name": "Joseph Park" }';

console.log('my json string:', JSON.stringify(student));
console.log('typeof:', typeof JSON.stringify(student));
var parseObject = JSON.parse(student);

console.log('json parsed number:', parseObject.Number);
console.log('json parsed name:', parseObject.name);
console.log('typeof:', typeof parseObject);
