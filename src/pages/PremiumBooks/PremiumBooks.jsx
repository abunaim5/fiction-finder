import { useLoaderData } from "react-router-dom";
import PremiumBookCard from "../../components/PremiumBookCard/PremiumBookCard";

const PremiumBooks = () => {
    const premiumBooks = useLoaderData();
    console.log(premiumBooks)

    return (
        <div className="my-24">
            <h2 className="text-[40px] text-[#131313] font-bold text-center mb-9">Premium Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    premiumBooks.map(premiumBook=> <PremiumBookCard key={premiumBook.bookId} premiumBook={premiumBook}></PremiumBookCard>)
                }
            </div>
        </div>
    );
};

export default PremiumBooks;