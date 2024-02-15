import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {

    const testimonialDetails = [
        { "name": "Alex", "position": "Position, Company name", "img": 'https://i.ibb.co/MZJZfXD/testimonial.jpg' },
        { "name": "Atif", "position": "Position, Company name", "img": 'https://i.ibb.co/MZJZfXD/testimonial.jpg' },
        { "name": "Romon", "position": "Position, Company name", "img": 'https://i.ibb.co/MZJZfXD/testimonial.jpg' },
        { "name": "Heles", "position": "Position, Company name", "img": 'https://i.ibb.co/MZJZfXD/testimonial.jpg' },
        { "name": "Liton", "position": "Position, Company name", "img": 'https://i.ibb.co/MZJZfXD/testimonial.jpg' },
        { "name": "Sumaiya", "position": "Position, Company name", "img": 'https://i.ibb.co/MZJZfXD/testimonial.jpg' },
    ]

    return (
        <div>
            {/* larger screen */}
            <div className="hidden lg:inline">
                <TestimonialsSlider view={3} data={testimonialDetails} />
            </div>

            {/* medium screen */}
            <div className="hidden md:inline lg:hidden">
                <TestimonialsSlider view={2} data={testimonialDetails} />
            </div>

            {/* small screen */}
            <div className="md:hidden">
                <TestimonialsSlider view={1} data={testimonialDetails} />
            </div>
        </div>
    );
};

export default Testimonials;