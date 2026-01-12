import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Input } from "@heroui/react";
import PageHead from "@/components/common";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <PageHead />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore doloremque incidunt non at ea quos aliquam illum quibusdam aut ab. Mollitia fugit natus repellendus tenetur blanditiis culpa officiis quae esse.</p>
    </main>
  );
}
