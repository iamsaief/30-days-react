import React from 'react';

const UserCardExercise = ({ user: { firstName, lastName, image, skills } }) => {
	return (
		<div className="container">
			<h4 className="text-center mb-4">User Card</h4>
			<div className="card mb-3">
				<div className="card-body">
					<div>
						<img src={image} className="card-img-top rounded-circle w-25" alt={firstName} />
					</div>
					<br />
					<h5 className="card-title">
						{`${firstName} ${lastName}`} <i className="bi bi-patch-check-fill text-info"></i>
					</h5>
					<p className="card-text">Senior React Engineer, Canada</p>
					<h5 className="card-title">Skills</h5>
					<div className="btn-wrapper mb-3">
						{skills.map((skill) => (
							<span key={skill} className="badge bg-info me-1 text-uppercase">
								{skill}
							</span>
						))}
					</div>
					<p className="card-text">
						<small className="text-muted">Last updated 3 mins ago</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default UserCardExercise;
