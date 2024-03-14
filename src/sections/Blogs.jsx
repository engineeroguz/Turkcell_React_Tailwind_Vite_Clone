import Card from "../components/Card";
import { blog_1, blog_2, blog_3 } from "../assets/images";
import { blogs } from "../constants";
import Button from "../components/Button";

const Blogs = () => {
  return (
    <div>
      <div className="px-28">
        <div className="flex justify-between items-center mb-14 mt-10">
          <h1 className="text-[#253342] text-4xl font-bold">
            Popüler İçerikler
          </h1>
          <div>
            <a
              className="bg-[#ecf0f2] mr-3  px-4 py-3 h-10 rounded-3xl text-center text-[#2855ac] font-bold overflow-hidden"
              href=""
            >
              Tüm Forum
            </a>
            <a
              className="bg-[#ecf0f2] mr-3  px-4 py-3 h-10 rounded-3xl text-center text-[#2855ac] font-bold overflow-hidden"
              href=""
            >
              Tüm Blog
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5">
          <Card
            blogImg={blog_1}
            h3={blogs[0].h3}
            p={blogs[0].p}
            tag1={blogs[0].tag1}
            tag2={blogs[0].tag2}
          />
          <Card
            blogImg={blog_2}
            h3={blogs[1].h3}
            p={blogs[1].p}
            tag1={blogs[1].tag1}
            tag2={blogs[1].tag2}
          />
          <Card
            blogImg={blog_3}
            h3={blogs[2].h3}
            p={blogs[2].p}
            tag1={blogs[2].tag1}
            tag2={blogs[2].tag2}
          />
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <Button label={"Daha Fazla Gör"} />
      </div>
    </div>
  );
};

export default Blogs;
