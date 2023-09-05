'use client';
import { useRef } from 'react';
import Image from 'next/image';

import styles from './page.module.css';
import { MantineProvider, Text, Button } from '@mantine/core';

import React from 'react';
import ReactDOM from 'react-dom/client';

import Head from '@/component/Head';
import Welcome from '@/component/Welcome';
import Location from '@/component/Location';
import Images from '@/component/Images';
import Aboutus from '@/component/Aboutus';
import Schedule from '@/component/Schedule';
import ContactPage from '@/component/ContactPage';
import Rules from '@/component/Rules';

export default function Home() {
	const welcomePage = useRef(null);
	const aboutUsPage = useRef(null);
	const schedulePage = useRef(null);
	const locationPage = useRef(null);
	const imagePage = useRef(null);
	const contactUsPage = useRef(null);
	const rulePage = useRef(null);

	return (
		<>
			<MantineProvider
				withCSSVariables
				withNormalizeCSS
				withGlobalStyles
				theme={{
					colors: {
						giantsjj: [
							'#A19D99',
							'#948573',
							'#797670',
							'#806F5F',
							'#776A57',
							'#745F48',
							'#42382C',
							'#322E2A',
							'#1B1816',
							'#1B1816',
						],
					},
					primaryColor: 'giantsjj',
				}}>
				<div className='container'>
					<Head
						refToWelcomePage={welcomePage}
						refToAboutUsPage={aboutUsPage}
						refToSchedulePage={schedulePage}
						refToLocationPage={locationPage}
						refToImagePage={imagePage}
						refToContactUsPage={contactUsPage}
						refToRulePage={rulePage}
						logo={'/giantsjjlogoandtitle.png'}
					/>
					<Welcome
						backgroundImage={'/bg1.jpg'}
						title={'BE DANGEROUS'}
						message={'/giantstitle.png'}
						image={'/rotatinggiant.gif'}
						message2={'Sign up on January 2024 to get a free t-shirt!'}
						ref={welcomePage}
					/>
					<Aboutus
						title='About Us'
						message='Jonah and Parker Edmundson have been training no-gi Jiu Jitsu since July 2020. Jonah earned his purple belt in 2023 under Sterling Redlack of RDC Jiu Jitsu, and Parker earned his blue belt in 2022 under Craig Shintani of Kingdom MMA. The Edmundsons bring a fun, modern approach to the grappling arts, and aim to provide an enjoyable training environment for both hobbyists and competitive athletes. Unique features of Giants Jiu Jitsu include the exclusive focus on no-gi grappling, as well as the weekly wrestling-only and leglock-only classes. Overall, Giants Jiu Jitsu provides members with a fun, competitive training environment and high level grappling instruction.'
						backgroundImage={'/bg2.jpg'}
						pic1={'/aboutJonah.jpg'}
						pic2={'/aboutParker.jpg'}
						about1='Jonah Edmundson'
						about2='Parker Edmundson'
						ref={aboutUsPage}
					/>
					<Schedule
						backgroundImage={'/bg3.jpg'}
						schedule={'/current_schedule.png'}
						title={'Schedule'}
						message={' Does not include holidays.'}
						message2={
							'Fundamentals is the beginners-level class and is preferred during your first 6 months of training. However, everyone is also welcome to the All Levels class.'
						}
						ref={schedulePage}
					/>
					<Location
						backgroundImage={'/bg4.jpg'}
						title={'Location'}
						message={'Where you can find our mojo dojo.'}
						ref={locationPage}
					/>
					{/* Feex the carousel */}
					<Images
						backgroundImage={'/bg5.jpg'}
						title={'Gallery'}
						message={'Snippets from our dojo.'}
						img={''}
						ref={imagePage}
					/>
					<Rules
						title='Title'
						backgroundImage={'/bg7.jpg'}
						ref={rulePage}
					/>
					<ContactPage
						backgroundImage={'/bg6.jpg'}
						title={'Contact Us'}
						ref={contactUsPage}
					/>

					<div className='overlay' />
				</div>
			</MantineProvider>
		</>
	);
}
