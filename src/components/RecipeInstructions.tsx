import styled from 'styled-components';
import { Step } from '../interfaces/recipe-response.interface';
import Typography from './Typography';

const { Title, Text } = Typography;

interface RecipeInstructionsProps {
	instructions: Step[];
}

const StyledInstructions = styled.section`
	margin-top: 2rem;
	.list {
		margin-top: 2rem;
	}
`;

const Instruction = styled.li`
	margin: 1rem 0;
	display: grid;
	align-items: start;
	gap: 2.8rem;
	grid-template-columns: auto 1fr;
	@media (min-width: 56.25em) {
		gap: 1.6rem;
	}
	.step {
		background-color: #c0600c;
		border-radius: 0.6rem;
		color: #fff;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 3.6rem;
		height: 3.6rem;
		text-align: center;
		user-select: none;
		width: 3.6rem;
	}
`;

function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
	return (
		<StyledInstructions>
			<Title as="h2" variant="h2">
				Instructions
			</Title>
			<ul className="list">
				{instructions.map((step) => (
					<Instruction key={step.number}>
						<div className="step">{step.number}</div>
						<Text>{step.step}</Text>
					</Instruction>
				))}
			</ul>
		</StyledInstructions>
	);
}

export default RecipeInstructions;
