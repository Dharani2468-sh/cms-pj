import React, { useState, useContext } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../context/AuthContext';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login } = useContext(AuthContext);

	function handleSubmit(event) {
		event.preventDefault();
		const isValid = login(email, password);
		if (isValid) {
			Swal.fire("Success", "Login is successful", "success");
		} else {
			Swal.fire("Invalid", "Login is invalid", "error");
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
			<form
				onSubmit={handleSubmit}
				className="bg-white/90 p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200"
			>
				<h2 className="text-3xl font-extrabold mb-8 text-center text-blue-700 tracking-tight">
					Welcome Back
				</h2>
				<div className="mb-6">
					<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
						Email Address
					</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
						placeholder="you@example.com"
					/>
				</div>
				<div className="mb-8">
					<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
						Password
					</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50"
						placeholder="••••••••"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-bold shadow-lg"
				>
					Log In
				</button>
				<div className="mt-6 text-center text-sm text-gray-500">
					Don't have an account?{' '}
					<a href="/signup" className="text-blue-600 hover:underline">
						Sign up
					</a>
				</div>
			</form>
		</div>
	);
}
