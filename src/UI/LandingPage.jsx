import { useState } from "react";
import SignUp from "./Signup";
import Login from "./Login";

const LandingPage = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const showSignup = () => {
    setShowSignUpModal(true);
  };

  const showLogin = () => {
    setShowLoginModal(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/src/assets/landing_image.png"
        alt="DevConnect landing"
        className="absolute inset-0 w-full h-auto object-cover"
      />

      {/* Overlay */}
      <div className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* Logo / App name */}
        <h1 className="text-white text-2xl font-bold tracking-wide">
          DevConnect
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button
            className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition"
            onClick={() => showSignup()}
          >
            Create an account
          </button>

          <button
            className="px-5 py-2 text-sm font-semibold text-black bg-white rounded-full hover:bg-gray-200 transition"
            onClick={() => showLogin()}
          >
            Log in
          </button>
        </div>
      </div>
      {showSignUpModal && (
        <SignUp
          open={showSignUpModal}
          onOpenChange={setShowSignUpModal}
          setShowLoginModal={setShowLoginModal}
        />
      )}
      {showLoginModal && (
        <Login open={showLoginModal} onOpenChange={setShowLoginModal} />
      )}
    </div>
  );
};

export default LandingPage;
