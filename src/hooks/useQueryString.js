import { useSearchParams } from "react-router-dom";

/**
 * Returns an object representation of the search parameters.
 *
 * @return {Object} Object representation of the search parameters
 */
const useQueryString = () => {
    const [searchParams] = useSearchParams();
    return Object.fromEntries([...searchParams]);
};

export default useQueryString;
