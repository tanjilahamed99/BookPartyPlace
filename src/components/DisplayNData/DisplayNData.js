import Image from 'next/image';
import PropTypes from 'prop-types';

const DisplayNData = ({ data }) => {


    return (
        <div>
            <div className='rounded-2xl shadow-2xl shadow-[#0404041A] bg-white pb-4'>
                <Image className='w-full h-[100px]   md:w-[250px] md:h-[200px] xl:h-[250px] rounded-t-2xl' src={data?.img} alt='suggestion image' height={500} width={500} />
                <h2 className='text-center md:text-xl mt-3  text-[10px]'>{data?.roomType}</h2>
            </div>
        </div>
    );
};

DisplayNData.propTypes = {
    data: PropTypes.object
};

export default DisplayNData;
