'use client';
import {
	TextInput,
	Checkbox,
	Button,
	Group,
	Box,
	Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
	const form = useForm({
		validateInputOnBlur: true,
		initialValues: {
			name: '',
			email: '',
			subject: '',
			comment: '',
			termsOfService: false,
		},

		// transformValues: (values) => ({
		// 	...values,
		// }),

		//Still need to fix to send from api
		// type Transformed = TransformedValues<typeof form>;
		// // -> { name: string, locationId: number }

		// const handleSubmit = (values: TransformedValues<typeof form>) => {};

		//Validation
		validate: {
			name: (value) =>
				value.length < 2
					? 'Your name must have atleast 2 letters right?'
					: null,
			email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
			comment: (value) =>
				value.length < 1 ? 'What do you want to tell us?' : null,
			// termsOfService: () => true,
		},
	});

	//Error handling
	const handleError = (errors: typeof form.errors) => {
		if (errors.name) {
			notifications.show({ message: 'Please fill name field', color: 'red' });
		} else if (errors.email) {
			notifications.show({
				message: 'Please provide a valid email',
				color: 'red',
			});
		}
	};

	//Submit on valid
	const handleSubmit = async (values: typeof form.values) => {
		const res = await fetch('@/app/api/sendgrid', {
			body: JSON.stringify({
				name: form.getInputProps('name'),
				email: form.getInputProps('email'),
				subject: form.getInputProps('subject'),
				comment: form.getInputProps('comment'),
			}),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
	};

	//////////////////////////////////////////////////////////////////
	// const handleSubmit = async (e) => {
	//   e.preventDefault();

	//   let isValidForm = handleValidation();

	//   if (isValidForm) {
	//     setButtonText("Sending");
	//     const res = await fetch("/api/sendgrid", {
	//       body: JSON.stringify({
	//         email: email,
	//         fullname: fullname,
	//         subject: subject,
	//         message: message,
	//       }),
	//       headers: {
	//         "Content-Type": "application/json",
	//       },
	//       method: "POST",
	//     });

	//     const { error } = await res.json();
	//     if (error) {
	//       console.log(error);
	//       setShowSuccessMessage(false);
	//       setShowFailureMessage(true);
	//       setButtonText("Send");
	//       return;
	//     }
	//     setShowSuccessMessage(true);
	//     setShowFailureMessage(false);
	//     setButtonText("Send");
	//   }
	//   console.log(fullname, email, subject, message);
	// };
	//////////////////////////////////////////////////////////////////

	return (
		<Box
			maw={350}
			mx='auto'>
			<form onSubmit={form.onSubmit((values) => console.log(values))}>
				<TextInput
					withAsterisk
					label='Name'
					placeholder='Full name'
					{...form.getInputProps('name')}
					classNames={{ label: 'inputLabel', input: 'inputElement' }}
				/>
				<TextInput
					withAsterisk
					label='Email'
					placeholder='your@email.com'
					{...form.getInputProps('email')}
					classNames={{ label: 'inputLabel', input: 'inputElement' }}
				/>
				<TextInput
					withAsterisk
					label='Subject'
					placeholder='Subject'
					{...form.getInputProps('subject')}
					classNames={{ label: 'inputLabel', input: 'inputElement' }}
				/>
				<Textarea
					withAsterisk
					label='Comment'
					placeholder='I like Giants JJ'
					{...form.getInputProps('comment')}
					autosize
					minRows={2}
					maxRows={5}
					classNames={{ label: 'inputLabel', input: 'inputElement' }}
				/>

				<Checkbox
					mt='md'
					label='I agree to sell my privacy'
					{...form.getInputProps('termsOfService', { type: 'checkbox' })}
					classNames={{ label: 'inputLabel', input: 'iconElement' }}
				/>

				<Group
					position='right'
					mt='md'>
					<Button type='submit'>Submit</Button>
				</Group>
			</form>
		</Box>
	);
};

export default ContactForm;
