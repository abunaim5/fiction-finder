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
    }
    return;
}

const handleRemoveBooksIdInLocal = (listName, id) => {
    const bookIdList = handleGetBooksIdInLocal(listName);
    const newBookIdList = bookIdList.filter(bookId => bookId !== id);
    const newBookListStr = JSON.stringify(newBookIdList);
    localStorage.setItem(listName, newBookListStr);
}

export { handleGetBooksIdInLocal, handleSetBooksIdInLocal, handleRemoveBooksIdInLocal };