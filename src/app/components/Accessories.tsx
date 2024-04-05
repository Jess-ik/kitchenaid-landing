"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Carousel from "./Carousel";
import accessoriesData from "../../data/accessories.json"



export default function Accessories() {
	return (
		<section className="" id="accessories">
			<RevealWrapper origin="bottom" duration={2500} distance="60px">
				<h2 className="text-center">Accessoires</h2>
			</RevealWrapper>
			<Carousel accessoriesData={accessoriesData} />
		</section>
	);
}
