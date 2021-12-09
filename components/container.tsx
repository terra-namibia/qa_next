import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => (
  <section className="bg-gray-50 rounded-lg">{children}</section>
);

export default Container;
