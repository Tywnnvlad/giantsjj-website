"use client";

import { BackgroundImage, Grid, Container, Text, Image } from "@mantine/core";
import { useImperativeHandle, forwardRef, useRef } from "react";

type sectionProp = {
	backgroundImage: string;
	title: string;
	message: string;
};

const Location = forwardRef<Partial<HTMLDivElement>, sectionProp>(
	(props, ref) => {
		const { backgroundImage, title, message } = props;
		const compRef = useRef<HTMLDivElement>(null);
		useImperativeHandle(ref, () => ({
			scrollIntoView: () => {
				compRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
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
								color: "giantsjj.1",
								fontSize: "1rem",
							}}>
							<Grid.Col sm={12}>
								<Text
									size='2rem'
									color='giantsjj.1'>
									{title}
								</Text>
							</Grid.Col>
							{/* <Grid.Col sm={12}>
								<Text
									size='1.3rem'
									color='giantsjj.1'>
									{message}
								</Text>
							</Grid.Col> */}

							{/* Need to fix and resize for smaller */}
							<Grid.Col sm={12}>
								<center>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303586.109415012!2d-113.82236805725938!3d53.52622728846553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB!5e0!3m2!1sen!2sca!4v1693870566006!5m2!1sen!2sca'
										width='600'
										height='550'
										style={{ border: 0 }}
										allowFullScreen={true}
										loading='lazy'
										// referrerpolicy='no-referrer-when-downgrade'
									></iframe>
								</center>
							</Grid.Col>
						</Grid>
					</Container>
				</div>
				<BackgroundImage
					className='img'
					src={backgroundImage}
				/>
				{/* <div className="overlay" /> */}
			</div>
		);
	}
);

export default Location;
