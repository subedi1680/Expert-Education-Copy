const Smallcards = ({image,text1,text2}) => {
    return(
        <>
            <div className="flex flex-col items-center bg-[#f5f8fb] p-2 w-65 h-65 justify-center space-y-5">
                <img src={image} className="w-20 h-20"></img>
                <p className="text-[#344871] text-2xl font-bold">{text1}</p>
                <p className="text-[#334770] font-bold">{text2}</p>
            </div>
        </>
    );
}
export default Smallcards;