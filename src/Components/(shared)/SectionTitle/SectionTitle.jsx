

const SectionTitle = ({ bigText, smallText }) => {
    return (
        <div className="max-w-7xl mx-auto  ">
            <h1 className=" text-5xl font-bold py-4 header">{bigText}</h1>
            <p className="max-w-3xl mx-auto">{smallText}</p>
        </div>
    );
};

export default SectionTitle;