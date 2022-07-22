export default function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={"bg-primary rounded-full py-1 px-3 text-white " + className}>
      {children}
    </p>
  );
}
