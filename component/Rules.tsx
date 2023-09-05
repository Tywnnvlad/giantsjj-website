'use client';

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
	Anchor,
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
						<Container className='membershipTab'>
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
						</Container>
						<Grid.Col sm={12}>
							<Center>
								<Tabs
									className='ruleTab'
									color='giantsjj'
									variant='pills'
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
											prepare for your first class:{' '}
											<Anchor
												href='https://diazcombatsports.com/2020/01/the-basic-positions-submissions-used-in-brazilian-jiu-jitsu
												'
												className='linkText'
												target='_blank'>
												Link
											</Anchor>
										</Text>
										<Text className='tabText'>First Class</Text>
										<List
											size='md'
											className='tabText'
											withPadding>
											<List.Item>Show up 20 minutes early.</List.Item>
											<List.Item>
												Sign the liability waiver (in person).
											</List.Item>
											<List.Item>Read the rules.</List.Item>
											<List.Item>
												Bring the appropriate clothes (shirt, shorts with no
												pockets, velcro or zippers, and flip flops)
											</List.Item>
										</List>
										{/* Rules */}
									</Tabs.Panel>
									<Tabs.Panel value='rules'>
										<Text className='tabText'>Rules for Students</Text>
										<List
											size='md'
											className='tabText'
											withPadding>
											<List.Item>
												<b>Respect the tap.</b> This is the most important rule…
												repeat offenders will be banned permanently
											</List.Item>
											<List.Item>
												You must sign a liability waiver to train.
											</List.Item>
											<List.Item>
												<b>Be clean.</b> Change rash guards between classes. If
												you see a rash or something you suspect could be
												ringworm, ask a coach. Shower as soon as possible after
												class. ● Clip your nails. No one likes getting scratched
												up.
											</List.Item>
											<List.Item>
												Prioritize learning. Don’t try to kill each other. Know
												your partner's pace
											</List.Item>
											<List.Item>
												No slams. If you pick your partner up off the ground, it
												is your responsibility to put them back down again
												gently.
											</List.Item>
											<List.Item>
												Remove all jewelry. It’ll get broken or scratch someone
											</List.Item>
											<List.Item>
												All leg locks are legal. Be gentle with heel hooks and
												while reaping the knee. This is training, not a
												competition.
											</List.Item>
											<List.Item>Illegal techniques include:</List.Item>
											<List
												withPadding
												className='tabText'>
												<List.Item>Scissor leg takedown</List.Item>
												<List.Item>Suplex (this is a slam)</List.Item>
												<List.Item>
													Single digit manipulation (grabbing single toes and
													fingers)
												</List.Item>
												<List.Item>
													{' '}
													<List.Item>Scissor leg takedown</List.Item>
												</List.Item>
												<List.Item>Hair pulling</List.Item>
												<List.Item>
													Striking (punches, kicks, slaps, knees, elbows, etc.),
													with the exception of combat jiu jitsu
												</List.Item>
												<List.Item>
													Intentionally crushing family jewels
												</List.Item>
												<List.Item>Eye gouging</List.Item>
												<List.Item>
													No flying armbars/triangles or jumping closed guard
													before purple belt
												</List.Item>
												<List.Item>Scissor leg takedown</List.Item>
											</List>
											<List.Item>
												Wear flip flops off the mat. It’s gross not to.
											</List.Item>
											<List.Item>Dress code:</List.Item>
											<List
												withPadding
												className='tabText'>
												<List.Item>Men</List.Item>
												<List
													withPadding
													className='tabText'>
													<List.Item>
														Medium to tight fitting shirt or rashguard,
														rashguard preferred
													</List.Item>
													<List.Item>
														Shorts without pockets, velcro or zippers
													</List.Item>
													<List.Item>No jewelry</List.Item>
												</List>
												<List.Item>Women</List.Item>
												<List
													withPadding
													className='tabText'>
													<List.Item>
														Medium to tight fitting shirt or rashguard,
														rashguard preferred
													</List.Item>
													<List.Item>
														Shorts that extend to at least your fingertips when
														your hands are at your sides, no pockets, velcro or
														zippers
													</List.Item>
													<List.Item>
														Leggings permitted, but you still need shorts
													</List.Item>
													<List.Item>No jewelry</List.Item>
												</List>
											</List>
										</List>
									</Tabs.Panel>
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
