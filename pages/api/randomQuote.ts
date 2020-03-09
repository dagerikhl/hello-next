import allQuotes from "../../quotes.json";
import { NextApiPage } from "../../types/NextApiPage";

const randomQuote: NextApiPage = (req, res) => {
  const { author } = req.query as { author: string };
  let quotes = allQuotes;

  if (author) {
    quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
  }
  if (!quotes.length) {
    quotes = allQuotes.filter(quote => quote.author.toLowerCase() === "unknown");
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(quote);
};

export default randomQuote;
