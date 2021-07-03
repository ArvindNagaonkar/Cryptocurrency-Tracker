import Layout from "../../components/Layout";
import Style from "./Coin.module.css";
import Image from "next/image";

const Coin = ({ coin }) => {
  return (
    <Layout>
      <div className={Style.coin_page}>
        <div className={Style.coin_container}>
          <Image
            src={coin.image.large}
            alt={coin.name}
            className={Style.coin_image}
            width={300}
            height={300}
          />
          <h1 className={Style.coin_name}>{coin.name}</h1>
          <p className={Style.coin_ticker}>{coin.symbol}</p>
          <p className={Style.coin_current}>
            {coin.market_data.current_price.inr}
          </p>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}

export default Coin;
