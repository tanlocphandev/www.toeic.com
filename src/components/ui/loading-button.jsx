import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";

const LoadingButton = ({ isLoading = false, ...props }) => {
    return (
        <Button {...props} disabled={isLoading}>
            {isLoading ? (
                <div className="mr-2">
                    <Spinner className={"w-5 h-5"} />
                </div>
            ) : null}
            {props.children}
        </Button>
    );
};

export default LoadingButton;
