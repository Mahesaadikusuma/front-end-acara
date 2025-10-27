import PageHead from "@/components/common";
import { ReactNode } from "react";

interface PropsType {
  title?: string;
  children?: ReactNode;
}

const AuthLayout = (props: PropsType) => {
  const { title = "Login", children } = props;
  return (
    <>
      <PageHead title={title} />
      <section className="3xl:container mx-auto">{children}</section>
    </>
  );
};

export default AuthLayout;
