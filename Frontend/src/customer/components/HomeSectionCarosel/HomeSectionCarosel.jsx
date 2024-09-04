import React, { useState, useRef } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'; // Updated import
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'; // Updated import
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const HomeSectionCarosel = ({data , sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const carouselRef = useRef(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const slidePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.slidePrev();
        }
    };

    const slideNext = () => {
        if (carouselRef.current) {
            carouselRef.current.slideNext();
        }
    };

    const syncActiveIndex = ({ item }) => setActiveIndex(item);

    const items = data.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    return (
        <div className="carousel-container" style={{ position: "relative", padding: "2rem" }}>
            <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
            <AliceCarousel
                ref={carouselRef}
                items={items}
                disableButtonsControls
                responsive={responsive}
                disableDotsControls
                onSlideChanged={syncActiveIndex}
                activeIndex={activeIndex}
                autoPlay
                autoPlayInterval={5000}
                infinite
            />

            {/* Next button */}
            {activeIndex < items.length - 1 && (
                <Button
                    variant="contained"
                    className="carousel-button next-button"
                    onClick={slideNext}
                    sx={{
                        position: "absolute",
                        top: "56.7%",
                        right: "-0.1rem", // Adjusted spacing from the right edge
                        transform: "translateY(-50%)",
                        bgcolor: "white",
                        color: "black",
                        boxShadow: 3,
                        "&:hover": {
                            bgcolor: "#f0f0f0",
                        },
                        borderRadius: "50%",
                        width: "3rem", // Uniform button size
                        height: "3rem", // Uniform button size
                        minWidth: "auto", // Remove default button min width
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowRightIcon sx={{ fontSize: "1.5rem" }} /> {/* Uniform icon size */}
                </Button>
            )}

            {/* Prev button */}
            {activeIndex > 0 && (
                <Button
                    onClick={slidePrev}
                    variant="contained"
                    className="carousel-button prev-button"
                    sx={{
                        position: "absolute",
                        top: "55%",
                        left: "-1rem", // Adjusted spacing from the left edge
                        transform: "translateY(-50%)",
                        bgcolor: "white",
                        color: "black",
                        boxShadow: 3,
                        "&:hover": {
                            bgcolor: "#f0f0f0",
                        },
                        borderRadius: "50%",
                        width: "3rem", // Uniform button size
                        height: "3rem", // Uniform button size
                        minWidth: "auto", // Remove default button min width
                    }}
                    aria-label="prev"
                >
                    <KeyboardArrowLeftIcon sx={{ fontSize: "1.5rem" }} /> {/* Uniform icon size */}
                </Button>
            )}
        </div>
    );
};

export default HomeSectionCarosel;
