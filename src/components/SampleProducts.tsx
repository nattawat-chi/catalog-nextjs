// import useFilteredProducts from "@/hooks/useFilteredProducts";
// import Image from "next/image";
// import Link from "next/link";

// function SampleProducts({
//   searchQuery,
//   selectedCategory,
// }: {
//   searchQuery: string;
//   selectedCategory: string;
// }) {
//   const products = useFilteredProducts(
//     searchQuery,
//     selectedCategory,
//     1
//   ).products;
//   const randomProducts = [...products].sort((a, b) => a.id - b.id).slice(0, 6);

//   return (
//     <section className="max-w-3xl mx-auto px-6 py-12 md:max-w-5xl ">
//       <h2 className="text-2xl font-bold text-center mb-6">
//         Explore Our Featured Products
//       </h2>
//       <p className="text-muted-foreground text-center mb-8">
//         Discover a curated selection of our best-selling items, handpicked just
//         for you.
//       </p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {randomProducts.map((product) => (
//           <Link
//             key={product.id}
//             href={`/products/${product.id}`}
//             className="group rounded-xl overflow-hidden hover:bg-background hover:shadow-md transition-shadow hover:border hover:border-purple-500"
//           >
//             {/* รูปภาพ */}
//             <div className="relative w-full aspect-square">
//               <Image
//                 src={product.images[0]}
//                 alt={product.title}
//                 fill
//                 sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
//                 className="object-cover transition-transform duration-300 group-hover:scale-105"
//                 priority
//               />
//             </div>

//             {/* รายละเอียดสินค้า */}
//             <div className="p-4 text-center space-y-2">
//               <h3 className="text-lg font-medium text-foreground">
//                 {product.title}
//               </h3>
//               <p className="text-sm text-muted-foreground">
//                 ${product.price.toFixed(2)}
//               </p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default SampleProducts;
