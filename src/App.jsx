import {
  Stories,
  Footer,
  SliderNews,
  CareerDream,
  Blogs,
  SocialPrograms,
  JoinUs,
  FuturePaths,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b ">
      <SliderNews />
    </section>
    <section className=" pb-32">
      <CareerDream />
    </section>
    <section className="padding bg-[#eff2f4] h-[80vh]">
      <FuturePaths />
    </section>
    <section className="padding-x py-10 min-h-[80vh]">
      <Blogs />
    </section>
    <section className="padding">
      <SocialPrograms />
    </section>
    <section className="padding bg-[#eef2f3]">
      <Stories />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <JoinUs />
    </section>
    <section className="padding-x padding-t pb-8 bg-[#263170]">
      <Footer />
    </section>
  </main>
);

export default App;
