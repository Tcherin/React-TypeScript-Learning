import { useEffect, useState } from "react";

const Productlist = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in ", category);
    setProducts(["Clothing", "household"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default Productlist;
