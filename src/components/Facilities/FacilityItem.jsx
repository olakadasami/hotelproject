
function FacilityItem({ item }) {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full">
                <img className="w-full" src={item.image} alt="img" />
            </div>
            <p className='flex justify-center items-center font-bold -mt-10 md:-mt-16 uppercase bg-light text-md md:text-3xl w-48 md:w-72 h-10 md:h-16'>
                {item.text}
            </p>

        </div>
    )
}

export default FacilityItem