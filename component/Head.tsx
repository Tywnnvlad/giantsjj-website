"use client";

import { useState } from "react";
import {
	AppShell,
	Header,
	Text,
	MediaQuery,
	Burger,
	useMantineTheme,
	SimpleGrid,
	Button,
	Image,
	Center,
} from "@mantine/core";

import giantslogoandtitle from "../public/giantsjjlogoandtitle.png";
import giantslogo from "../assets/giantslogo.png";
import giantstitle from "../assets/giantstitle.png";

const Head = ({
	refToWelcomePage,
	refToAboutUsPage,
	refToSchedulePage,
	refToLocationPage,
	refToImagePage,
	refToContactUsPage,
	refToRulePage,
	logo,
}) => {
	const theme = useMantineTheme();

	const [opened, setOpened] = useState(false);

	const scrolltoWelcome = () => {
		if (refToWelcomePage.current) {
			refToWelcomePage.current.scrollIntoView();
		}
	};

	const scrolltoAbout = () => {
		if (refToAboutUsPage.current) {
			refToAboutUsPage.current.scrollIntoView();
		}
	};

	const scrolltoSchedule = () => {
		if (refToSchedulePage.current) {
			refToSchedulePage.current.scrollIntoView();
		}
	};
	const scrolltoLocation = () => {
		if (refToLocationPage.current) {
			refToLocationPage.current.scrollIntoView();
		}
	};
	const scrolltoImage = () => {
		if (refToImagePage.current) {
			refToImagePage.current.scrollIntoView();
		}
	};
	const scrolltoContactUs = () => {
		if (refToContactUsPage.current) {
			refToContactUsPage.current.scrollIntoView();
		}
	};
	const scrolltoRule = () => {
		if (refToRulePage.current) {
			refToRulePage.current.scrollIntoView();
		}
	};

	return (
		<AppShell
			styles={{
				main: {
					//background on dark and light mode
					background:
						theme.colorScheme === "dark"
							? theme.colors.giantsjj[2]
							: theme.colors.giantsjj[6],
				},
			}}
			header={
				<Header
					height={{ base: 50, md: 60 }}
					p='md'
					style={{
						background: "#42382C",
						border: "0px",
						opacity: "0.8",
					}}>
					<div
						style={{
							margin: 0,
							padding: 0,
							display: "flex",
							alignItems: "center",
							height: "100%",
							justifyContent: "space-between",
						}}>
						{/* When small */}
						<MediaQuery
							largerThan='sm'
							styles={{ display: "none" }}>
							<Burger
								opened={opened}
								onClick={() => setOpened((o) => !o)}
								size='sm'
								color={theme.colors.gray[6]}
								mr='xl'
							/>
						</MediaQuery>

						{/* When small? */}
						<MediaQuery
							largerThan='xs'
							styles={{
								display: "none",
							}}>
							<SimpleGrid
								cols={2}
								spacing={3}
								// style={{
								// 	justifyItems: 'end',
								// }}
							>
								<Center>
									<Image
										src={logo}
										maw={"9rem"}
									/>
								</Center>

								{/* <Image
                  src={giantslogo}
                  width="3rem"
                  fit="scale-down"
                />
                <Image
                  src={giantstitle}
                  width="6.5rem"
                  fit="scale-down"
                /> */}
							</SimpleGrid>
						</MediaQuery>

						<MediaQuery
							smallerThan='xs'
							styles={{ display: "none" }}>
							<SimpleGrid
								onClick={scrolltoWelcome}
								cols={2}
								spacing={3}
								style={{
									alignItems: "center",
									justifyItems: "end",
									cursor: "pointer",
								}}>
								<Image
									src={logo}
									maw={"12rem"}
								/>
								{/* <Image
									src={giantslogo}
									width='3rem'
									fit='scale-down'
								/>

								<Image
									src={giantstitle}
									width='7rem'
									fit='scale-down'
								/> */}
							</SimpleGrid>
						</MediaQuery>
						{/* When big */}
						<MediaQuery
							smallerThan='sm'
							styles={{ display: "none" }}>
							<SimpleGrid
								className='headerButton'
								cols={6}>
								<Button onClick={scrolltoAbout}>About Us</Button>
								<Button onClick={scrolltoSchedule}>Schedule</Button>
								<Button onClick={scrolltoLocation}>Location</Button>
								<Button onClick={scrolltoImage}>Image</Button>
								<Button onClick={scrolltoRule}>Rules</Button>
								<Button onClick={scrolltoContactUs}>Contact Us</Button>
							</SimpleGrid>
						</MediaQuery>
						{/* <Text>Application header</Text> */}
					</div>
				</Header>
			}>
			{/* <Text>Resize app to see responsive navbar in action</Text> */}
		</AppShell>
	);
};

export default Head;
