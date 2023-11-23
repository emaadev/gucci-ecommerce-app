import { Routes, Route } from "react-router-dom";

import "./App.scss";
import { Home, Product, Products } from "./_root/pages/index";
import RootLayout from "./_root/RootLayout";
import NotFound from "./components/NotFound";

function App() {
  return (
    <section className="app">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="products/:id" element={<Products />} />
          <Route path="products/:id/product/:id" element={<Product />} />

          {/* Catch-all route for unmatched paths */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </section>
  );
}

export default App;
