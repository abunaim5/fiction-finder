import { useLoaderData } from "react-router-dom";
import CategoryListCard from "../../components/CategoryListCard/CategoryListCard";
import { handleGetBooksIdInLocal } from "../../utils/localBooks/localBooks";
import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../../Layout/Root";

// let cateName = 'all'
// const handleSort = (categoryName) =>{
//     cateName = categoryName;
// }
const readBookIdList = handleGetBooksIdInLocal('read');
const ReadBooks = () => {
    const books = useLoaderData();
    

    const [allCategory, setAllCategory] = useState([]);
    const [displayCategory, setDisplayCategory] = useState([]);

    const handleFilterCategory = filterText => {
        console.log(filterText);

        if (filterText === 'all') {
            setDisplayCategory(allCategory);
            console.log('clicked', allCategory);
        }
        else if (filterText === 'pages') {
            const categoryByPage = allCategory.sort((a, b) => b.totalPages - a.totalPages);
            setDisplayCategory(categoryByPage);
        }
        else if (filterText === 'rating') {
            const categoryByRating = allCategory.sort((a, b) => b.rating - a.rating);
            setDisplayCategory(categoryByRating);
            return;
        }
        else if (filterText === 'year') {
            const categoryByYear = allCategory.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            console.log(categoryByYear);
            setDisplayCategory(categoryByYear);
        }
        return;
    }
    const {setData} = useContext(CategoryContext)
    useEffect(() => {
        
        if (books.length > 0) {
            const allCategoryBooks = [];
            for(const id of readBookIdList){
                const book = books.find(book => book.bookId === id);
                if(book){
                    allCategoryBooks.push(book);
                }
            }
            // const allCategoryBooks = [];
            // books.map(book => {
            //     const findBookInLocal = readBookIdList.find(id => id === book.bookId);
            //     if (findBookInLocal) {
            //         allCategoryBooks.push(book);
            //     }
            // })
            setAllCategory(allCategoryBooks);
            setDisplayCategory(allCategoryBooks);
        }
        
        setData({handleFilterCategory})
    }, [books]);


    // const {setData} = useContext(CategoryContext)
    useEffect(()=>{        
        // setData({handleFilterCategory})
    },[])
    // console.log(readBookIdList);

    return (
        <div className="mt-8 mb-40 space-y-6">
            {
                displayCategory.map(book => <CategoryListCard key={book.bookId} book={book} ></CategoryListCard>)

                // books.map(book => {
                //     const findBookInLocal = readBookIdList.find(id => id === book.bookId);
                //     if (findBookInLocal && category === 'all') {
                //         return <CategoryListCard key={book.bookId} book={book} ></CategoryListCard>
                //     }
                // })
            }
        </div>
    );
};

export default ReadBooks;