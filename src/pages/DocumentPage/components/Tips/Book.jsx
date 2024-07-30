import { memo } from "react";
import { Link } from "react-router-dom";

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

const Book = ({ docRefs, data = [] }) => {
    return (
        <div
            className="bg-[url('/bg-statistical.jpg')] w-full bg-no-repeat bg-cover bg-bottom p-4 rounded-lg border border-[#34447c] flex space-y-4 flex-col"
            ref={docRefs.book}
        >
            <h3 className="text-lg text-white bg-gray-500 w-[150px] py-1 px-2">Tài liệu Sách</h3>

            {data.map((book, index) => (
                <div key={index} className="flex space-x-4 bg-white p-4 rounded-lg">
                    <div className="w-[300px]">
                        <img
                            src={book.doc_thumbnail?.url}
                            // src={"/doc/sach1.jpg"}
                            alt=""
                            className="h-[145px] w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl text-[#34447c] font-medium">{book.doc_title}</h3>

                        <p className="text-gray-500 my-4">{book.doc_desc}</p>

                        <Link
                            to={book.doc_link || `/documents/${book.doc_id}`}
                            className="bg-[#34447c] text-white py-2 px-5 rounded-lg"
                            target={book.doc_link ? "_blank" : "_self"}
                        >
                            Đọc ngay
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

Book.displayName = "Book";

export default memo(Book);
