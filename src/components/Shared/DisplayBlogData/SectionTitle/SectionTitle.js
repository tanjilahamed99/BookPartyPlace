import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
    return (
        <div>
            <h2 className='md:text-2xl text-lg font-semibold md:mb-4 mb-2 text-[#040404] text-center md:text-start'>{title}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string
};

export default SectionTitle;