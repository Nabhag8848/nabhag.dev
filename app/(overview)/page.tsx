import Header from "@/components/ui/Header";
import ImageGallery from "@/components/ui/ImageGallery";
import Intro from "@/components/ui/Intro";

export default function Page() {
  return (
    <main>
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
  );
}
