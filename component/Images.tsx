'use client';
import { BackgroundImage, Grid, Container, Text, Image } from '@mantine/core';
import { useImperativeHandle, forwardRef, useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import image1 from '@/public/bg1.jpg';
import image2 from '@/public/bg2.jpg';
import image3 from '@/public/bg3.jpg';

const images = [image1, image2, image3];

type sectionProp = {
	backgroundImage: string;
	img: string;
	title: string;
	message: string;
};

const slides = images.map((url) => (
	<Carousel.Slide key={url}>
		<Image src={url} />
	</Carousel.Slide>
));

const Images = forwardRef<Partial<HTMLDivElement>, sectionProp>(
	(props, ref) => {
		const { backgroundImage, img, title, message } = props;
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
						<Grid
							grow
							style={{
								color: 'giantsjj.1',
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
									size='1.5rem'
									color='giantsjj.1'>
									{message}
								</Text>
							</Grid.Col> */}
							{/* Need to fix and resize for smaller */}
							{/* <Grid.Col
              xl={12}
              style={{ minHeight: "600px" }}
            >
              <center>
                <Carousel
                  maw={900}
                  miw={550}
                  mx="0"
                  withIndicators
                  loop
                >
                  {slides}
                </Carousel>
              </center>
            </Grid.Col> */}
						</Grid>
					</Container>
				</div>

				{/* break */}

				<BackgroundImage
					className='img'
					src={backgroundImage}
				/>
				{/* <div className="overlay" /> */}
			</div>
		);
	}
);

export default Images;
