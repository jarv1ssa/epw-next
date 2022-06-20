import type { NextPage } from "next";
import Layout from "../../components/Layout";
import Lottie from "lottie-react";
import Page from "../../components/Page";
import rocket from "../../assets/lotties/rocket.json";

const Portfolio: NextPage = () => {
  return (
    <Page id="Portfolio" title="Portfolio | EPW">
      <Layout>
        <Lottie
          animationData={rocket}
          loop
          autoplay
          style={{ height: 250, marginTop: 100, marginBottom: 100 }}
        />
      </Layout>
    </Page>
  );
};

export default Portfolio;
