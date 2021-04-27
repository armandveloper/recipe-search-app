import styled from 'styled-components';
import Typography from './Typography';

const { Title, Text } = Typography;

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

function Instructions() {
	return (
		<StyledInstructions>
			<Title as="h2" variant="h2">
				Instructions
			</Title>
			<ul className="list">
				<Instruction>
					<div className="step">1</div>
					<Text>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Facilis, ipsam sunt voluptates modi minima in
						accusantium nemo deleniti ab beatae.
					</Text>
				</Instruction>
				<Instruction>
					<div className="step">2</div>
					<Text>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Facilis, ipsam sunt voluptates modi minima in
						accusantium nemo deleniti ab beatae.
					</Text>
				</Instruction>
				<Instruction>
					<div className="step">3</div>
					<Text>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Facilis, ipsam sunt voluptates modi minima in
						accusantium nemo deleniti ab beatae.
					</Text>
				</Instruction>
				<Instruction>
					<div className="step">4</div>
					<Text>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Facilis, ipsam sunt voluptates modi minima in
						accusantium nemo deleniti ab beatae.
					</Text>
				</Instruction>
			</ul>
		</StyledInstructions>
	);
}

export default Instructions;
