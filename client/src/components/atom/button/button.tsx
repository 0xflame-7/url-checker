import type { ButtonProps } from "./buttonProps";

export function Button({ className, textValue }: ButtonProps) {
  return (
    <>
      <button className={className}>{textValue}</button>
    </>
  );
}
