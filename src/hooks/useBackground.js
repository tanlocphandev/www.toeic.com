import { useLayoutEffect } from "react"

const useBackground = ({ selector, backgroundImage = "bg-statistical.jpg" }) => {
    useLayoutEffect(() => {
        document.querySelector(selector).classList = `bg-[url('/${backgroundImage}')] w-full bg-no-repeat bg-cover bg-bottom`;

        return () => {
            document.querySelector(selector).classList = `bg-[url('/${backgroundImage}')] w-full bg-no-repeat bg-cover bg-bottom`;
        }
    }, [selector, backgroundImage])

}

export default useBackground