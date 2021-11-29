import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => (
  <main className="py-4 px-4">{children}</main>
);

export default Container;
