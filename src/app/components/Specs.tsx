import Image from "next/image";
import React from "react";
import { TbBounceRight, TbBrandReact, TbShieldHeart, TbEngine } from "react-icons/tb";

export default function Specs() {
	return (
		<section className="" id="specs">
			<h2 className="text-center">Caractéristiques</h2>
			<div className="flex md:gap-6 md:px-40 justify-center items-center    mt-16 ">
				<div className="specs-container w-full">
					<ul className="specs">
						<li>
							<ul className="spec">
								<li className="spec-icon">
									<TbBounceRight />
								</li>
								<li className="spec-title">Tête</li>
								<li className="spec-desc">Inclinable</li>
							</ul>
						</li>
						<li>
							<ul>
								<li className="spec-icon">
									<TbBrandReact />
								</li>
								<li className="spec-title">Mouvement</li>
								<li className="spec-desc">Planétaire 10 vitesses</li>
							</ul>
						</li>
						<li>
							<ul>
								<li className="spec-icon">
									<TbEngine />
								</li>
								<li className="spec-title">Corps</li>
								<li className="spec-desc">En métal coulé</li>
							</ul>
						</li>
						<li>
							<ul>
								<li className="spec-icon">
									<TbShieldHeart />
								</li>
								<li className="spec-title">Garantie</li>
								<li className="spec-desc">5ans + 15ans réparabilité</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="specs-img">
					<Image src={"/Kitchenaid_34.png"} alt="Kitchenaid Blue Salt de 3/4" width={300} height={300} />
				</div>
			</div>
		</section>
	);
}
