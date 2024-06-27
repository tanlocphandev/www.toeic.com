import React from "react";

const SkillContentItem = ({ sections }) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-4 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                        <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                        <p>{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillContentItem;
