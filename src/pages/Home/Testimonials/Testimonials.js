import TestimonialsSlider from "./TestimonialsSlider";


const Testimonials = () => {

    return (
        <div>
            {/* larger screen */}
            <div className="hidden lg:inline">
                <TestimonialsSlider view={3} />
            </div>

            {/* medium screen */}
            <div className="hidden md:inline lg:hidden">
                <TestimonialsSlider view={2} />
            </div>

            {/* small screen */}
            <div className="md:hidden">
                <TestimonialsSlider view={1} />
            </div>
        </div>
    );
};

export default Testimonials;