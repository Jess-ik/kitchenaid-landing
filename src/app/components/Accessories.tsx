'use client'
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Accessories() {
	return (
        <section className="" id="accessories">
            <RevealWrapper origin="bottom" duration={2500}  distance="60px">
			<h2 className="text-center">Accessoires</h2></RevealWrapper>
			<div className="access-container mt-16 ">
                <div className="access-carousel">
                <RevealWrapper origin="top" duration={2500} delay={700} distance="60px">
                        <Image src={"/Kitchenaid_34.png"} alt="Kitchenaid Blue Salt de 3/4" width={300} height={300} />
                        
                        <div>dots nav</div>
                        </RevealWrapper>
                </div>
                <RevealWrapper origin="bottom" duration={2500} delay={700} distance="60px">
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
                    </RevealWrapper>
			</div>
		</section>
	);
}
