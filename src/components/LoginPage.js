import React from 'react'
import "../components/login.css"


export default function LoginPage() {
  return (
    <div>
 	<div className="container">
		<div className="row justify-content-center">
			<div className="col-md-6">
				<div className="card">
					<div className="card-header text-center">
						<h4>Sign in to your account</h4>
					</div>
					<div className="card-body">
						<form>
							<div className="form-group">
								<label for="email">Email address:</label>
								<input type="email" className="form-control" id="email" placeholder="Enter email"/>
							</div>
							<div className="form-group">
								<label for="password">Password:</label>
								<input type="password" className="form-control" id="password" placeholder="Enter password"/>
							</div>
							<div className="form-group form-check">
								
							</div>
							<button type="submit" className="btn btn-primary btn-block">Sign in</button>
						</form>
						<hr/>
						<p className="text-center">
							<a href="/">Forgot password?</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	

    </div>
  )
}
