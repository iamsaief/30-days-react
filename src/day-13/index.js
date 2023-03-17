import React, { useRef, useState } from 'react';

const Day13 = () => {
	const inputRef = useRef(null);
	const fNameRef = useRef(null);
	const emailRef = useRef(null);
	const bioRef = useRef(null);
	const passRef = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		// if (!inputRef.current.value) {
		// 	alert(`🚫 ${inputRef.current.name} is empty`);
		// } else {
		// 	console.dir(inputRef.current);
		// 	console.log(inputRef.current.value);
		// }

		const data = {
			firstName: fNameRef.current.value,
			email: emailRef.current.value,
			password: passRef.current.value,
			bio: bioRef.current.value,
		};

		console.log(data);
	};

	return (
		<div className="container">
			<form onSubmit={handleSubmit} className="py-4">
				<h1>
					<code>Day 13</code> : Uncontrolled Component
				</h1>
				<div className="mt-1">
					<label className="form-label" htmlFor="firstName">
						First Name
					</label>
					<input
						className="form-control"
						id="fistName"
						type="text"
						name="firstName"
						placeholder="First Name"
						ref={fNameRef}
					/>
				</div>
				<div className="mt-2">
					<label className="form-label" htmlFor="email">
						Email
					</label>
					<input className="form-control" id="email" type="email" name="email" placeholder="Email" ref={emailRef} />
				</div>
				<div className="mt-2">
					<label className="form-label" htmlFor="email">
						Password
					</label>
					<input
						className="form-control"
						id="password"
						type="password"
						name="password"
						placeholder="Email"
						ref={passRef}
					/>
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
						rows="3"
						placeholder="Write about yourself ..."
						ref={bioRef}
					/>
				</div>

				<div className="d-grid mt-4">
					<button className="btn btn-primary">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Day13;
