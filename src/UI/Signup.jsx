import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUp = ({ open, onOpenChange, setShowLoginModal }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Trigger Button */}
      <DialogTrigger asChild>
        <Button size="lg">Create Account</Button>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold">
            Create an account
          </DialogTitle>
          <DialogDescription>
            Enter your details below to get started
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your firstname"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Enter your lastname" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" placeholder="18" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profilePic">Profile Picture</Label>
              <Input id="profilePic" type="file" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input id="bio" placeholder="Tell us something about you" />
          </div>

          <div className="space-y-2">
            <Label>Gender</Label>
            <RadioGroup defaultValue="male" className="flex gap-6">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="font-normal">
                  Male
                </Label>
              </div>

              <div className="flex items-center gap-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="font-normal">
                  Female
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Footer */}
          <DialogFooter className="flex flex-col">
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </DialogFooter>
          <p className="text-sm text-muted-foreground text-center">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => {
                onOpenChange(false); // close signup
                setShowLoginModal(true);
              }}
              className="font-medium text-primary hover:underline"
            >
              Login
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUp;
