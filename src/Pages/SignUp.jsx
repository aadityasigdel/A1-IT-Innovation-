import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import SvgIllu from "../assets/SignUPSvg.webp";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function GoogleLog() {
  const navigate = useNavigate();

  // Google login handler
  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { access_token } = tokenResponse;
        // Fetch user info from Google
        const res = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        const user = await res.json();
        console.log('User Info:', user);

        const userData = {
          name: user.name,
          email: user.email,
          picture: user.picture,
          sub: user.sub,
        };

        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/');
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
    onError: () => {
      console.error('Login Failed');
    },
  });

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200">
      <Navigation />

      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl">

          {/* Image Section - Visible on all screen sizes */}
          <div className="block w-full md:w-1/2 max-w-md mb-8 md:mb-0">
            <img
              src={SvgIllu}
              alt="Login Illustration"
              className="w-full h-auto object-contain max-h-64 sm:max-h-80"
              loading="lazy"
            />
          </div>

          {/* Login Section */}
          <section className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 w-full md:w-1/2 max-w-md">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
                Welcome Back
              </h1>
              <p className="mb-8 text-gray-600">
                Sign in with your Google account to continue
              </p>

              {/* Google Sign-In Button */}
              <button
                onClick={() => login()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow transition duration-300 ease-in-out"
              >
                Sign in with Google
              </button>

              <div className="mt-6 text-xs sm:text-sm text-gray-500">
                <p>
                  By continuing, you agree to our{" "}
                  <a
                    href="company/terms"
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="company/policy"
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
