import { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

export default function SignUp() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { register } = useContext(AuthContext);

	function handleSubmit(event) {
		event.preventDefault();
		register(email, password);
		Swal.fire("Success", "Account created successfully!", "success");
		setEmail('');
		setPassword('');
	}

	return (
		<div
			className="flex items-center justify-center min-h-screen bg-cover bg-center"
			style={{
				backgroundImage:
					"url('https://64.media.tumblr.com/452592e0d903a39bda20545721af55aa/tumblr_ofpuerFeWZ1vggiabo1_1280.gif')",
			}}
		>
			<form
				onSubmit={handleSubmit}
				className="bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/20"
			>
				<h2 className="text-3xl font-extrabold mb-8 text-center text-white tracking-tight">
					Create Your Account
				</h2>
				<div className="mb-6">
					<label htmlFor="email" className="block text-sm font-medium text-white mb-2">
						Email Address
					</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-black"
						placeholder="you@example.com"
					/>
				</div>
				<div className="mb-8">
					<label htmlFor="password" className="block text-sm font-medium text-white mb-2">
						Password
					</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white/80 text-black"
						placeholder="••••••••"
					/>
				</div>
				<button
					type="submit"
					className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-bold shadow-lg"
				>
					Create New Account
				</button>
				<div className="mt-6 text-center text-sm text-white">
					Already have an account?{' '}
					<a href="/login" className="text-blue-300 hover:underline">
						Sign in
					</a>
				</div>
			</form>
		</div>
	);
}
