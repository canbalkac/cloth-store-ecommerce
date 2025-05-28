import CategoryMenu from "@/components/home/CategoryMenu";
import Header from "@/components/header/header";
import NewCollection from "@/components/home/NewCollection";
import NewThisWeek from "@/components/home/NewThisWeek";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="p-6 max-w-[1280px]">
        <Header />
        <CategoryMenu />
        <NewCollection />
        <NewThisWeek />
      </div>
    </div>
  );
}
