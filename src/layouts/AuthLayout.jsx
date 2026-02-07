import homeImage from "@/assets/home_image.png";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[65%_35%]">
      {/* LEFT SIDE — FULL BLEED IMAGE */}
      <div
        className="hidden lg:block bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${homeImage})`,
        }}
      />

      {/* RIGHT SIDE — FORM */}
      <div className="flex items-center justify-center bg-muted/40 px-6">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
