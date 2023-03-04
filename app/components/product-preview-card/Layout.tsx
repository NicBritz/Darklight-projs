type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="grid grid-flow-row sm:grid-cols-2 max-w-[600px]">
      {children}
    </div>
  );
}
