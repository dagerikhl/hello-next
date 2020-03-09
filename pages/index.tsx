import { NextPage } from "next";
import { useRouter } from "next/router";
import useSWR from "swr";

import { Layout } from "../components/Layout";
import { PostLink } from "../components/PostLink";

const getPosts = () => [
  { id: "hello-nextjs", title: "Hello Next.js" },
  { id: "learn-nextjs", title: "Learn Next.js is awesome" },
  { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
];

const fetcher = (url: string) => fetch(url).then(r => r.json());

interface OwnProps {
  userAgent: string;
}

const Index: NextPage<OwnProps> = ({ userAgent }) => {
  const { query } = useRouter();
  const { data, error } = useSWR(`/api/randomQuote${query.author ? `?author=${query.author}` : ''}`, fetcher);

  const author = data?.author;
  let quote = data?.quote;

  if (!data) quote = "Loading...";
  if (error) quote = "Failed to fetch the quote.";

  return (
    <Layout>
      <h1>Hello Next.js blog!</h1>

      <p>
        User agent: {userAgent}
      </p>

      <main className="center">
        <div className="quote">{quote}</div>
        {author && <span className="author">- {author}</span>}
      </main>

      <ul>
        {getPosts().map((post) => (<PostLink key={post.id} post={post} />))}
      </ul>

      <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      main {
        width: 90%;
        max-width: 900px;
        margin: 300px auto;
        text-align: center;
      }
      .quote {
        font-family: cursive;
        color: #e243de;
        font-size: 24px;
        padding-bottom: 10px;
      }
      .author {
        font-family: sans-serif;
        color: #559834;
        font-size: 20px;
      }
    `}</style>
    </Layout>
  );
};

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? (req.headers["user-agent"] || "") : navigator.userAgent;

  return { userAgent };
}

export default Index;
