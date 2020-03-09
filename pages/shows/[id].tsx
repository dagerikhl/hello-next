import fetch from "isomorphic-unfetch";
import { NextPage } from "next";

import { Layout } from "../../components/Layout";
import { Show as ShowModel } from "../../types/Show";

interface OwnProps {
  show: ShowModel;
}

const Show: NextPage<OwnProps> = ({ show }) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?[pb]>/g, "")}</p>
    {show.image ? <img src={show.image.medium} /> : null}
  </Layout>
);

Show.getInitialProps = async (context) => {
  const { id } = context.query;

  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);

  return { show };
};

export default Show;
