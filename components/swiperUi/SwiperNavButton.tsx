import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const SwiperNavButton = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (!swiper) return;

    const update = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", update);
    update();
    return () => {
      swiper.off("slideChange", update);
    };
  }, [swiper]);

  return (
    <div className="flex justify-center mt-4 space-x-2 w-full h-full">
      <button
        className={
          "text-2xl border border-gray-400 flex items-center justify-center w-10 h-10 transition disabled:opacity-50 " +
          (!isBeginning ? "cursor-pointer" : "")
        }
        onClick={() => swiper.slidePrev()}
        disabled={isBeginning}
      >
        <GrFormPrevious />
      </button>
      <button
        className={
          "text-2xl border border-gray-400 flex items-center justify-center w-10 h-10 transition disabled:opacity-50 " +
          (!isEnd ? "cursor-pointer" : "")
        }
        onClick={() => swiper.slideNext()}
        disabled={isEnd}
      >
        <GrFormNext />
      </button>
    </div>
  );
};

export default SwiperNavButton;
