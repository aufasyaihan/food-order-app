import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="foodLogo" />
        <h1>Food Order</h1>
      </div>
      <div>
        <button>Cart (0)</button>
      </div>
    </header>
  );
}
