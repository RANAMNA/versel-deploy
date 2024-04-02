import { useState } from "react";
import {toast} from "react-toastify";
import { PsyuseAuthContext } from "../context/PsyAuthContext";

const usePsySignup = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthPsychics } = PsyuseAuthContext();

	const signup = async ({ email, username, password, confirmPassword, gender }) => {
		const success = handleInputErrors({ email, username, password, confirmPassword, gender });
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/psychics/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, username, password, confirmPassword, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}
			localStorage.setItem("chat-psychics", JSON.stringify(data));
			setAuthPsychics(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, signup };
};
export default usePsySignup;

function handleInputErrors({ email, username, password, confirmPassword, gender }) {
	if (!email || !username || !password || !confirmPassword || !gender) {
		toast.error("Please fill in all fields");
		return false;
	}

	if (password !== confirmPassword) {
		toast.error("Passwords do not match");
		return false;
	}

	if (password.length < 6) {
		toast.error("Password must be at least 6 characters");
		return false;
	}

	return true;
}
