import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const WrapLayout = ({ children }: PropsWithChildren) => (
  <div className="mx[auto]">{children}</div>
);

export function NoAuthLayout() {
  return (
    <WrapLayout>
      <Outlet />
    </WrapLayout>
  );
}
