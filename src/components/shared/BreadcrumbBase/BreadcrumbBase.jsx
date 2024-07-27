import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment, memo } from "react";
import { Link } from "react-router-dom";

const BreadcrumbBase = ({ className, data = [] }) => {
    return (
        <Breadcrumb className={className}>
            <BreadcrumbList>
                {data.map((item, index) => {
                    if (!item.to) {
                        return (
                            <BreadcrumbItem key={index}>
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            </BreadcrumbItem>
                        );
                    }

                    return (
                        <Fragment key={index}>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to={item.to}>{item.label}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbSeparator />
                        </Fragment>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
};

BreadcrumbBase.displayName = "BreadcrumbBase";

export default memo(BreadcrumbBase);
