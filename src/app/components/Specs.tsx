"use client";
import { RevealList, RevealWrapper } from "next-reveal";
import Image from "next/image";
import React from "react";
import { TbBounceRight, TbBrandReact, TbShieldHeart, TbEngine } from "react-icons/tb";

export default function Specs() {
	return (
		<section className="" id="specs">
			<RevealWrapper origin="bottom" duration={2500} distance="60px">
				<h2 className="text-center">Caractéristiques</h2>
			</RevealWrapper>
			<div className="flex md:gap-6 md:px-40 justify-center items-center w-full  mt-16 ">
				<div className="specs-container w-full">
					<ul className="specs">
						<RevealList origin="left" delay={500} duration={2500} distance="60px" interval={100}>
							<li className="spec">
								<ul>
									<li className="spec-icon">
										{" "}
										{/* Utilisez une classe pour l'icône */}
										<TbBounceRight />
									</li>
									<li className="spec-title">Tête</li>
									<li className="spec-desc">Inclinable</li>
								</ul>
							</li>
							<li className="spec">
								<ul>
									<li className="spec-icon">
										{" "}
										{/* Utilisez une classe pour l'icône */}
										<TbBrandReact />
									</li>
									<li className="spec-title">Mouvement</li>
									<li className="spec-desc">Planétaire 10 vitesses</li>
								</ul>
							</li>
							<li className="spec">
								<ul>
									<li className="spec-icon">
										{" "}
										{/* Utilisez une classe pour l'icône */}
										<TbEngine />
									</li>
									<li className="spec-title">Corps</li>
									<li className="spec-desc">En métal coulé</li>
								</ul>
							</li>
							<li className="spec">
								<ul>
									<li className="spec-icon">
										{" "}
										{/* Utilisez une classe pour l'icône */}
										<TbShieldHeart />
									</li>
									<li className="spec-title">Garantie</li>
									<li className="spec-desc">5ans + 15ans réparabilité</li>
								</ul>
							</li>
						</RevealList>
					</ul>
				</div>
				<div className="specs-img">
					<RevealWrapper origin="right" duration={2500} delay={400} distance="60px">
						<Image src={"/Kitchenaid_34.png"} alt="Kitchenaid Blue Salt de 3/4" width={300} height={300} />
					</RevealWrapper>
				</div>
			</div>
		</section>
	);
}
