import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useQueryString from "@/hooks/useQueryString";
import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { Link } from "react-router-dom";

const TableComponent = ({
    isFetching = false,
    rows = [],
    columns = [],
    pagination = null,
    messageEmpty = "Không có dữ liệu",
    className,
    isStickyHeader = false,
}) => {
    const queryString = useQueryString();

    const convertParamToString = useMemo(() => {
        delete queryString?.page;

        return Object.entries(queryString).reduce((prev, [key, value]) => {
            if (value) {
                return prev + `&${key}=${value}`;
            }
            return prev;
        }, "");
    }, [queryString]);

    return (
        <div className={`${className} relative`}>
            {isFetching ? (
                <div className="absolute -top-3 w-full">
                    <div className="h-1.5 w-full bg-pink-100 overflow-hidden rounded-full">
                        <div className="animate-progress w-full h-full bg-pink-500 origin-left-right rounded-full"></div>
                    </div>
                </div>
            ) : null}

            <Table
                className={cn({
                    relative: isStickyHeader,
                })}
                divClassName={cn({
                    "h-full": isStickyHeader,
                })}
            >
                <TableHeader
                    className={cn({
                        "sticky w-full top-0 h-10 border border-white bg-gray-300 z-10":
                            isStickyHeader,
                    })}
                >
                    <TableRow>
                        {columns.map((column) => {
                            return (
                                <TableHead className={column?.classNameColumn} key={column.key}>
                                    {column.title}
                                </TableHead>
                            );
                        })}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {rows.length > 0 ? (
                        rows.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    {columns.map((column, idx) => {
                                        return (
                                            <TableCell
                                                className={
                                                    column?.classNameRow
                                                        ? typeof column.classNameRow === "function"
                                                            ? column.classNameRow(row)
                                                            : column.classNameRow
                                                        : null
                                                }
                                                key={idx}
                                            >
                                                {column?.render
                                                    ? column.render(row)
                                                    : row[column.key]}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={columns.length}
                                className="font-medium"
                                align="center"
                            >
                                {messageEmpty}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {pagination && pagination?.totalPage > 0 ? (
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                Component={Link}
                                to={`?page=${pagination?.page - 1}${convertParamToString}`}
                                className={
                                    pagination?.page === 1
                                        ? "pointer-events-none text-gray-300"
                                        : ""
                                }
                            />
                        </PaginationItem>

                        {pagination?.totalPage > 0
                            ? Array.from({ length: pagination?.totalPage }, (_, index) => (
                                  <PaginationItem key={index}>
                                      <PaginationLink
                                          Component={Link}
                                          isActive={pagination?.page === index + 1}
                                          to={`?page=${index + 1}${convertParamToString}`}
                                          className={
                                              pagination?.page === index + 1
                                                  ? "pointer-events-none bg-gray-200"
                                                  : ""
                                          }
                                      >
                                          {index + 1}
                                      </PaginationLink>
                                  </PaginationItem>
                              ))
                            : null}

                        {/* <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem> */}

                        <PaginationItem>
                            <PaginationNext
                                Component={Link}
                                to={`?page=${pagination?.page + 1}${convertParamToString}`}
                                className={
                                    pagination?.page === pagination?.totalPage
                                        ? "pointer-events-none text-gray-300"
                                        : ""
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            ) : null}
        </div>
    );
};

export default TableComponent;
