"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	return (
		<header>
			<div className="logo">KitchenAid</div>
			<nav className={`${open ? "top-0 " : ""}`}>
				<ul>
					<li>Accueil</li>
					<li>Caractéristiques</li>
					<li>Accessoires</li>
					<li>Recettes</li>
				</ul>
			</nav>
			<div className="menu-toggle" id="nav-close" onClick={handleClick}>
				{open ? <FiX />
 : <FiMenu />
}
			</div>
		</header>
	);
}
