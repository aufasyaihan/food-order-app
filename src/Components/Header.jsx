import logo from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="foodLogo" />
        <h1>Food Order</h1>
      </div>
      <div>
        <Button textOnly>Cart (0)</Button>
      </div>
    </header>
  );
}
