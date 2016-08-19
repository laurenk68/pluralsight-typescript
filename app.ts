
function GetAllBooks() {
    let books = [
        { title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        {title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction }
    ];

    return books;
}

function LogFirstAvailable(books): void {

    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    for(let currentBook of books) {
        
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}

enum Category { Biography, Poetry, Fiction, History, Children };

function GetBookTitlesByCategory(categoryFilter: Category) : Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitle: string[] = [];

    for(let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitle.push(currentBook.title);
        }
    }

    return filteredTitle;
}

function LogBookTitles(titles: string[]) : void {
    for (let title of titles) {
        console.log(title);
    }
}

const poetryBooks = GetBookTitlesByCategory(Category.Poetry);
LogBookTitles(poetryBooks);