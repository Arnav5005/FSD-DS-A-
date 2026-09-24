import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Home() {
  return <h1>This is my home page</h1>;
}
function About() {
  return <h1>This is my about us page</h1>;
}
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <Link to="/">HOME</Link>
          <Link to="about">ABOUT US</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
