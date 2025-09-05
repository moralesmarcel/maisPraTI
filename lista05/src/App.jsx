import { Link, NavLink, Route, Routes } from 'react-router-dom'
import SearchPage from './pages/Search'
import DetailsPage from './pages/Details'
import FavoritesPage from './pages/Favorites'
import { useEffect, useState } from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'

/**
 * Componente principal que define layout, rotas e tema (dark mode).
 */
export default function App() {
  // Sincroniza preferência de tema com localStorage
  const [storedTheme, setStoredTheme] = useLocalStorage('theme', 'light')
  const [theme, setTheme] = useState(storedTheme)

  // Aplica a classe 'dark' no <html> (Tailwind com darkMode: 'class')
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    setStoredTheme(theme)
  }, [theme, setStoredTheme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="nav-inner">
          <Link to="/" className="brand">🎬 BuscaFILMES</Link>
          <nav className="nav-links">
            <NavLink to="/favorites" className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'}>Favoritos</NavLink>
            <button className="btn" onClick={toggleTheme} aria-label="Alternar tema">
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/details/:imdbID" element={<DetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<p className="search-section">Página não encontrada.</p>} />
        </Routes>
      </main>

      <footer className="mt-5 py-5 text-center text-s text-gray-500 dark:text-gray-400">
        <p>© 2025 
          <a href="https://github.com/moralesmarcel" target="_blank"> Marcel Morales. Todos os direitos reservados</a>
        </p>
      </footer>
    </div>
  )
}