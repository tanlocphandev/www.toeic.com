import { Link } from "react-router-dom";

const SkillContentItem = ({ sections }) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {sections?.map((section, index) => (
                    <Link
                        to={`/practice-lc-rc/${section.type_slug}`}
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <img
                            src={section.type_thumb?.url}
                            alt={section.type_name}
                            className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">
                            {`Phần ${section.part?.part_number}: ${
                                section.part?.part_number >= 7 ? `Đọc hiểu - ` : ""
                            }${section.type_name}`}
                        </h2>
                        <p className="text-justify">{section.type_desc}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

SkillContentItem.displayName = "SkillContentItem";

export default SkillContentItem;
