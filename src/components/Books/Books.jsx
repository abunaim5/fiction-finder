import { useLoaderData } from "react-router-dom";
import BookCard from "../BookCard/BookCard";

const Books = () => {
    const books = useLoaderData();

    return (
        <div className="my-24">
            <h2 className="text-[40px] text-[#131313] font-bold text-center">Books</h2>
            <div className="grid grid-cols-3 gap-6">
                {
                    books.map(book=> <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;