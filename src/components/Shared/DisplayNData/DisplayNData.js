import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

const DisplayNData = ({ data }) => {


    return (
        <Link href={'/'}>
            <div className='rounded-2xl shadow-2xl shadow-[#0404041A] py-4'>
                <Image className='w-[250px] h-[200px] xl:h-[250px] rounded-t-2xl' src={data?.img} alt='suggestion image' height={500} width={500} />
                <h2 className='text-center text-xl mt-3'>{data?.roomType}</h2>
            </div>
        </Link>
    );
};

DisplayNData.propTypes = {
    data: PropTypes.object
};

export default DisplayNData;