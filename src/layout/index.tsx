import { ReactNode } from "react";
import { Header } from "../components/molecules/Header";

type Props = {
  children?: ReactNode
}

export function CommonLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div>
        {children}
      </div>
    </>
  )
}