import AllTestimonialText from "@/lib/testimonialText";
import TestimonialsSlider from "./TestimonialsSlider";

const Testimonials = () => {
  const { DESC, TITLE } = AllTestimonialText;

  return (
    <div>
      <h2 className="md:text-2xl text-lg font-semibold mb-2 text-[#040404] text-center">
        {TITLE}
      </h2>
      <p className="text-[#535552] text-center mb-10">{DESC}</p>

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
