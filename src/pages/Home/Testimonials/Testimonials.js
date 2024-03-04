import AllTestimonialText from "@/lib/testimonialText";
import TestimonialsSlider from "./TestimonialsSlider";
import testimonialImg from "../../../../public/images/testimonial.jpg";

const Testimonials = () => {
  const { DESC, TITLE } = AllTestimonialText;

  const testimonialData = [
    {
      img: testimonialImg,
      name: "Devil",
      position: "Position, Company name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,",
      rating: 5,
    },
    {
      img: testimonialImg,
      name: "Devil",
      position: "Position, Company name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,",
      rating: 5,
    },
    {
      img: testimonialImg,
      name: "Devil",
      position: "Position, Company name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,",
      rating: 5,
    },
    {
      img: testimonialImg,
      name: "Devil",
      position: "Position, Company name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,",
      rating: 5,
    },
    {
      img: testimonialImg,
      name: "Devil",
      position: "Position, Company name",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,",
      rating: 5,
    },
  ];

  return (
    <div>
      <h2 className="md:text-2xl text-lg font-semibold mb-2 text-[#040404] text-center">
        {TITLE}
      </h2>
      <p className="text-[#535552] text-center mb-10">{DESC}</p>

      {/* larger screen */}
      <div className="hidden lg:inline">
        <TestimonialsSlider data={testimonialData} view={3} pagination={true} />
      </div>

      {/* medium screen */}
      <div className="hidden md:inline lg:hidden">
        <TestimonialsSlider data={testimonialData} view={2} pagination={true} />
      </div>

      {/* small screen */}
      <div className="md:hidden">
        <TestimonialsSlider data={testimonialData} view={1.1} pagination={false} />
      </div>
    </div>
  );
};

export default Testimonials;
