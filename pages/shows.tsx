import fetch from "isomorphic-unfetch";
import { NextPage } from "next";
import Link from "next/link";

import { Layout } from "../components/Layout";
import { Show } from "../types/Show";
import { TVMazeShowsResult } from "../types/TVMazeShowsResult";

interface OwnProps {
  shows: Show[];
}

const Shows: NextPage<OwnProps> = ({ shows }) => (
  <Layout>
    <h1>Batman TV Shows</h1>

    <ul>
      {shows.map((show) => (
        <li key={show.id}>
          <Link href="/shows/[id]" as={`/shows/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Shows.getInitialProps = async () => {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman")
  const data = await res.json() as TVMazeShowsResult[];

  console.log(`Show data fetched. Count: ${data.length}.`);

  return {
    shows: data.map((entry) => entry.show),
  }
}

export default Shows;
