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

      <Button color='danger'>Click me</Button>

      <Input label='Email' type='email' />

      <p className='text-red-800'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora error
        adipisci fuga reprehenderit unde. Blanditiis nesciunt iusto commodi
        ullam unde est! Natus deleniti assumenda vel qui, explicabo accusamus
        accusantium dolorem!
      </p>
    </main>
  );
}
