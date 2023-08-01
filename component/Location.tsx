import { BackgroundImage, Grid, Container, Text, Image } from '@mantine/core';
import { useImperativeHandle, forwardRef, useRef } from 'react';

type sectionProp = {
	backgroundImage: string;
	map: string;
	title: string;
	message: string;
};

const Location = forwardRef((props: sectionProp, ref) => {
	const { backgroundImage, map, title, message } = props;
	const compRef = useRef();
	useImperativeHandle(ref, () => ({
		scrollIntoView: () => {
			compRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
		},
	}));
	return (
		<div
			className='section'
			ref={compRef}>
			<div className='copy'>
				<Container size='lg'>
					<Grid
						grow
						style={{
							color: 'giantsjj.1',
							fontSize: '1rem',
						}}>
						<Grid.Col sm={12}>
							<Text
								size='2rem'
								color='giantsjj.1'>
								{title}
							</Text>
						</Grid.Col>
						<Grid.Col sm={12}>
							<Text
								size='1.3rem'
								color='giantsjj.1'>
								{message}
							</Text>
						</Grid.Col>

						{/* Need to fix and resize for smaller */}
						<Grid.Col sm={12}>
							<center>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63255.85673307466!2d98.73571668753556!3d7.737622723844234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304e20be764e3d0d%3A0xbf9db8781a549f71!2sPhi%20Phi%20Islands!5e0!3m2!1sen!2sca!4v1690263942518!5m2!1sen!2sca'
									width='600'
									height='550'
									style={{ border: 0 }}
									allowfullscreen='true'
									loading='lazy'
									referrerpolicy='no-referrer-when-downgrade'></iframe>
							</center>
						</Grid.Col>
					</Grid>
				</Container>
			</div>
			<BackgroundImage
				className='img'
				src={backgroundImage}
			/>
			<div className='overlay' />
		</div>
	);
});

export default Location;
