import { PropsWithChildren } from "react";

import "./Button.css";

type Props = PropsWithChildren;

export function Button(props: Props) {
  return <button className={"ws-button"}>{props.children}</button>;
}
