import Container from "@/components/shared/Container";
import SkillContent from "./components/SkillContent";
import Slider from "./components/Slider";
import Introduce from "./components/Introduce";
import { FaRegQuestionCircle } from "react-icons/fa";


const HomePage = () => {
  return (
    <>
      <Slider />
      <Container title={"Toeic"}>
        <Introduce />

        <SkillContent />

        <div className="text-center mb-20">
          <button className="relative bg-green-600 text-white py-4 px-6 rounded-2xl shadow-lg hover:shadow-xl active:translate-y-1 active:shadow-none transition-all">
            Học ngay thôi nào
          </button>
        </div>

        <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-5 bg-[#cfe2ff] border rounded-lg p-5 ">
          <div className="flex gap-2 items-center justify-center">
            <img src="https://www.dungplus.com/wp-content/uploads/2019/07/4-ki-nang.jpg" alt="" loading="lazy" className="w-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="flex flex-col shadow-lg bg-white items-center justify-center">
              <div className="text-center flex items-center justify-center flex-col p-2">
                <FaRegQuestionCircle className="h-10 w-10" />
                <h5 className=" font-400 text-2xl">Ngân hàng đề thi</h5>
                <p >
                  Ngân hàng đề thi đa dạng với nhiều chủ đề khác nhau sẽ giúp bạn chuẩn bị tốt nhất cho kỳ thi của mình
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 shadow-lg bg-white items-center justify-center">
              <div className="text-center flex items-center justify-center flex-col p-2">
                <FaRegQuestionCircle className="h-10 w-10" />
                <h5 className=" font-400 text-2xl" >Mô phỏng bài thi thật</h5>
                <p >
                  Các bài thi thử có cấu trúc giống như bài thi thật sẽ giúp bạn vượt qua kỳ thi một cách thành công
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 shadow-lg bg-white items-center justify-center">
              <div className="text-center flex items-center justify-center flex-col p-2">
                <FaRegQuestionCircle className="h-10 w-10" />
                <h5 className=" font-400 text-2xl" >Không cần đăng nhập hoặc đăng ký</h5>
                <p>
                  Không cần đăng nhập hoặc đăng ký, tiến trình học tập của bạn vẫn sẽ được lưu lại. Bạn có thể tự do luyện tập các câu hỏi với các mức độ khác nhau
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 shadow-lg bg-white items-center justify-center">
              <div className="text-center flex items-center justify-center flex-col p-2">
                <FaRegQuestionCircle className="h-10 w-10" />
                <h5 className=" font-400 text-2xl" >Thống kê kết quả chi tiết</h5>
                <p>
                  Sau khi hoàn thành mỗi bài luyện tập, bạn có thể xem thống kê chi tiết kết quả bài làm của mình
                </p>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </>
  );
};

export default HomePage;
