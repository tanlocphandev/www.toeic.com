import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const adminRoute = (path) => (path ? `/admin/${path}` : "/admin");
