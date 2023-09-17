import BlogGrid from "@/components/BlogGrid";
import { gupter } from "../utils/fonts";
import Layout from "@/components/Layout";
import Featured from "../components/FeaturedGrid";

export default function Home() {
  return (
    <Layout>
      <Featured />
      <BlogGrid />
    </Layout>
  );
}
