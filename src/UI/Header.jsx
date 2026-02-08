import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="flex justify-between">
        {/* Logo */}
        <div className="h-16 flex items-center justify-center ">
          <Link to="/home">
            <img
              src="/src/assets/new_logo.png"
              alt="Logo"
              className="h-18 w-auto"
            />
          </Link>
          <Link to="/home" className="text-xl font-bold">
            DevConnect
          </Link>
        </div>
        <div className="m-2 p-2">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
