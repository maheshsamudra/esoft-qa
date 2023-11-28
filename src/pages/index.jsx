import Image from "next/image";
import Title from "../components/title";
import Categories from "../components/categories";
import Tags from "../components/tags";
import Results from "../components/results";
import { getAllPosts } from "../api";
import useQaStore from "../stores/useQaStore";
import Search from "../components/search";

export default function Home({ qa }) {
  const setQa = useQaStore((state) => state.setQa);

  setQa(qa);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className={"w-full max-w-[640px]"}>
        <Title />
        <Search />
        <Categories />
        <Tags />
        <Results />
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const qa = getAllPosts([
    "question",
    "category",
    "verified",
    "content",
    "slug",
  ]);

  return {
    props: { qa },
  };
}
