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

export default function Home() {
	const welcomePage = useRef(null);
	const aboutUsPage = useRef(null);
	const schedulePage = useRef(null);
	const locationPage = useRef(null);
	const imagePage = useRef(null);
	const contactUsPage = useRef(null);

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
							'#000000',
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
						logo={'/giantsjjlogoandtitle.png'}
					/>
					<Welcome
						backgroundImage={'/bg1.jpg'}
						title={'BE DANGEROUS'}
						message={'/giantstitle.png'}
						image={'/rotatinggiant.gif'}
						ref={welcomePage}
					/>
				</div>
			</MantineProvider>
		</>
	);
}
