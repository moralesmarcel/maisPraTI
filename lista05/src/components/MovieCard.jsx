import { Link } from 'react-router-dom'

/* Cartão de filme para a grade de resultados e  */
export default function MovieCard({ movie, onToggleFavorite, isFavorite }) {
  const { Title, Year, Poster, imdbID } = movie
  const posterSrc = Poster && Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/300x445?text=Sem+Poster'

  return (
    <div className="card">
      <img src={posterSrc} alt={`Poster de ${Title}`} className="w-full aspect-[2/3] object-cover" loading="lazy" />
      <div className="card-body">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="card-title">{Title}</h3>
            <p className="card-meta mt-1">{Year}</p>
          </div>
          <span className="badge">{isFavorite ? '★' : '☆'}</span>
        </div>
        <div className="mt-3 flex gap-2">
          <Link to={`/details/${imdbID}`} className="btn btn-primary text-sm">Ver detalhes</Link>
          <button
            className="btn text-sm"
            onClick={() => onToggleFavorite && onToggleFavorite(movie)}
            aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          >
            {isFavorite ? 'Remover' : 'Favoritar'}
          </button>
        </div>
      </div>
    </div>
  )
}