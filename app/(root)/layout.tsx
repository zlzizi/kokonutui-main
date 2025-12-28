import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/layout/footer";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Kokonut UI - Open Source Components",
    default: "Kokonut UI - Open Source Components",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <main className="relative w-full bg-white pt-0 md:pt-0 dark:bg-black">
        {children}
      </main>
      <Footer />
    </>
  );
}
