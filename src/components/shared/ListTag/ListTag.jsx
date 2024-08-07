import ChipTag from "@/components/shared/ChipTag/ChipTag";

const ListTag = ({ tags = [] }) => {
    return (
        <div className="flex gap-2 flex-wrap">
            {tags.map((tag, idx) => (
                <ChipTag text={tag} key={idx} />
            ))}
        </div>
    );
};

ListTag.displayName = "ListTag";

export default ListTag;
