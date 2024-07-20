import { Toaster } from "@/components/ui/sonner";
import Spinner from "@/components/ui/spinner";
import { QUERY_KEYS } from "@/constants";
import { authActions, useAuthSlice } from "@/redux/slices/auth.slice";
import AuthService from "@/services/auth.service";
import { useIsFetching, useIsMutating, useQuery } from "@tanstack/react-query";
import Aos from "aos";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function App() {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();
    const dispatch = useDispatch();
    const { accessToken, userId, refreshToken } = useAuthSlice();
    // useScrollToTop();

    const { data } = useQuery({
        queryKey: [QUERY_KEYS.AUTH.GET_ME, accessToken, userId, refreshToken],
        queryFn: AuthService.getMe,
        enabled: Boolean(accessToken && userId && refreshToken),
    });

    useEffect(() => {
        if (!data?.metadata) return;

        const { metadata } = data;
        dispatch(authActions.setUserInfo(metadata));
    }, [data?.metadata]);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Toaster position="top-right" />

            {isFetching + isMutating > 0 ? (
                <div className="fixed top-2 right-2">
                    <Spinner />
                </div>
            ) : null}
        </>
    );
}

export default App;
