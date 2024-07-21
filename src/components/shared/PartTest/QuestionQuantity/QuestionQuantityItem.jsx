const QuestionQuantityItem = ({ quantities }) => {
    return (
        <div className="px-4 flex mt-3 flex-wrap">
            {quantities.map((quantity, i) => (
                <button
                    key={i}
                    className="mx-1 text-sm mt-2 w-[30px] h-[30px] border border-[#34447c] flex items-center justify-center rounded hover:bg-[#34447c] hover:text-white"
                >
                    {quantity}
                </button>
            ))}
        </div>
    );
};

export default QuestionQuantityItem;
