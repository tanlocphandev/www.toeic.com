import Container from "@/components/shared/Container";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUp, FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <Container className="pt-12 pb-36 bg-[url('/background.webp')] bg-no-repeat bg-bottom bg-opacity-30">
                <div className="flex justify-between ">
                    <div>
                        <h3 className="text-lg font-bold mb-5">Thông Tin</h3>
                        <div>
                            <span>Liên Hệ</span>
                        </div>
                        <div>
                            <span className="mb-2 text-sm"> Thông Tin Vận Chuyển</span>
                        </div>
                        <div>
                            <span className="mb-2 text-sm">Chính Sách Riêng Tư</span>
                        </div>
                        <div>
                            <span className="mb-2 text-sm"> Điều Khoản</span>
                        </div>
                        <div>
                            <span className="mb-2 text-sm">Liên Hệ</span>
                        </div>
                        <div>
                            <span className="mb-2 text-sm">Hoàn Trả</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-5">Thông Tin Bổ Sung</h3>
                        <div>
                            <span className="mb-2 text-sm"> Bản Đồ</span>
                        </div>
                        <div>
                            <span className="mb-2 text-sm">Tài Khoản</span>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-5">Liên Hệ</h3>
                        <div>
                            <p className="mb-2 text-sm flex items-center">
                                <FaMapMarkerAlt className="mr-2" /> Địa chỉ: Hà Nội
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm flex items-center">
                                <FaPhone className="mr-2" /> Điện thoại: 0123456789
                            </p>
                        </div>
                        <div>
                            <p className="mb-2 text-sm flex items-center">
                                <MdOutlineMail className="mr-2" /> Email: toeic@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <div className="pt-5 pb-10 ">
                <div className="text-center border-b-2 pb-4 border-slate-500">
                    <p>© 2024 TOEIC. Copyright by me. All rights reserved</p>
                </div>
            </div>
            <button
                className={`scroll-to-top w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center focus:outline-none hover:bg-blue-800 transition-opacity fixed bottom-12 right-5`}
            >
                <div className="bg-white rounded-full text-black p-2">
                    <FaArrowUp className="w-6 h-6" />
                </div>
            </button>
        </footer>
    );
};

export default Footer;
