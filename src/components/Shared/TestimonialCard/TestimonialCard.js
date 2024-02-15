import Image from "next/image";
import Rating from "react-rating";
import { IoIosStarOutline, IoIosStar } from "react-icons/io";


const TestimonialCard = ({ data }) => {
    return (
        <div className="border-[#BCBFBA] border relative">
            <Image className="absolute rounded-full w-32 h-32 -top-20 left-[36%] z-10" src={data?.img} alt="testimonials image" width={500} height={500} />

            <div className="text-center pt-14 px-5 pb-5 space-y-3">
                <div>
                    <h2 className="text-[#040404] font-semibold">{data?.name}</h2>
                    <h2 className="text-sm text-[#040404]">{data?.position}</h2>
                </div>
                <p className="text-[#535552]">
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