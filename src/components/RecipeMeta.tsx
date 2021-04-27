import styled from 'styled-components';

interface RecipeMetaProps {
	servings: number;
	readyIn: number;
}

const StyledRecipeMeta = styled.div`
	background-color: #48426d;
	box-shadow: 0 0 2rem rgba(0, 0, 0, 0.2);
	border-radius: 1.2rem;
	margin-top: 2.4rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem 0;
	@media (min-width: 56.25em) {
		grid-column: 2;
		grid-template-columns: 1fr;
		padding: 4rem;
	}
`;

const MetaItem = styled.div<{ hightlight?: boolean }>`
	display: grid;
	grid-template-columns: min-content 1fr;
	gap: 0 0.5rem;
	align-items: center;
	@media (min-width: 56.25em) {
		gap: 0 1.4rem;
	}
	p {
		font-size: 1rem;
		font-weight: 700;
		margin: 0;
		text-transform: uppercase;
		@media (min-width: 56.25em) {
			font-size: 1.2rem;
		}
		span {
			color: ${({ hightlight }) => (hightlight ? '#fbb06e' : null)};
			font-weight: 500;
			display: block;
			font-size: 1.2rem;
			@media (min-width: 56.25em) {
				font-size: 1.4rem;
			}
		}
	}
	.material-icons {
		color: ${({ hightlight }) => (hightlight ? '#fbb06e' : null)};
	}
	@media (min-width: 56.25em) {
		.material-icons {
			font-size: 3rem;
		}
	}
`;

function RecipeMeta({ servings, readyIn }: RecipeMetaProps) {
	const readyInHours: number = +(readyIn / 60).toFixed(2);

	return (
		<StyledRecipeMeta>
			<MetaItem hightlight={true}>
				<span className="material-icons">local_dining</span>
				<p>
					Yields
					<span>{servings} servings</span>
				</p>
			</MetaItem>
			<MetaItem>
				<span className="material-icons">schedule</span>
				<p>
					Ready in
					<span>
						{readyInHours} {readyInHours <= 1 ? 'hour' : 'hours'}
					</span>
				</p>
			</MetaItem>
		</StyledRecipeMeta>
	);
}

export default RecipeMeta;
