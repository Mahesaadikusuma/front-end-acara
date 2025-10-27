import { Button, Card, CardBody, Input } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { visiblePassword, handleVisiblePassword } = useRegister();
  return (
    <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:gap-20">
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-10 lg:mb-0 lg:w-1/3">
        <Image
          src="/images/general/logo.png"
          width={180}
          height={180}
          alt="Logo"
        />
        <Image
          src="/images/illustration/login.svg"
          width={1024}
          height={1024}
          alt="Login"
          className="w-2/3 lg:w-full"
        />
      </div>

      <Card className="w-full max-w-[500px]">
        <CardBody className="p-8">
          <h2 className="text-danger text-xl font-bold">Create Account.</h2>
          <p className="text-small mb-4">
            Have an account?&nbsp;
            <Link href="/auth/login" className="text-danger-400 font-semibold">
               Login here
            </Link>
          </p>

          <form className="flex w-full flex-col gap-4">
            <Input
              label="FullName"
              type="text"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              label="UserName"
              type="text"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              label="Email"
              type="email"
              variant="bordered"
              autoComplete="off"
            />
            <Input
              label="Password"
              type={visiblePassword.password ? "text" : "password"}
              variant="bordered"
              autoComplete="off"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("password")}
                >
                  {visiblePassword.password ? (
                    <FaEye
                      size={20}
                      className="text-default-400 pointer-events-none text-xl"
                    />
                  ) : (
                    <FaEyeSlash
                      size={20}
                      className="text-default-400 pointer-events-none text-xl"
                    />
                  )}
                </button>
              }
            />
            <Input
              label="Password Confirmation"
              type={visiblePassword.passwordConfirmation ? "text" : "password"}
              variant="bordered"
              autoComplete="off"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => handleVisiblePassword("passwordConfirmation")}
                >
                  {visiblePassword.passwordConfirmation ? (
                    <FaEye
                      size={20}
                      className="text-default-400 pointer-events-none text-xl"
                    />
                  ) : (
                    <FaEyeSlash
                      size={20}
                      className="text-default-400 pointer-events-none text-xl"
                    />
                  )}
                </button>
              }
            />
            <Button color="danger" size="lg" type="submit">
              Register
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
