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
import { useState } from "react";

// const [name, setName] = useState("");
// const [email, setemail] = useState("");
// const [subject, setSubject] = useState("");
// const [comment, setComment] = useState("");

const ContactForm = () => {

  const form = useForm({
    validateInputOnBlur: true ,
    initialValues: {
      name: "",
      email: "",
      subject: "",
      comment: "",
      termsOfService: false,
    },

    validate: {
      name: (value) =>
        value.length < 2
          ? "Your name must have atleast 2 letters right?"
          : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      comment: (value) =>(value.length < 1 ? "What do you want to tell us?" : null),
      // termsOfService: () => true,
    },
  });

  return (
    <Box
      maw={350}
      mx="auto"
    >
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        // style={{
        //   color: "giantsjj.1",
        // }}
      >
        <TextInput
          withAsterisk
          label="Name"
          placeholder="Full name"
          {...form.getInputProps("name")}
          classNames={{ label: "inputLabel", input: "inputElement" }}
        />
        <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps("email")}
          classNames={{ label: "inputLabel", input: "inputElement" }}
        />
        <TextInput
          withAsterisk
          label="Subject"
          placeholder="Subject"
          {...form.getInputProps("subject")}
          classNames={{ label: "inputLabel", input: "inputElement" }}
        />
        <Textarea
          withAsterisk
          label="Comment"
          placeholder="I like Giants JJ"
          {...form.getInputProps("comment")}
          autosize
          minRows={2}
          maxRows={5}
          classNames={{ label: "inputLabel", input: "inputElement" }}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
          classNames={{ label: "inputLabel", input: "iconElement" }}
        />

        <Group
          position="right"
          mt="md"
        >
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
};

export default ContactForm;
