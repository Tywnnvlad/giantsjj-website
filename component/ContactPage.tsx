'use client';

import {
	BackgroundImage,
	Grid,
	Container,
	Text,
	Image,
	SimpleGrid,
	Center,
} from '@mantine/core';
import { useImperativeHandle, forwardRef, useRef } from 'react';
import ContactForm from './ContactForm';

type sectionProp = {
	backgroundImage: string;
	title: string;
};

const ContactPage = forwardRef<Partial<HTMLDivElement>, sectionProp>(
	(props, ref) => {
		const { backgroundImage, title } = props;
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
					<Container size='md'>
						<Grid>
							<Grid.Col sm={12}>
								{' '}
								<Text
									size='2rem'
									color='giantsjj.1'>
									{title}
								</Text>
							</Grid.Col>
							<Grid.Col sm={12}>
								<ContactForm />
								{/* <Demo /> */}
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

export default ContactPage;
