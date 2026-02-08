import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { login } from "../api/login";

const Login = ({ open, onOpenChange }) => {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const { mutate, isError, isLoading, error } = useMutation({
    mutationFn: login,

    onSuccess: () => {
      navigate("/home");
      reset();
    },

    onError: (error) => {
      console.log(error);
    },
  });

  const submitForm = (data) => {
    mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Dialog Content */}
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold">
            Login to your account
          </DialogTitle>
          <DialogDescription>
            Enter your credentials below to get started
          </DialogDescription>
        </DialogHeader>

        {/* Form */}
        <form
          className="space-y-5"
          noValidate
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email",
                },
              })}
            />
            <p>{errors?.email?.message}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Please enter a valid password",
                },
              })}
            />
            <p>{errors?.password?.message}</p>
          </div>

          {/* Footer */}
          <DialogFooter>
            <div className="flex flex-col items-center gap-2 w-full">
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? "Logging in..." : "Login"}
              </Button>

              {isError && (
                <p className="text-red-500 text-sm text-center">
                  {error?.response?.data?.message ||
                    "Something went wrong. Please try again."}
                </p>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
