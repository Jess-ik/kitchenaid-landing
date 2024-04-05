import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

export default function RecipeCard(props: { recipeImage: string | StaticImport; recipeTitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; recipeDescription: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined; }) {
	return (
		<div className="recipe-card relative">
			<div className="recipe-img">
				<Image alt="" src={props.recipeImage} width={150} height={150} />
			</div>
			<div className="recipe-info text-center">
                <h4>{props.recipeTitle}</h4>
				<p className="mb-6">{props.recipeDescription}</p>
				<button className="!text-light" aria-label="Go to recipe">Au fourneaux</button>
			</div>
		</div>
	);
}
