import { BackgroundImage, Grid, Container, Text, Image } from '@mantine/core';
import { useImperativeHandle, forwardRef, useRef } from 'react';

type sectionProp = {
	backgroundImage: string;
	image: string;
	title: string;
	message: string;
	message2: string;
};

const Welcome = forwardRef<Partial<HTMLDivElement>, sectionProp>(
	(props, ref) => {
		const { backgroundImage, image, title, message, message2 } = props;
		const compRef = useRef<HTMLDivElement>(null);
		useImperativeHandle(ref, () => ({
			scrollIntoView: () => {
				compRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
			},
		}));
		return (
			<div
				className='section'
				ref={compRef}>
				<div className='copy'>
					<Container size='lg'>
						<Grid grow>
							<Grid.Col sm={12}>
								<center>
									<Image
										src={message}
										height={'150px'}
										width={'auto'}
									/>
								</center>
							</Grid.Col>
							<Grid.Col sm={12}>
								<center>
									<Image
										src={image}
										height={'300px'}
										width={'auto'}
									/>
								</center>
							</Grid.Col>
							<Grid.Col sm={12}>
								<Text
									size='2rem'
									color='giantsjj.1'>
									{title}
								</Text>
							</Grid.Col>
							<Grid.Col sm={12}>
								<Text
									size='1.5rem'
									color='giantsjj.0'>
									{message2}
								</Text>
							</Grid.Col>
						</Grid>
					</Container>
				</div>
				<BackgroundImage
					className='img'
					src={backgroundImage}
				/>
				{/* <div className='overlay' /> */}
			</div>
		);
	}
);

export default Welcome;
