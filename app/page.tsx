import CategoryMenu from "@/components/CategoryMenu";
import Header from "@/components/header/header";
import NewCollection from "@/components/NewCollection";

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <Header />
      <CategoryMenu />
      <NewCollection />
    </div>
  );
}
