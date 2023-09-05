"use client";

import {
	BackgroundImage,
	Grid,
	Container,
	Text,
	Image,
	Center,
} from "@mantine/core";
import { useImperativeHandle, forwardRef, useRef } from "react";

type sectionProp = {
	backgroundImage: string;
	schedule: string;
	title: string;
	message: string;
	message2: string;
};

const Schedule = forwardRef<Partial<HTMLDivElement>, sectionProp>(
	(props, ref) => {
		const { backgroundImage, schedule, title, message, message2 } = props;
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
					<Container size='md'>
						<Grid grow>
							<Grid.Col sm={12}>
								<Text
									size='2rem'
									color='giantsjj.1'>
									{title}
								</Text>
							</Grid.Col>
							<Grid.Col sm={12}>
								<Text
									size='1rem'
									color='giantsjj.1'>
									{message}
								</Text>
							</Grid.Col>
							<Grid.Col sm={12}>
								<Center>
									<div className='whiteOverlay'>
										<Image
											src={schedule}
											width={"20 rem"}
											radius={"md"}
										/>
									</div>
								</Center>
							</Grid.Col>
							<Grid.Col sm={12}>
								<Text
									size='1rem'
									color='giantsjj.1'>
									{message2}
								</Text>
							</Grid.Col>
						</Grid>
					</Container>
				</div>
				{/* Background */}
				<BackgroundImage
					className='img'
					src={backgroundImage}
				/>
				{/* <div className="overlay" /> */}
			</div>
		);
	}
);

export default Schedule;
