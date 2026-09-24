import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// function Home() {
//   return <h1>This is my home page</h1>;
// }
// function About() {
//   return <h1>This is my about us page</h1>;
// }
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <nav>
//           <Link to="/">HOME</Link>
//           <Link to="about">ABOUT US</Link>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

function Home() {
  return <h1>This is my home page</h1>;
}
function About() {
  return <h1>This is my about us page</h1>;
}
function Contact() {
  return <h1>contact us here</h1>;
}
function Github() {
  return <h1>this is our github</h1>;
}
const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "24px"}}>
      <BrowserRouter>
        <nav style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
          <Link to="/">HOME</Link>
          <Link to="about">ABOUT US</Link>
          <Link to="contact">CONTACT US</Link>
          <Link to="github">GITHUB</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
