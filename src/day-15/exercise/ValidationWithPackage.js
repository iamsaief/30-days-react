import React, { useRef, useState } from 'react';
import validator from 'validator';

const ValidationWithPackage = () => {
	const formRef = useRef(null);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		skills: {
			html: false,
			css: false,
			javascript: false,
		},
		touched: {
			firstName: false,
			lastName: false,
			email: false,
			password: false,
		},
	});

	const handleChange = (e) => {
		const { name, value, type } = e.target;

		setFormData({ ...formData, [name]: value });
	};

	const handleBlur = (e) => {
		const { name, value, type } = e.target;

		setFormData({ ...formData, touched: { ...formData.touched, [name]: true } });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const { touched } = formData;

		const formEntries = Object.assign(touched);

		const newTouched = {};
		for (let entry in formEntries) {
			if (!formEntries[entry].length) {
				newTouched[entry] = true;
			} else {
				newTouched[entry] = false;
			}
		}

		setFormData({ ...formData, touched: { ...formData.touched, ...newTouched } });

		console.log(formData);
	};

	const validateFields = () => {
		const errorMessages = {};

		const { firstName, lastName, email, password, touched } = formData;

		const isValidFname = validator.isLength(firstName, { min: 3, max: 8 });
		const isValidLname = validator.isLength(lastName, { min: 3, max: 8 });
		const isValidEmail = validator.isEmail(email);
		const isValidPassword = validator.isStrongPassword(password, {
			minLength: 6,
			minLowercase: 1,
			minUppercase: 1,
			minNumbers: 1,
			minSymbols: 1,
		});

		if (touched.firstName && !isValidFname) {
			errorMessages.errFname = 'Name must be between 3 to 8 characters';
		}

		if (touched.lastName && !isValidLname) {
			errorMessages.errLname = 'Name must be between 3 to 8 characters';
		}

		if (touched.email && !isValidEmail) {
			errorMessages.errEmail = 'Invalid email address';
		}

		if (touched.password && !isValidPassword) {
			console.log(password);
			errorMessages.errPassword =
				'Password must be min 6 character and at least 1 lowercase, uppercase, number and symbol';
		}

		return errorMessages;
	};

	const { firstName, lastName, email, password } = formData;

	const { errFname, errLname, errEmail, errPassword } = validateFields();

	return (
		<div>
			<div className="py-3">
				<h1>Form Validation with Package</h1>
				<form onSubmit={handleSubmit} className="mt-3" noValidate ref={formRef}>
					<div className="row row-gap-3">
						<div className="">
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
							<small className="text-danger">{errFname}</small>
						</div>
						<div className="mt-2">
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
							<small className="text-danger">{errLname}</small>
						</div>
						<div className="mt-2">
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
							<small className="text-danger">{errEmail}</small>
						</div>
						<div className="mt-2">
							<label className="form-label" htmlFor="password">
								Password *
							</label>
							<input
								className="form-control"
								id="password"
								type="password"
								name="password"
								value={password}
								onChange={handleChange}
								onBlur={handleBlur}
								placeholder="Password"
							/>
							<small className="text-danger">{errPassword}</small>
						</div>
					</div>

					<div className="d-grid mt-4">
						<button className="btn btn-primary">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ValidationWithPackage;
