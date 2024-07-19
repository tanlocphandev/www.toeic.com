import { unstable_usePrompt } from "react-router-dom";

const usePromptLeaveRoute = ({ message = "Bạn có chắc chắn muốn thoát không?", when }) => {
    unstable_usePrompt({
        when,
        message,
    });
};

export default usePromptLeaveRoute;
