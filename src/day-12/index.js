import React, { useState } from 'react';

const options = [
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
const selectOptions = options.map(({ value, label }) => (
	<option key={value} value={value}>
		{label}
	</option>
));

const Day12 = () => {
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

		console.log(name, value);
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, touched: { ...formData.touched, [name]: true } });
	};

	const validate = () => {
		// Object to collect error feedback and to display on the form
		const errors = {
			errorFirstName: '',
		};

		if (
			(formData.touched.firstName && formData.firstName.length < 3) ||
			(formData.touched.firstName && formData.firstName.length > 12)
		) {
			errors.errorFirstName = 'First name must be between 2 and 12';
		}
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { firstName, lastName, email, tel, dateOfBirth, favoriteColor, weight, country, gender, bio, file, skills } =
			formData;

		const formattedSkills = [];
		for (const key in skills) {
			if (skills[key]) {
				formattedSkills.push(key.toUpperCase());
			}
		}

		const data = {
			firstName,
			lastName,
			email,
			tel,
			dateOfBirth,
			favoriteColor,
			weight,
			country,
			gender,
			bio,
			file,
			skills: formattedSkills,
		};
		/*
           the is the place where we connect backend api 
           to send the data to the database
           */
		console.log(data);
	};

	const { firstName, lastName, email, tel, dateOfBirth, favoriteColor, weight, country, gender, bio } = formData;

	const { errorFirstName } = validate();
	// the noValidate attribute on the form is to stop the HTML5 built-in validation

	return (
		<div className="container">
			<h2 className="pt-3">Add Student</h2>
			<form onSubmit={handleSubmit} className="mt-3" noValidate>
				<div className="row">
					<div className="col-6">
						<label className="form-label" htmlFor="firstName">
							First Name
						</label>
						<input
							className="form-control"
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
							Last Name
						</label>
						<input
							className="form-control"
							type="text"
							name="lastName"
							value={lastName}
							onChange={handleChange}
							placeholder="Last Name"
						/>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="email">
							Email
						</label>
						<input
							className="form-control"
							type="email"
							name="email"
							value={email}
							onChange={handleChange}
							placeholder="Email"
						/>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="tel">
							Telephone
						</label>
						<input
							className="form-control"
							type="tel"
							name="tel"
							value={tel}
							onChange={handleChange}
							placeholder="Tel"
						/>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="dateOfBirth">
							Date of birth
						</label>
						<input
							className="form-control"
							type="date"
							name="dateOfBirth"
							value={dateOfBirth}
							onChange={handleChange}
							placeholder="Date of Birth"
						/>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="favoriteColor">
							Favorite Color
						</label>
						<input
							className="form-control form-control-color"
							type="color"
							id="color"
							name="color"
							value={favoriteColor}
							onChange={handleChange}
							placeholder="Favorite Color"
						/>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="weight">
							Weight
						</label>
						<input
							className="form-control"
							type="number"
							id="weight"
							name="weight"
							value={weight}
							onChange={handleChange}
							placeholder="Weight in Kg"
						/>
					</div>
					<div className="col-6">
						<label className="form-label" htmlFor="country">
							Country
						</label>
						<br />
						<select className="form-select" name="country" onChange={handleChange} id="country">
							{selectOptions}
						</select>
					</div>
					<fieldset className="col-6">
						<legend className="fs-6">Gender</legend>
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
					</fieldset>
					<fieldset className="col-6">
						<legend className="fs-6">Select your skills</legend>
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
					</fieldset>
				</div>

				<div className="mb-3">
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

				<div className="mb-3">
					<input className="form-control" type="file" name="file" onChange={handleChange} />
				</div>
				<button className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default Day12;
