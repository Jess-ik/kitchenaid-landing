import Image from "next/image";
import React from "react";

export default function Landing() {
	return (
		<section className="pt-32 block md:grid md:grid-cols-2 gap-4" id="home">
			<div className="flex justify-center items-center">
				<Image src={"/Kitchenaid_face.png"} alt="Kitchenaid Blue Salt de face" width={450} height={450} />
			</div>
			<div className="mt-4">
				<h1 className="absolute opacity-20">Blue Salt</h1>
				<h2 className="pt-[4rem] md:pt-[5rem] mb-16">KitchenAid 2024</h2>
				<h3 className="mb-4">Découvrez notre fabuleux robot pâtissier</h3>
				<p className="mb-12">Fouetter, batter, remuer, pétrir ou écrasier: ce superbe robot pâtissier Artisan de 4,7L peut tout faire. Avec son mouvement planétaire unique et son design emblématique, il incarne parfaitement la marque de robots pâtissiers nº1 dans le monde.</p>
				<button>Découvrir</button>
			</div>
		</section>
	);
}
