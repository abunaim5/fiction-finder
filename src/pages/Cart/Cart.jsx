import { useLoaderData } from "react-router-dom";
import { handleGetBooksIdInLocal } from "../../utils/localBooks/localBooks";
import CartCard from "../../components/CartCard/CartCard";

const Cart = () => {
    const premiumBooks = useLoaderData();
    const cartIdList = handleGetBooksIdInLocal('cart');


    return (
        <div className="mt-8 mb-40 space-y-6">
            {
                premiumBooks.map(premiumBook => {
                    const findBookInLocal = cartIdList.find(id => id === premiumBook.bookId);
                    if (findBookInLocal) {
                    return <CartCard key={premiumBook.bookId} premiumBook={premiumBook} ></CartCard>
                   }
                  })
            }
        </div>
    );
};

export default Cart;