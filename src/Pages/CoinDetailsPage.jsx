import { useQuery } from "@tanstack/react-query";
import React from "react";
import currencyStore from "../state/store.js";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "../Services/fetchCoinDetails";
import parse from "html-react-parser";

function CoinDetailsPage() {
  const { coinId } = useParams(); // Extracting coinId from the URL parameters
  const { currency } = currencyStore();
  const {
    isLoading,
    isError,
    data: coin,
  } = useQuery({
    queryKey: ["coin", coinId, currency],
    queryFn: () => fetchCoinDetails(coinId),
    cacheTime: 1000 * 60 * 2,
    staleTime: 1000 * 60 * 2,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching coin details</div>;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:1/3 w-full flex flex-col items-center mt-6 md:mt-0 border-2 border-gray-500">
        <img alt={coin?.name} src={coin?.image?.large} className="h-52 mb-5" />

        <h1 className="text-4xl font-bold mb-5">{coin?.name}</h1>

        <p className="w-full px-6 py-4 text-justify">
          {parse(coin?.description?.en)}
        </p>

        <div className="w-full flex flex-col md:flex-row justify-around">
          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl font-bold ">Rank</h2>

            <span className="ml-3 text-xl">{coin.market_cap_rank}</span>
          </div>

          <div className="flex items-center mb-4 md:mb-0">
            <h2 className="text-xl text-yellow-400 font-bold">Current Price</h2>

            <span className="ml-3 text-xl">
              {coin?.market_data?.current_price?.[currency]}
            </span>
          </div>
        </div>
      </div>

      <div className="md:w-2/3 w-full p-6">
        Coin Information
      </div>
    </div>
  );
}

export default CoinDetailsPage;
