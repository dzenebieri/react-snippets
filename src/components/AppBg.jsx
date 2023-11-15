import Header from "./Header";
import Footer from "./Footer";
import Snippets from "./Snippets";

export default function AppBg() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <Snippets />
      <Footer />
    </div>
  )
}
