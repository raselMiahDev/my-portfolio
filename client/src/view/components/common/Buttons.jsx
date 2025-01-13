
const GroupButtons = () => {
    return (
        <div className="flex gap-7">
            <button className="bg-[#133955] px-5 py-3 text-[#dbdbdb] hover:border-[#133955] hover:border hover:bg-transparent transition duration-300 hover:text-[#133955] rounded">Download resume</button>
            <button className="border border-[#133955]  px-5 py-3 text-primary rounded hover:bg-[#133955] transition duration-300 hover:text-[#dbdbdb]">Contact</button>
        </div>
    );
};

export default GroupButtons;