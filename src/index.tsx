import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Pocket from "./pages/Pocket";
import NotFound from "./pages/NotFound";
import { PokemonProvider } from "./context/PokemonContext";
import Test from "./pages/Test";

const client = new ApolloClient({
  uri: "https://graphql-pokeapi.graphcdn.app",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <PokemonProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="detail/:name" element={<Details />}></Route>
          <Route path="pocket" element={<Pocket />}></Route>
          <Route path="test" element={<Test />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </PokemonProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
