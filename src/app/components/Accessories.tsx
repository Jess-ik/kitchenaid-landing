import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Accessories() {
	return (
		<section className="flex flex-col justify-center border" id="accessories">
			<h2 className="text-center">Accessoires</h2>
			<div className="access-container mt-16 ">
				<div className="access-carousel">
					<Image src={"/Kitchenaid_34.png"} alt="Kitchenaid Blue Salt de 3/4" width={300} height={300} />
					<div>dots nav</div>
				</div>
				<div className="access-description">
					<p>Bol en acier inoxydable de 4,7L poli avec poignée ergonomique. Solide, stable et durable. Passe au lave-vaisselle.</p>
					<div className="access-nav">
						<button className="px-4">
							<FiChevronLeft />
						</button>
						<button className="px-4">
							<FiChevronRight />
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
