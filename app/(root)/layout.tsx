import type { Metadata } from "next";
import { Suspense } from "react";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/layout/footer";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Celzi - Open Source Components",
    default: "Celzi - Open Source Components",
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
