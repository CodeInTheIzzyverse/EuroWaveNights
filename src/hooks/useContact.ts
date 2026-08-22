import React, { useState } from "react";

export interface ContactFormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const INITIAL_FORM_DATA: ContactFormData = {
	name: "",
	email: "",
	subject: "",
	message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const useContact = () => {
	const [formData, setFormData] =
		useState<ContactFormData>(INITIAL_FORM_DATA);
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [successInfo, setSuccessInfo] = useState<{
		message?: string;
		id?: string;
	}>({});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Client-side validations matching server requirements
		if (!formData.name || formData.name.trim().length < 2) {
			setStatus("error");
			setErrorMessage("Name must be at least 2 characters.");
			return;
		}

		if (!formData.email || !EMAIL_REGEX.test(formData.email.trim())) {
			setStatus("error");
			setErrorMessage("Provided email is not valid.");
			return;
		}

		if (!formData.subject || formData.subject.trim().length < 3) {
			setStatus("error");
			setErrorMessage("Subject must be at least 3 characters.");
			return;
		}

		if (!formData.message || formData.message.trim().length < 10) {
			setStatus("error");
			setErrorMessage("Message must be at least 10 characters.");
			return;
		}

		setStatus("submitting");
		setErrorMessage("");

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok || !data.success) {
				throw new Error(
					data.message ||
						data.error ||
						"Failed to dispatch transmission.",
				);
			}

			setSuccessInfo({
				message: data.message,
				id: data.id,
			});
			setStatus("success");
		} catch (err: unknown) {
			console.error("Contact transmission failure:", err);
			setStatus("error");
			setErrorMessage(
				err instanceof Error
					? err.message
					: "An error occurred while sending the email.",
			);
		}
	};

	const handleReset = () => {
		setFormData(INITIAL_FORM_DATA);
		setStatus("idle");
		setErrorMessage("");
		setSuccessInfo({});
	};

	return {
		formData,
		status,
		errorMessage,
		successInfo,
		handleChange,
		handleSubmit,
		handleReset,
	};
};
