import router from "@/routes/route";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

function App() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return <RouterProvider router={router} />;
}

export default App;
