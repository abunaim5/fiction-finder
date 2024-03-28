import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { handleGetBooksIdInLocal } from '../../utils/localBooks/localBooks';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    // console.log(fill, x, y, width, height)
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const PageToRead = () => {
    // const [bookData, setBookData] = useState([])

    const books = useLoaderData();
    const readBookIds = handleGetBooksIdInLocal('read')
    const readBooks = books.filter(book => {
        const findBook = readBookIds.find(id => book.bookId === id);
        if (findBook) {
            return book;
        }
    });

    const bookData = [];

    readBooks.map(book => {
        const data = {
            name: book.bookName,
            pages: book.totalPages
        }
        bookData.push(data);

    })

    return (
        <div className='flex items-center justify-center py-12 lg:py-14 xl:py-28 pl-0 lg:pl-5 xl:pl-[84px] pr-[44px] lg:pr-16 xl:pr-32 bg-[#F3F3F3] rounded-2xl mt-9 mb-24 font-work text-[#13131380]'>
            <ResponsiveContainer width="100%" height={479}>
                <BarChart
                    
                    data={bookData}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="pages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {bookData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

TriangleBar.propTypes = {
    // fill: PropTypes.object.isRequired
}

export default PageToRead;