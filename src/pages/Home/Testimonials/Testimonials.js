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
            <TestimonialsSlider data={testimonialDetails}/>
        </div>
    );
};

export default Testimonials;