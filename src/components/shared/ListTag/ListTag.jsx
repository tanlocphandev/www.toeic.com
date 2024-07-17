import ChipTag from "@/components/shared/ChipTag/ChipTag";

const ListTag = ({ tags = [] }) => {
    return (
        <div className="flex space-x-2">
            {tags.map((tag, idx) => (
                <ChipTag text={tag} key={idx} />
            ))}
        </div>
    );
};

ListTag.displayName = "ListTag";

export default ListTag;
