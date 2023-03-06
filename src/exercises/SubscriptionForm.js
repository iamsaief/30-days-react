import React from 'react';

function SubscriptionForm(props) {
	return (
		<div className="container">
			<div className="p-5 bg-info bg-gradient rounded-3">
				<div className="text-center mb-5">
					<h4>Subscribe</h4>
					<p>Sign up with email to receive updates </p>
				</div>
				<form className="row gy-2 gx-3 align-items-center">
					<div className="col">
						<input type="text" className="form-control" id="autoSizingInput" placeholder="First Name" />
					</div>
					<div className="col">
						<input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Last name" />
					</div>
					<div className="col">
						<input type="email" className="form-control" id="autoSizingInputGroup" placeholder="Email address" />
					</div>
					<div className="col-12 text-center mt-4">
						<div className="d-grid gap-2 col-5 mx-auto">
							<button type="submit" className="btn btn-danger">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default SubscriptionForm;
