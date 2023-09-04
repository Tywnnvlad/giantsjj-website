import {
	BackgroundImage,
	Grid,
	Container,
	Text,
	Image,
	SimpleGrid,
	Center,
	Tabs,
} from '@mantine/core';
import { useImperativeHandle, forwardRef, useRef } from 'react';

type sectionProp = {
	backgroundImage: string;
	title: string;
};

const Rules = forwardRef<Partial<HTMLDivElement>, sectionProp>((props, ref) => {
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
				<Tabs
					variant='outline'
					radius='md'
					defaultValue='gallery'>
                        <Tabs.Tab></Tabs>
                        <Tabs.Tab></Tabs>
                        <Tabs.Tab>Tabs>
                    </Tabs>
			</div>
			<BackgroundImage
				className='img'
				src={backgroundImage}
			/>
		</div>
	);
});

export default Rules;
