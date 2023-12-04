import { FC, useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
  fetchProducts,
  searchProducts,
  selectAllProducts,
} from "@/redux/products/productsSlice";
import { LeftContent } from "@/widgets";
import { GroupArrival } from "@/widgets/GroupArrival";
import { ImageItem } from "@/widgets/Item";
import "./Page.css";
import { fetchTiers } from "@/redux/tier/tierSlice";
import { REFRESH_INTERVAL_MS, ROW_ITEMS } from "@/constant/contants";
import { selectFilter } from "@/redux/filters/filterSlice";
import { FaQuestion } from "react-icons/fa";

const Home: FC = () => {
  const [numItemsToShow, setNumItemsToShow] = useState(ROW_ITEMS);
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const currentFilter = useAppSelector(selectFilter);

  const handleLoadMore = () => {
    setNumItemsToShow(numItemsToShow + 4);
  };

  const fetchProductsAndTiers = useCallback(() => {
    dispatch(fetchTiers());
    if (currentFilter) {
      dispatch(searchProducts(currentFilter));
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, currentFilter]);

  useEffect(() => {
    fetchProductsAndTiers();

    const intervalId = setInterval(fetchProductsAndTiers, REFRESH_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [fetchProductsAndTiers]);

  return (
    <section className="content-container">
      <GroupArrival />
      <div className="hero min-h-[calc(100vh-64px)] h-max">
        <div className="flex mt-4 space-x-4 p-10 h-full w-full">
          <div className="left-content w-1/4 ">
            <LeftContent />
          </div>

          <div className="main-content w-3/4">
            <div className="pb-24">
              {products.length === 0 ? (
                <div className="flex flex-col items-center mt-10 text-gray-500">
                  <FaQuestion className="h-12 w-12 text-gray-400 mb-4" />
                  <p className="text-lg font-semibold">
                    No products match your search criteria.
                  </p>
                  <p className="mt-2">
                    Please adjust your search and try again.
                  </p>
                </div>
              ) : (
                <div className="image-container grid grid-cols-4 gap-4">
                  {products.slice(0, numItemsToShow).map((item) => (
                    <ImageItem item={item} key={item.id} />
                  ))}
                </div>
              )}
              {numItemsToShow < products.length && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleLoadMore}
                    className="btn text-white bg-gradient-to-br from-pink-600 to-purple-600 ml-2 w-40"
                  >
                    View More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
