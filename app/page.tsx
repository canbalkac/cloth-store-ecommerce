import NewCollection from "@/components/home/NewCollection";
import NewThisWeek from "@/components/home/NewThisWeek";
import XIVCollections from "@/components/home/XIVCollections";
import About from "@/components/home/About";

export default function Home() {
  return (
    <>
      <NewCollection />
      <NewThisWeek />
      <XIVCollections />
      <About />
    </>
  );
}
