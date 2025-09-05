import { useFavorites } from '../hooks/useFavorites'
import MovieCard from '../components/MovieCard'

export default function FavoritesPage() {
  const { favorites, toggle, isFavorite } = useFavorites()

  return (
    <div className="search-section">
      <h2 className="text-xl font-semibold">Meus Favoritos</h2>

      {favorites.length === 0 && (
        <p className="favorite-empty">Você ainda não adicionou nenhum favorito.</p>
      )}

      <div className="grid-results">
        {favorites.map((m) => (
          <MovieCard
            key={m.imdbID}
            movie={m}
            onToggleFavorite={toggle}
            isFavorite={isFavorite(m.imdbID)}
          />
        ))}
      </div>
    </div>
  )
}