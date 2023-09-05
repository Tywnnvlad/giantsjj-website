"use client";

import {
	TextInput,
	Checkbox,
	Button,
	Group,
	Box,
	Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

const ContactForm = () => {
	const form = useForm({
		validateInputOnBlur: true,
		initialValues: {
			name: "",
			email: "",
			subject: "",
			comment: "",
			termsOfService: false,
		},

		//Validation
		validate: {
			name: (value) =>
				value.length < 2
					? "Your name must have atleast 2 letters right?"
					: null,
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
			comment: (value) =>
				value.length < 1 ? "What do you want to tell us?" : null,
			subject: (value) => (value.length < 1 ? "Please input a subjectx" : null),
			// termsOfService: () => true,
		},
	});

	//Error handling
	const handleError = (errors: typeof form.errors) => {
		if (errors.name) {
			notifications.show({ message: "Please fill name field", color: "red" });
		} else if (errors.email) {
			notifications.show({
				message: "Please provide a valid email",
				color: "red",
			});
		}
	};

	//Submit on valid
	// const handleSubmit = async (values: typeof form.values) => {
	// 	const res = await fetch('@/app/api/sendgrid', {
	// 		body: JSON.stringify({
	// 			name: form.getInputProps('name'),
	// 			email: form.getInputProps('email'),
	// 			subject: form.getInputProps('subject'),
	// 			comment: form.getInputProps('comment'),
	// 		}),
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		method: 'POST',
	// 	});
	// };

	//////////////////////////////////////////////////////////////////
	const handleSubmit = async (e: any) => {
		// e.preventDefault();
		// e.stopPropagation();
		console.log(e);
		const res = await fetch("/api/sendgrid", {
			body: JSON.stringify(e),
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
		});

		const { error } = await res.json();
		if (error) {
			console.log(error);
			return;
		}
	};

	//////////////////////////////////////////////////////////////////

	return (
		<Box
			maw={350}
			mx='auto'>
			<form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
				<TextInput
					withAsterisk
					label='Name'
					placeholder='Full name'
					{...form.getInputProps("name")}
					classNames={{ label: "inputLabel", input: "inputElement" }}
				/>
				<TextInput
					withAsterisk
					label='Email'
					placeholder='your@email.com'
					{...form.getInputProps("email")}
					classNames={{ label: "inputLabel", input: "inputElement" }}
				/>
				<TextInput
					withAsterisk
					label='Subject'
					placeholder='Subject'
					{...form.getInputProps("subject")}
					classNames={{ label: "inputLabel", input: "inputElement" }}
				/>
				<Textarea
					withAsterisk
					label='Comment'
					placeholder='Comment'
					{...form.getInputProps("comment")}
					autosize
					minRows={2}
					maxRows={5}
					classNames={{ label: "inputLabel", input: "inputElement" }}
				/>

				<Checkbox
					mt='md'
					label='I agree to give my information to Giants Jiu-Jitsu'
					{...form.getInputProps("termsOfService", { type: "checkbox" })}
					classNames={{ label: "inputLabel", input: "iconElement" }}
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
