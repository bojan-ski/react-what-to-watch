import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

const Slides = ({ text, selectedContent, direction }) => {
    // console.log(selectedContent, direction);

    return (
        <>
            <PageHeader text={text} />

            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                    reverseDirection: { direction }
                }}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 35,
                    },
                }}
            >
                {selectedContent?.map(cardContent => {
                    // console.log(cardContent);
                    return (
                        <SwiperSlide key={cardContent.id} className="bg-primary text-center">
                            <Link to={cardContent.title ? `/movies/${cardContent.id}` : `/tv-shows/${cardContent.id}`} className='text-white text-decoration-none'>
                                <img src={`https://image.tmdb.org/t/p/w500${cardContent.poster_path}`} className="img-fluid" alt={cardContent.title ? cardContent.title : cardContent.name} />
                                <div className="my-1">
                                    <h5 className="card-title">
                                        {cardContent.title ? cardContent.title : cardContent.name}
                                    </h5>
                                    <p className="card-text">
                                        Average rate: <span className="fw-bold">{cardContent.vote_average.toFixed(2)}</span>
                                    </p>
                                </div>
                            </Link >
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}

export default Slides