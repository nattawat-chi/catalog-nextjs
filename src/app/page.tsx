import ProductsCard from "@/components/ProductsCard";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center">Product List</h1>
      <ProductsCard />
    </div>
  );
}
