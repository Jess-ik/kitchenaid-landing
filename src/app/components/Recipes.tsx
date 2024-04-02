import React from "react";
import RecipeCard from "./RecipeCard";

export default function Recipes() {
	return (
		<section className="flex flex-col justify-center items-center pt-32" id="recipes">
			<h2 className="text-center">En cuisine</h2>
			<div className="recipes-intro">
				<h3 className="mb-6">Des recettes pour vous inspirer</h3>
				<p className="md:text-center">Explorez notre sélection de délicieuses créations culinaires, des classiques revisités aux créations originales, toutes élaborées avec soin pour tirer le meilleur parti de votre robot pâtissier. Que vous soyez un passionné de pâtisserie expérimenté ou un novice enthousiaste, ces recettes sauront éveiller votre créativité et émerveiller vos papilles. Préparez-vous à découvrir de nouvelles saveurs et à épater vos proches avec des desserts dignes d'un chef !</p>
			</div>

			<div className="recipes-container">
				<RecipeCard recipeTitle="Cinamon Roll" recipeImage={"/Recipe.png"} recipeDescription="Viennoiserie" />
				<RecipeCard recipeTitle="Chouquettes" recipeImage={"/Recipe.png"} recipeDescription="Viennoiserie" />
				<RecipeCard recipeTitle="Brioche feuilletée" recipeImage={"/Recipe.png"} recipeDescription="Viennoiserie" />
			</div>
			<button className="mt-12 w-fit !bg-transparent border border-darkBlue text-darkBlue">Découvrir toutes les recettes</button>
		</section>
	);
}
