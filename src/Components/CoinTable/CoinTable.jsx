import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinData } from "../../Services/fetchCoinData";
import currencyStore from "../../state/store.js";
import { useNavigate } from "react-router-dom";
// import { CurrencyContext } from "../../Context/CurrencyContext.js";

//use reqct qyuery : so we need to wrap our app with QueryClientProvider.

function CoinTable() {
  const { currency } = currencyStore();
  const navigate = useNavigate();
  const [page, Setpage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["coins", page, currency],
    queryFn: () => fetchCoinData(page, currency),
    cacheTime: 1000 * 60 * 2, // Cache for 2 minutes
    // staleTime: 1000 * 60 *2, // Data is fresh for 1 minute
    // retry: 2,
    // retryDelay: 1000,
  });

  //   useEffect(() => {
  //     console.log("Fetched data:", data);
  //   },[data]);

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  function handleRedirect(id) {
    navigate(`/details/${id}`);
  }

  return (
    <div className="my-5 flex flex-col gap-5 items-center justify-center w-[80vw] mx-auto">
      <div className="w-full bg-yellow-400 text-black flex py-2 px-2 font-semibold items-center justify-center cursor-pointer">
        <div className="basis-[35%]">Coin</div>

        <div className="basis-[25%]">Price</div>

        <div className="basis-[20%]">24h Change</div>

        <div className="basis-[20%]">Market Cap</div>
      </div>

      <div className="flex flex-col w-[80vw] mx-auto">
        {isLoading && <div> Loading...</div>}
        {data &&
          data.map((coin) => {
            return (
              <div
                key={coin.id}
                onClick={() => handleRedirect(coin.id)}
                className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between "
              >
                <div className="flex items-center justify-start basis-[35%] gap-3">
                  <div className="w-[5rem] h-[5rem]">
                    <img src={coin.image} className="w-full h-full" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-3xl">{coin.name}</div>

                    <div className="text-sm text-gray-400">{coin.symbol}</div>
                  </div>
                </div>

                <div className="basis-[25%]">{coin.current_price}</div>

                <div className="basis-[20%]">
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </div>

                <div className="basis-[20%]">{coin.market_cap}</div>
              </div>
            );
          })}
      </div>

      <div className="flex gap-4 justify-center items-center">
        <button
          disabled={page === 1}
          onClick={() => Setpage(page - 1)}
          className="btn btn-primary btn-wide text-white text-2xl"
        >
          Prev
        </button>
        <button
          onClick={() => Setpage(page + 1)}
          className="btn btn-secondary btn-wide text-white text-2xl"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default CoinTable;
