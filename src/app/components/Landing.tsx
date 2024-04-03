"use client";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "next-reveal";

export default function Landing() {
	return (
		<section className="pt-32 block md:grid md:grid-cols-2 gap-4" id="home">
			<div className="flex justify-center items-center">
				<RevealWrapper origin="top" duration={2500} delay={700} distance="60px">
					<Image src={"/Kitchenaid_face.png"} alt="Kitchenaid Blue Salt de face" width={450} height={450} />
				</RevealWrapper>{" "}
			</div>

			<div className="mt-4">
				<RevealWrapper origin="bottom" duration={2500} delay={400} distance="60px">
					<h1 className="absolute opacity-20">Blue Salt</h1>
					<h2 className="font-dmsans font-[600] text-[2.5rem] md:text-[3rem] pt-[4rem] md:pt-[5rem] mb-16">KitchenAid 2024</h2>
				</RevealWrapper>
				<RevealWrapper origin="bottom" duration={2500} delay={500} distance="60px">
					<h3 className="mb-4">Découvrez notre fabuleux robot pâtissier</h3>
					<p className="mb-12">Fouetter, batter, remuer, pétrir ou écrasier: ce superbe robot pâtissier Artisan de 4,7L peut tout faire. Avec son mouvement planétaire unique et son design emblématique, il incarne parfaitement la marque de robots pâtissiers nº1 dans le monde.</p>

					<a href="/#specs">
						<button>Découvrir</button>
					</a>
				</RevealWrapper>
			</div>
		</section>
	);
}
