import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  { name: "badminton", imgUrl: "category-badminton.png" },
  { name: "basketball", imgUrl: "category-basketball.png" },
  { name: "football", imgUrl: "category-football.png" },
  { name: "running", imgUrl: "category-running.png" },
  { name: "swimming", imgUrl: "category-swimming.png" },
  { name: "tennis", imgUrl: "category-tennis.png" },
];

const CategoriesSection = () => {
  return (
    <section id="category-section" className="container mx-auto">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl">Browse by Categories</h2>
        <Link href="#" className="flex gap-2 text-primary">
          <span className="self-center">See All Categories</span>
          <FiArrowRight className="self-center" />
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-12">
        <div className="rounded-lg bg-linear-to-r  from-[#F1F1F1] to-[#F7F7F7] w-full aspect-square"></div>
      </div>
    </section>
  );
};

export default CategoriesSection;
