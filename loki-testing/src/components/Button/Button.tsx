import { memo } from "react";

interface IProps {
  children: string;
}
function Button({ children }: IProps) {
  return <button>{children}</button>;
}

export default memo(Button);
