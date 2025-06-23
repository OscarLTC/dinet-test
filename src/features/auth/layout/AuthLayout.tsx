import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  return (
    <main className="h-screen w-screen flex flex-col-reverse md:grid md:grid-cols-12 bg-[#f8f8fb]">
      <section className="w-full max-w-xl col-span-5 h-full mx-auto">
        {children}
      </section>
      <div className="relative bg-[url(assets/login-wallpaper.webp)] bg-cover bg-center w-full col-span-7 h-1/2 md:h-full">
        <div className="absolute inset-0 bg-[rgba(13,35,85,0.75)]" />
      </div>
    </main>
  );
};
