"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import accessoriesData from "../../data/accessories.json";

export default function Carousel({ accessoriesData }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const length = accessoriesData.length;

	const goToPrevious = () => {
		setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
	};

	const goToNext = () => {
		setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
	};

	const goToIndex = (dotIndex) => {
		setCurrentIndex(dotIndex)
	}

	return (
		<div className=" mt-32">
			{accessoriesData.map((accessorie, index) => {
				return (
					<div className={index === currentIndex ? "access-container" : "hidden"} key={index}>
						<div className="access-image-container">
						
							<div className="access-image ">
							<Image src={accessorie.img} alt={accessorie.title} width={300} height={300} />
								</div>
								
							<div className="dots-nav ">
								{accessoriesData.map((_, dotIndex) => (
									<div key={dotIndex} onClick={() => goToIndex(dotIndex)} className={`dot ${dotIndex === currentIndex ? "current-dot" : ""}`}></div>
								))}
							</div>
						</div>

						<div className="access-description">
							<h4>{accessorie.title}</h4>
							<p>{accessorie.description}</p>
							<div className="access-nav">
								<button className="px-4" onClick={goToPrevious} aria-label="Previous accessorie">
									<FiChevronLeft />
								</button>
								<button className="px-4" onClick={goToNext} aria-label="Next accessorie">
									<FiChevronRight />
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}
