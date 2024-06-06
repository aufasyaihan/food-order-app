import logo from '../assets/logo.jpg';

export default function Header() {
    return (
        <header id="main-header">
            <h1 id="title"><img src={logo} alt="foodLogo" />Food Order</h1>
        </header>
    );
}