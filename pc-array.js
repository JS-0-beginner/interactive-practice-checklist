//Task(8)

console.log('');
console.log('Searched all the JS books');

const javascriptBooks = [
    'JavaScript Enlightenment',
    'Secrets of the JavaScript Ninja',
    'Eloquent',
    'JavaScript: The Good Parts',
    'The Definitive Guide',
    'JavaScript for Kids',
    'You Don’t Know JS',
    'Allongé, The “Six” Edition'
];

const names = 'javascript'
let books = [];
for(const java of javascriptBooks)
{
    //indexOf
    // if(java.toUpperCase().indexOf(names.toUpperCase()) != -1)

    //startsWith
    // if(java.toUpperCase().startsWith(names.toUpperCase()))

    //includes
    if(java.toUpperCase().includes(names.toUpperCase()))
    {
        books.push(java);
    }
}
console.log(books);

//Task(9)

//Sort-1
console.log('');
console.log('Sorted Small Numbers');

const smallNumbers = [ 4, 6, 5, 2, 1, 3, 0, 7, 9, 8 ];

const sortedSmallNumbers = smallNumbers.sort();

console.log(sortedSmallNumbers);

//Sort-2
console.log('');
console.log('Sorted Large Numbers');

const largeNumbers = [65, 45, 78, 101, 302, 56, 96, 89, 10]

const sortedLargeNumbers = largeNumbers.sort(function(a,b)
{
    return a - b;
});
console.log(sortedLargeNumbers);