import React, { useState } from 'react';

const optionsArr = [
	{
		value: '',
		label: '-- Select Country--',
	},
	{
		value: 'Finland',
		label: 'Finland',
	},
	{
		value: 'Sweden',
		label: 'Sweden',
	},
	{
		value: 'Norway',
		label: 'Norway',
	},
	{
		value: 'Denmark',
		label: 'Denmark',
	},
];

// mapping the options to list(array) of JSX options
const selectOptions = optionsArr.map(({ value, label }) => (
	<option key={value} value={value}>
		{label}
	</option>
));

const FormValidation = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		country: '',
		tel: '',
		dateOfBirth: '',
		favoriteColor: '',
		weight: '',
		gender: '',
		file: '',
		bio: '',
		skills: {
			html: false,
			css: false,
			javascript: false,
		},
		touched: {
			firstName: false,
			lastName: false,
			email: false,
			tel: false,
			dateOfBirth: false,
			weight: false,
			country: false,
			gender: false,
			skills: false,
		},
	});

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;

		if (type === 'checkbox') {
			setFormData({
				...formData,
				skills: { ...formData.skills, [name]: checked },
			});
		} else if (type === 'file') {
			setFormData({ ...formData, [name]: e.target.files[0] });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, touched: { ...formData.touched, [name]: true } });
	};

	const validateFields = () => {
		// Object to collect error feedback and to display on the form
		const errorMsgs = {};

		if (formData.touched.gender && formData.gender.length === 0) {
			errorMsgs.errorGender = 'Select a gender';
		}

		const hasSkills = Object.values(formData.skills).some((item) => item === true);
		if (formData.touched.skills && !hasSkills) {
			errorMsgs.errorSkills = 'Select at least one skill';
		}

		if (
			(formData.touched.firstName && formData.firstName.length < 2) ||
			(formData.touched.firstName && formData.firstName.length > 12)
		) {
			errorMsgs.errorFirstName = 'First name must be between 2 and 12';
		}
		if (
			(formData.touched.lastName && formData.lastName.length < 2) ||
			(formData.touched.lastName && formData.lastName.length > 12)
		) {
			errorMsgs.errorLastName = 'Last name must be between 2 and 12';
		}

		/**
		 * Email validation RegEx
		 * @param {*} email
		 * @returns
		 */
		const validateEmail = (email) => {
			return email.match(
				/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
		};

		if (formData.touched.email && !validateEmail(formData.email)) {
			errorMsgs.errorEmail = 'Email address is invalid';
		}

		/**
		 * Phone Number validation RegEx
		 * valid formats: (123) 456-7890, (123)456-7890, 123-456-7890, or 01234567890
		 * @param {*} phoneNumber
		 * @returns
		 */
		const validatePhone = (phoneNumber) => {
			return phoneNumber.match(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{5})$/);
		};

		if (formData.touched.tel && !validatePhone(formData.tel)) {
			errorMsgs.errorPhoneNum = 'Phone number is invalid';
		}

		if (formData.touched.dateOfBirth && !Date.parse(formData.dateOfBirth)) {
			errorMsgs.errorDob = 'Date is invalid';
		}

		if (formData.touched.weight && formData.weight < 30) {
			errorMsgs.errorWeight = 'Weight must be 30kg or more';
		}
		if (formData.touched.country && formData.country.length <= 0) {
			errorMsgs.errorCountry = 'Please select a country';
		}

		return errorMsgs;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { firstName, lastName, email, tel, dateOfBirth, weight, country, gender, skills, touched } = formData;

		const formattedSkills = [];
		for (const key in skills) {
			if (skills[key]) {
				formattedSkills.push(key.toUpperCase());
			}
		}

		const data = {
			...formData,
			skills: formattedSkills,
		};

		const noSkills = Object.values(skills).some((item) => item === false);

		if (
			firstName.length === 0 &&
			lastName.length === 0 &&
			email.length === 0 &&
			tel.length === 0 &&
			dateOfBirth.length === 0 &&
			weight.length === 0 &&
			country.length === 0 &&
			gender.length === 0 &&
			noSkills
		) {
			setFormData({
				...formData,
				touched: {
					...formData.touched,
					firstName: true,
					lastName: true,
					email: true,
					tel: true,
					dateOfBirth: true,
					weight: true,
					country: true,
					gender: true,
					skills: true,
				},
			});
		} else {
			console.log(data);
		}
	};

	const { firstName, lastName, email, tel, dateOfBirth, favoriteColor, weight, country, gender, bio } = formData;

	const {
		errorFirstName,
		errorLastName,
		errorEmail,
		errorPhoneNum,
		errorDob,
		errorWeight,
		errorCountry,
		errorGender,
		errorSkills,
	} = validateFields();

	// the 'noValidate' attribute on the form is to stop the HTML5 built-in validation

	return (
		<div className="py-3">
			<h1>Form Validation</h1>
			<form onSubmit={handleSubmit} className="mt-3" noValidate>
				<div className="row row-gap-3">
					<div className="col-6">
						<label className="form-label" htmlFor="firstName">
							First Name *
						</label>
						<input
							className="form-control"
							id="fistName"
							type="text"
							name="firstName"
							value={firstName}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="First Name"
						/>
						<small className="text-danger">{errorFirstName}</small>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="lastName">
							Last Name *
						</label>
						<input
							className="form-control"
							id="lastName"
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Last Name"
						/>
						<small className="text-danger">{errorLastName}</small>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="email">
							Email *
						</label>
						<input
							className="form-control"
							id="email"
							type="email"
							name="email"
							value={email}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Email"
						/>
						<small className="text-danger">{errorEmail}</small>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="tel">
							Telephone *
						</label>
						<input
							className="form-control"
							type="tel"
							name="tel"
							value={tel}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Tel"
						/>
						<small className="text-danger">{errorPhoneNum}</small>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="dateOfBirth">
							Date of birth *
						</label>
						<input
							className="form-control"
							id="dateOfBirth"
							type="date"
							name="dateOfBirth"
							value={dateOfBirth}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Date of Birth"
						/>
						<small className="text-danger">{errorDob}</small>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="favoriteColor">
							Favorite Color
						</label>
						<input
							className="form-control form-control-color"
							type="color"
							id="favoriteColor"
							name="favoriteColor"
							value={favoriteColor}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Favorite Color"
						/>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="weight">
							Weight *
						</label>
						<input
							className="form-control"
							type="number"
							id="weight"
							name="weight"
							value={weight}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder="Weight in Kg"
						/>
						<small className="text-danger">{errorWeight}</small>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="country">
							Country *
						</label>
						<select
							className="form-select"
							id="country"
							name="country"
							value={country}
							onChange={handleChange}
							onBlur={handleBlur}
						>
							{selectOptions}
						</select>
						<small className="text-danger">{errorCountry}</small>
					</div>
					<fieldset className="col-6">
						<legend className="fs-6">Gender *</legend>
						<div className="form-check">
							<input
								className="form-check-input"
								type="radio"
								id="female"
								name="gender"
								value="Female"
								onChange={handleChange}
								checked={gender === 'Female'}
							/>
							<label className="form-check-label" htmlFor="female">
								Female
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								id="male"
								type="radio"
								name="gender"
								value="Male"
								onChange={handleChange}
								checked={gender === 'Male'}
							/>
							<label className="form-check-label" htmlFor="male">
								Male
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								id="other"
								type="radio"
								name="gender"
								value="Other"
								onChange={handleChange}
								checked={gender === 'Other'}
							/>
							<label className="form-check-label" htmlFor="other">
								Other
							</label>
						</div>
						<small className="text-danger">{errorGender}</small>
					</fieldset>
					<fieldset className="col-6">
						<legend className="fs-6">Skills *</legend>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="html" name="html" onChange={handleChange} />
							<label className="form-check-label" htmlFor="html">
								HTML
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" id="css" name="css" onChange={handleChange} />
							<label className="form-check-label" htmlFor="css">
								CSS
							</label>
						</div>
						<div className="form-check">
							<input
								className="form-check-input"
								type="checkbox"
								id="javascript"
								name="javascript"
								onChange={handleChange}
							/>
							<label className="form-check-label" htmlFor="javascript">
								JavaScript
							</label>
						</div>
						<small className="text-danger">{errorSkills}</small>
					</fieldset>
				</div>

				<div className="mt-3">
					<label className="form-label" htmlFor="bio">
						Bio
					</label>
					<br />
					<textarea
						className="form-control"
						id="bio"
						name="bio"
						value={bio}
						onChange={handleChange}
						rows="3"
						placeholder="Write about yourself ..."
					/>
				</div>

				<div className="mt-3">
					<input className="form-control" type="file" name="file" onChange={handleChange} />
				</div>
				<div className="d-grid mt-4">
					<button className="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default FormValidation;
