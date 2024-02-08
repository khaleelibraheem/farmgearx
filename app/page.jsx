import Header from "@/components/header";
import Landing from "@/components/landing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1300px] m-auto px-6">
        <Landing />
      </main>
      <Footer />
    </>
  );
}
