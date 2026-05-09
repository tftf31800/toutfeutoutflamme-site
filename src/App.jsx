import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tarifs from "./pages/Tarifs";
import ContactPage from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ZonesIntervention from "./pages/ZonesIntervention";
import CookieBanner from "./components/CookieBanner";
import Layout from "./layout/Layout";
import MentionsLegalesPage from "./pages/MentionsLegales";
import CGV from "./pages/CGV";
import PolitiqueConfidentialitePage from "./pages/PolitiqueConfidentialite";
import CookiesPage from "./pages/Cookies";

export default function App() {
  return (
    <BrowserRouter>
  <Layout>
    <Routes>
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      <Route path="/" element={<Home />} />
      <Route path="/tarifs" element={<Tarifs />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
      <Route path="/cgv" element={<CGV />}/>
      <Route path="/politique-confidentialite" element={<PolitiqueConfidentialitePage />}/>
      <Route path="/zones-intervention" element={<ZonesIntervention />} />
      <Route path="/cookies" element={<CookiesPage />} />
    </Routes>
  </Layout>

  <CookieBanner />
</BrowserRouter>
);
}