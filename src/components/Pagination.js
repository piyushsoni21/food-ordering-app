import { useEffect, useState } from "react";
import "../css/pagination.css";

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
const[totalPages,setTotalPages] = useState(0);

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    const data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.round(data.total/10));
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.map((prod) => {
            return (
              <div className="products_single" key={prod.id}>
               <div> <img src={prod.thumbnail} alt={prod.title} /></div>
               <div className="product-title"> <span>{prod.title}</span> </div>
              </div>
            );
          })}
        </div>
      )}

      {products.length > 0 && (
        <div className="pagination">
          <span
            onClick={() => selectPageHandler(page - 1)}
            className={page > 1 ? "" : "pagination_disable"}
          >
            ◀
          </span>
          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            onClick={() => selectPageHandler(page + 1)}
            className={page < totalPages ? "" : "pagination__disable"}
          >
            ▶
          </span>
        </div>
      )}
    </div>
  );
}
