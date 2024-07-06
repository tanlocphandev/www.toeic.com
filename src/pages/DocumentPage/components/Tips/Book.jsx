const books = [
    {
        title: "400 Câu Crazy English – Tiếng Anh Giao Tiếp",
        sub: "Sách 400 câu Crazy English này cực kỳ hữu ích cho các bạn luyện giao tiếp nhé",
        img: "/doc/sach1.jpg",
    },
    {
        title: "400 Câu Crazy English – Tiếng Anh Giao Tiếp",
        sub: "Sách 400 câu Crazy English này cực kỳ hữu ích cho các bạn luyện giao tiếp nhé",
        img: "/doc/sach1.jpg",
    },
];

const Book = ({ docRefs }) => {
    return (
        <div
            className="bg-[url('/bg-statistical.jpg')] w-full bg-no-repeat bg-cover bg-bottom p-4 rounded-lg border border-[#34447c] flex space-y-4 flex-col"
            ref={docRefs.book}
        >
            <h3 className="text-lg text-white bg-gray-500 w-[150px] py-1 px-2">Tài liệu Sách</h3>

            {books.map((book, index) => (
                <div key={index} className="flex space-x-4 bg-white p-4 rounded-lg">
                    <div className="w-[300px] ">
                        <img src={book.img} alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl text-[#34447c] font-medium">{book.title}</h3>
                        <p className="text-gray-500 my-4">{book.sub}</p>
                        <button className="bg-[#34447c] text-white py-2 px-5 rounded-lg">
                            Đọc ngay
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Book;
