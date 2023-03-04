type PageProps = {
  children: JSX.Element;
};

export function Page({ children }: PageProps) {
  return (
    <div className="flex justify-center items-center bg-ppc-cream h-screen overflow-hidden">
      {children}
    </div>
  );
}
