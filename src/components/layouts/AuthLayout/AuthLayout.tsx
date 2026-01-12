import PageHead from "@/components/common";
import { Fragment, ReactNode } from "react";

interface PropsType {
  title?: string;
  children?: ReactNode;
}

const AuthLayout = (props: PropsType) => {
  const { children, title = "Login",  } = props;
  return (
    <Fragment>
      <PageHead title={title} />
      <section className="3xl:container mx-auto">{children}</section>
    </Fragment>
  );
};

export default AuthLayout;
