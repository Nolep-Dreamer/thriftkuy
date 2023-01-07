import React from 'react';
import { Link } from 'react-router-dom';
import illustration2 from '/assets/illustration2.png';

export default function LoginPage() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Register!</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            enim.
          </p>
          <img src={illustration2} alt="" width={700} />
        </div>
        <div className="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input-bordered input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input-bordered input"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input-bordered input"
              />
              <Link to="/login">
                <label className="label">
                  <span href="#" className="link-hover label-text-alt link">
                    Already have an account? Login
                  </span>
                </label>
              </Link>
            </div>
            <div className="form-control mt-6">
              <button className="btn-primary btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
