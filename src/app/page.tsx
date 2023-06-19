import Adotar from "@/components/adotar/page";
import Banner from "@/components/banner/pages";
import CardAdotar from "@/components/card-adotar/page";
import Footer from "@/components/footer/page";

export default function Home() {
  return (
    <div className="flex flex-col scroll-smooth">
      <div className="w-full h-screen flex px-4 lg:px-24">
        <Banner />
      </div>
      <div className="h-screen lg:h-[40vh] w-full items-center justify-center flex lg:-translate-y-32 px-4 lg:px-24">
        <CardAdotar />
      </div>
      <div className="w-full h-[80vh] px-4 lg:px-24 items-center justify-center">
        <Adotar />
      </div>
      <div className="w-full h-full lg:h-[38vh] items-center justify-center px-4 lg:px-0">
        <Footer />
      </div>
    </div>
  );
}
