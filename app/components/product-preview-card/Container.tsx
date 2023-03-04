type ContainerProps = {
  children: JSX.Element | JSX.Element[];
};

export function Container({ children }: ContainerProps) {
  return <div className="p-6 sm:p-8">{children}</div>;
}
