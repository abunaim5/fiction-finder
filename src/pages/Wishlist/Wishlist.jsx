import CategoryListCard from "../../components/CategoryListCard/CategoryListCard";
import { useLoaderData } from "react-router-dom";
import { handleGetBooksIdInLocal } from "../../utils/localBooks/localBooks";

const wishlistIdList = handleGetBooksIdInLocal('wishlist');

const Wishlist = () => {
    const books = useLoaderData();

    return (
        <div className="mt-8 mb-40 space-y-6">
            {
                books.map(book => {
                    const findBookInLocal = wishlistIdList.find(id => id === book.bookId);
                    if (findBookInLocal) {
                        return <CategoryListCard key={book.bookId} book={book} ></CategoryListCard>
                    }
                })
            }
        </div>
    );
};

export default Wishlist;