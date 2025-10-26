
import { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {

    const {signInUser} = use(AuthContext);

    const handleSignInUser = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email,password)
        .then(resutl =>{
            console.log(resutl.user);
            form.reset();
        })
        .catch(error =>{
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode, errorMessage);   
        })
    }

    return (
        <div class="min-h-screen flex items-center justify-center p-4">
        
        <div class="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
            
            <h2 class="text-2xl font-semibold text-center text-gray-900 mb-8">
                Login your account
            </h2>
            
            <form onSubmit={handleSignInUser}>
                
                <div class="mb-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-700">
                        Email address
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        class="w-full p-3 rounded-md bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email address"
                        required
                    />
                </div>
                
                <div class="mb-8">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-700">
                        Password
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        class="w-full p-3 rounded-md bg-gray-100 border border-gray-200 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                
                <button 
                    type="submit" 
                    class="w-full bg-gray-900 text-white p-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                >
                    Login
                </button>
                
                <div class="text-center mt-6">
                    <p class="text-sm text-gray-600 font-bold">
                        Don't Have An Account ? <Link to="/auth/register" className='text-red-500 underline'>Register</Link> 
                    </p>
                </div>
                
            </form>
            
        </div>
        
    </div>
    );
};

export default Login;