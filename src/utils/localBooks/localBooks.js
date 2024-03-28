import { toast } from "react-toastify";

const handleGetBooksIdInLocal = (listName) => {
    const bookIdListStr = localStorage.getItem(listName);
    if (bookIdListStr) {
        const bookListParse = JSON.parse(bookIdListStr);
        return bookListParse;
    }
    return [];
}

const handleSetBooksIdInLocal = (listName, id) => {
    const bookIdList = handleGetBooksIdInLocal(listName);
    const isExist = bookIdList.find(bookId => bookId === id);
    if (!isExist) {
        const newBookIdList = [...bookIdList, id];
        const newBookListStr = JSON.stringify(newBookIdList);
        localStorage.setItem(listName, newBookListStr);
        if (listName === 'read') {
            toast.success('Book added to read');
            return;
        }
        else if (listName === 'wishlist') {
            toast.success('Book added to wishlist');
            return;
        }
        else if (listName === 'cart'){
            toast.success('Successfully add to cart');
            return;
        }
        return;
    }
    else {
        toast.warn('Already added this book');
        return;
    }
}

const handleRemoveBooksIdInLocal = (listName, id) => {
    const bookIdList = handleGetBooksIdInLocal(listName);
    const newBookIdList = bookIdList.filter(bookId => bookId !== id);
    const newBookListStr = JSON.stringify(newBookIdList);
    localStorage.setItem(listName, newBookListStr);
}

export { handleGetBooksIdInLocal, handleSetBooksIdInLocal, handleRemoveBooksIdInLocal };