"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ActiveSection from "./ActiveSection";

export default function Header() {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);

	const sectionIDs = ["home", "specs", "accessories", "recipes"];
	const activeSection = ActiveSection({ sectionIDs });
	return (
		<header>
			<div className="logo">
				<a href="#home">KitchenAid</a>
			</div>

			<nav className={`${open ? "top-0 " : ""}`}>
				<ul>
					<li>
						<a href="#home" className={activeSection === "home" ? "active-nav" : ""}>
							Accueil
						</a>
					</li>
					<li>
						<a href="#specs" className={activeSection === "specs" ? "active-nav" : ""}>
							Caractéristiques
						</a>
					</li>
					<li>
						<a href="#accessories" className={activeSection === "accessories" ? "active-nav" : ""}>
							Accessoires
						</a>
					</li>
					<li>
						<a href="#recipes" className={activeSection === "recipes" ? "active-nav" : ""}>
							Recettes
						</a>
					</li>
				</ul>
			</nav>
			<div className="menu-toggle" id="nav-close" onClick={handleClick}>
				{open ? <FiX /> : <FiMenu />}
			</div>
		</header>
	);
}
