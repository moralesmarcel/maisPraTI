export default function Navbar({ darkMode, setDarkMode, cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MiniLoja com CSS Global</div>
      <div className="navbar-actions">
        <button
          className="btn btn-ghost"
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Alternar tema"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
        <div className="cart" aria-label="Carrinho de compras">
          🛒
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </nav>
  );
}
