import { useLoaderData } from "react-router-dom";
import CategoryListCard from "../../components/CategoryListCard/CategoryListCard";
import { handleGetBooksIdInLocal } from "../../utils/localBooks/localBooks";

const ReadBooks = () => {
    const books = useLoaderData();
    const readBookIdList = handleGetBooksIdInLocal('read');

    return (
        <div className="mt-8 mb-40 space-y-6">
            {
                books.map(book => {
                    const findBookInLocal = readBookIdList.find(id => id === book.bookId);
                    if (findBookInLocal) {
                        return <CategoryListCard key={book.bookId} book={book} ></CategoryListCard>
                    }
                })
            }
        </div>
    );
};

export default ReadBooks;