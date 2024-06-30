import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import ImageGallery from "@/components/ui/ImageGallery";
import Intro from "@/components/ui/Intro";

export default function Page() {
  return (
    <>
      <main className="flex-grow">
        <header>
          <Header />
        </header>
        <section>
          <Intro />
        </section>
        <section>
          <ImageGallery />
        </section>
      </main>
      <footer className="mt-auto mb-5">
        <Footer />
      </footer>
    </>
  );
}
