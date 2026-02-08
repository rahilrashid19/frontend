import { Button } from "@/components/ui/button";
import {
  Dialog,
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
import { useForm, Controller } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { signup } from "../api/signup";

const SignUp = ({ open, onOpenChange, setShowLoginModal }) => {
  const { register, handleSubmit, formState, reset, watch, control } = useForm({
    mode: "onChange",
  });
  const { errors, isSubmitting, isValid } = formState;

  const password = watch("password");

  const { mutate, isLoading, error, isError } = useMutation({
    mutationFn: signup,

    onSuccess: () => {
      setShowLoginModal(true);
      onOpenChange(false);
      reset();
    },

    onError: (err) => {
      console.log(err);
    },
  });

  const submitForm = (data) => {
    mutate(data);
  };

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
        <form
          className="space-y-5"
          noValidate
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                placeholder="Enter your firstname"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Firstname is required",
                  },
                })}
              />
              <p className="text-red-500 text-sm">
                {errors?.firstName?.message}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Enter your lastname"
                {...register("lastName")}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            <p className="text-red-500 text-sm">{errors?.email?.message}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "Password must be at least 8 characters and include uppercase, lowercase, number and special character",
                  },
                })}
              />
              <p className="text-red-500 text-sm">
                {errors?.password?.message}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />
              <p className="text-red-500 text-sm">
                {errors?.confirmPassword?.message}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                placeholder="18"
                {...register("age", {
                  min: 18,
                  required: {
                    value: true,
                    message: "Age is required",
                  },
                })}
              />
              <p className="text-red-500 text-sm">{errors?.age?.message}</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="profilePic">Profile Picture</Label>
              <Input
                id="profilePic"
                type="text"
                {...register("profilePic", {
                  required: {
                    value: true,
                    message: "Profile Picture is required",
                  },
                })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Input
              id="bio"
              placeholder="Tell us something about you"
              {...register("bio")}
            />
          </div>

          <div className="space-y-2">
            <Label>Gender</Label>

            <Controller
              name="gender"
              control={control}
              defaultValue="male"
              rules={{ required: "Please select a gender" }}
              render={({ field }) => (
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="Male" id="male" />
                    <Label htmlFor="male" className="font-normal">
                      Male
                    </Label>
                  </div>

                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="Female" id="female" />
                    <Label htmlFor="female" className="font-normal">
                      Female
                    </Label>
                  </div>
                </RadioGroup>
              )}
            />

            <p className="text-red-500 text-sm">{errors?.gender?.message}</p>
          </div>

          {/* Footer */}
          <DialogFooter>
            <div className="flex flex-col items-center gap-2 w-full">
              <Button
                type="submit"
                className="w-full"
                disabled={!isValid || isLoading || isSubmitting}
              >
                Sign up
              </Button>
              {isError && (
                <p className="text-red-500 text-sm text-center">
                  {error?.response?.data?.message ||
                    "Something went wrong. Please try again."}
                </p>
              )}
            </div>
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
