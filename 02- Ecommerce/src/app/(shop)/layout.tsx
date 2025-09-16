import { TopMenu } from "@/components";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
        <TopMenu />
        {children}
        <h1 className=" min-h-screen">Shop Page</h1>
    </div>
  );
}
