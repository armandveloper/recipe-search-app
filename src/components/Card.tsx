import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RecipeResult } from '../interfaces/search-recipes.interface';
import Button from './Button';

interface CardProps {
	recipe: RecipeResult;
}

const CardMedia = styled.img`
	display: block;
	width: 100%;
	object-fit: cover;
`;

const CardContent = styled.div`
	background-color: #645e8a;
	padding: 1.2rem;
	h2 {
		font-size: 1.8rem;
		font-weight: 500;
		line-height: 1.2;
		text-align: center;
	}
`;

function Card({ recipe }: CardProps) {
	return (
		<div>
			<CardMedia
				width={312}
				height={231}
				src={recipe.image}
				alt={recipe.title}
			/>
			<CardContent>
				<h2>{recipe.title}</h2>
				<Link to={`/recipes/${recipe.id}`}>
					<Button full={true}>View Recipe</Button>
				</Link>
			</CardContent>
		</div>
	);
}

export default Card;
