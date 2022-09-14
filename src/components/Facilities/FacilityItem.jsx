
function FacilityItem({ item }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full">
                <img className="w-full" src={item.image} alt="img" />
            </div>
            <p className='flex justify-center items-center font-bold -mt-16 uppercase bg-light text-3xl w-80 h-16'>
                {item.text}
            </p>

        </div>
    )
}

export default FacilityItem