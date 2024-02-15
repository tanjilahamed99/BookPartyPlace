import Image from "next/image";
import Rating from "react-rating";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";


const TestimonialCard = ({ data }) => {
    return (
        <div className="border-[#BCBFBA] border relative">
            <Image
                className="absolute rounded-full md:w-32 md:h-32 md:-top-20 -top-10 xl:left-[32%] lg:left-[28%] md:left-[30%] left-[33%] z-10 h-20 w-20"
                src={data?.img} alt="testimonials image"
                width={500}
                height={500} />

            <div className="text-center md:pt-14 pt-12  px-2 pb-5 space-y-3">
                <div>
                    <h2 className="text-[#040404] font-semibold">{data?.name}</h2>
                    <h2 className="text-sm text-[#040404]">{data?.position}</h2>
                </div>
                <p className="text-[#535552] text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
                </p>
                <Rating
                    placeholderRating={3.5}
                    emptySymbol={<IoIosStarOutline />}
                    placeholderSymbol={<IoIosStar />}
                    fullSymbol={<IoIosStar />}
                    className="text-[#FFBE00] text-xl "
                />
            </div>
        </div>
    );
};

export default TestimonialCard;
