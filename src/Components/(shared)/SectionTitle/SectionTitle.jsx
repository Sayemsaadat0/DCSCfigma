

const SectionTitle = ({ bigText, smallText }) => {
    return (
        <div className="max-w-7xl mx-auto  ">
            <h1 className=" text-4xl font-bold py-4 ">{bigText}</h1>
            <p className="max-w-2xl mx-auto">{smallText}</p>
        </div>
    );
};

export default SectionTitle;