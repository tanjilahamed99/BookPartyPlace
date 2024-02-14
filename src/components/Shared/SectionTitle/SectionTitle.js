import PropTypes from 'prop-types';

const SectionTitle = ({ title }) => {
    return (
        <div>
            <h2 className='text-2xl font-semibold mb-3 text-[#040404] text-center md:text-start'>{title}</h2>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.string
};

export default SectionTitle;