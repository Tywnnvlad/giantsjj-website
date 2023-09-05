import {
	BackgroundImage,
	Grid,
	Container,
	Text,
	Image,
	SimpleGrid,
	Center,
	Tabs,
	List,
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
				<Container size='md'>
					<Grid>
						<Grid.Col xs={12}>
							<Text
								size='2rem'
								color='giantsjj.1'>
								Membership
							</Text>
							<List
								size='md'
								className='membershipText'
								withPadding>
								<List.Item>$140 per month, unlimited classes </List.Item>
								<List.Item>First week free</List.Item>
								<List.Item>No registration or cancellation fees</List.Item>
								<List.Item>
									Month-by-month basis, no long-term contracts
								</List.Item>
								<List.Item>1 week cancellation notice</List.Item>
								<List.Item>Brown and black belts train 50% off </List.Item>
							</List>
						</Grid.Col>
						<Grid.Col sm={12}>
							<Center>
								<Tabs
									className='ruleTab'
									color='giantsjj'
									variant='default'
									radius='md'
									defaultValue='firstclass'>
									<Tabs.List
										className='ruleList'
										color='giantsjj'
										position='center'>
										<Tabs.Tab
											value='firstclass'
											className='tabList'>
											First Class
										</Tabs.Tab>
										<Tabs.Tab
											value='rules'
											className='tabList'>
											Rules
										</Tabs.Tab>
									</Tabs.List>
									<Tabs.Panel value='firstclass'>
										<Text className='tabText'>
											Each class starts with a 5 minute warmup and stretch. Then
											we do drills (repeat movements to develop muscle memory),
											and then learn a few new techniques. Each class finishes
											with 20-30 minutes of live sparring, which is called
											“rolling.” After class, we will leave the mats open for
											10-15 minutes to allow for stretching and additional
											rounds. Rolling on your first few classes is optional, but
											encouraged {'\n'}
										</Text>
										<Text className='tabText'>
											Here is an additional (optional) resource to help you to
											prepare for your first class:
											https://diazcombatsports.com/2020/01/the-basic-positions-submissions-used-in-brazilian-jiu-jitsu
											/.
										</Text>
										<Text className='tabText'>First Class</Text>
									</Tabs.Panel>
									<Tabs.Panel value='rules'>TESTTT TSST</Tabs.Panel>
								</Tabs>
							</Center>
						</Grid.Col>
					</Grid>
				</Container>
			</div>
			<BackgroundImage
				className='img'
				src={backgroundImage}
			/>
		</div>
	);
});

export default Rules;
