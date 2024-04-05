"use client";
import React from "react";
import RecipeCard from "./RecipeCard";
import { RevealList, RevealWrapper } from "next-reveal";

export default function Recipes() {
	return (
		<section className="pt-32" id="recipes">
			<RevealWrapper origin="bottom" duration={2500} distance="60px">
				<h2 className="text-center">En cuisine</h2>
			</RevealWrapper>
			<RevealWrapper origin="bottom" duration={2500} distance="60px" delay={500}>
				<div className="recipes-intro">
					<h3 className="mb-6">Des recettes pour vous inspirer</h3>
					<p className="md:text-center">Explorez notre sélection de recettes délicieuses, des classiques revisités aux créations originales, toutes conçues pour ravir vos papilles. Que vous soyez un passionné de pâtisserie expérimenté ou un novice enthousiaste, ces créations éveilleront votre créativité et impressionneront vos proches avec des desserts dignes d&apos;un chef !</p>
				</div>
			</RevealWrapper>

			<div className="recipes-container">
				<RevealWrapper origin="top" duration={2500} distance="60px" delay={100}>
					<RecipeCard recipeTitle="Muffins" recipeImage={"/muffin.jpg"} recipeDescription="Gâteau" />
				</RevealWrapper>
				<RevealWrapper origin="top" duration={2500} distance="60px" delay={200}>
					<RecipeCard recipeTitle="Chouquettes" recipeImage={"/chouquettes.jpg"} recipeDescription="Viennoiserie" />
				</RevealWrapper>
				<RevealWrapper origin="top" duration={2500} distance="60px" delay={300}>
					<RecipeCard recipeTitle="Macarons" recipeImage={"/macarons.jpg"} recipeDescription="Biscuits" />
				</RevealWrapper>
			</div>
			<button className="mt-12 w-fit !bg-transparent hover:!bg-dark hover:!text-light cursor-pointer border border-darkBlue text-darkBlue">Découvrir toutes les recettes</button>
		</section>
	);
}
