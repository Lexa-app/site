export default function MaterneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={"container mx-auto flex flex-col max-w-4xl my-12"}>
      {children}
    </div>
  );
}
