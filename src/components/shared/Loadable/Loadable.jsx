import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Suspense, useEffect } from "react";

/**
 * A function that returns a progress bar component.
 *
 * @return {JSX.Element} The progress bar component.
 */
const Loader = () => {
    useEffect(() => {
        NProgress.start();
        window.scrollTo(0, 0);

        return () => {
            NProgress.done();
        };
    }, []);

    return <div className="fixed top-0 left-0 z-50" />;
};

/**
 * A function that creates a loadable component.
 *
 * @param {Component} Component - the component to be wrapped in Suspense.
 * @param {Object} props - the props to be passed to the Component.
 * @return {JSX.Element} The wrapped Component inside a Suspense component.
 */
const Loadable = (Component) => {
    return (props) => (
        <Suspense fallback={<Loader />}>
            <Component {...props} />
        </Suspense>
    );
};

export default Loadable;
