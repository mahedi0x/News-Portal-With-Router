import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
    const {createUser, setUser} = use(AuthContext);
    // console.log(createUser);

    const handleRegister = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result =>{
            // console.log(result.user)
            setUser(result.user);
            form.reset();
        })
        .then(error =>{
            console.log(error.message);
        })
    }
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-8">
          Register your account
        </h2>

        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label
              for="photo"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              type="text"
              id="photo"
              name="photo"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your photo URL"
            />
          </div>

          <div className="mb-3">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="mb-3">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-3 rounded-md bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center mb-4">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label for="terms" className="ml-2 block text-sm text-gray-900">
              Accept{" "}
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                Term & Conditions
              </a>
            </label>
          </div>

          <button type="submit"
            className="w-full bg-gray-900 text-white p-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Register
          </button>

          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 font-bold">
              Allready Have An Account ? Please{" "}
              <Link to="/auth/login" className="text-red-500 underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
