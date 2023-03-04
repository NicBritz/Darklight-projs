type CardProps = {
  children: JSX.Element;
};

export function Card({ children }: CardProps) {
  return (
    <div className="bg-white shadow rounded-lg m-4 min-w-[230px] sm:max-h-[450px]">
      {children}
    </div>
  );
}
