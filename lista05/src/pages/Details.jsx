import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getMovieDetails } from '../api/omdb'
import { useFavorites } from '../hooks/useFavorites'

export default function DetailsPage() {
  const { imdbID } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { toggle, isFavorite } = useFavorites()

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    getMovieDetails(imdbID)
      .then((d) => {
        if (cancelled) return
        setData(d)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err.message || 'Erro ao carregar detalhes')
      })
      .finally(() => !cancelled && setLoading(false))
    return () => { cancelled = true }
  }, [imdbID])

  if (loading) return <div className="detail-wrapper"><p>Carregando detalhes...</p></div>
  if (error) return <div className="detail-wrapper"><p className="text-red-600">Erro: {error}</p></div>
  if (!data) return null

  const posterSrc = data.Poster && data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/300x445?text=Sem+Poster'

  const minimalMovie = {
    Title: data.Title,
    Year: data.Year,
    Poster: data.Poster,
    imdbID: data.imdbID,
  }

  return (
    <div className="detail-wrapper">
      <img src={posterSrc} alt={`Poster de ${data.Title}`} className="poster" />
      <div className="detail-card">
        <div className="detail-content">
          <div className="flex items-start justify-between gap-3">
            <h1 className="text-2xl font-semibold">{data.Title} ({data.Year})</h1>
            <div className="flex gap-2">
              {/* Botão Voltar */}
              <button 
                className="btn bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
                onClick={() => navigate(-1)}
              >
                ← Voltar
              </button>

              {/* Botão Favorito */}
              <button className="btn" onClick={() => toggle(minimalMovie)}>
                {isFavorite(data.imdbID) ? '★ Remover favorito' : '☆ Adicionar favorito'}
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">{data.Runtime} • {data.Genre}</p>
          <p className="text-sm"><span className="font-semibold">Diretor:</span> {data.Director}</p>
          <p className="text-sm"><span className="font-semibold">Elenco:</span> {data.Actors}</p>
          <p className="text-sm"><span className="font-semibold">Avaliação IMDb:</span> {data.imdbRating}</p>
          <p className="text-sm leading-relaxed mt-2">{data.Plot}</p>
          {Array.isArray(data.Ratings) && data.Ratings.length > 0 && (
            <div className="mt-3">
              <p className="text-sm font-semibold">Outras avaliações:</p>
              <ul className="list-disc pl-5 text-sm">
                {data.Ratings.map((r, i) => (
                  <li key={i}>{r.Source}: {r.Value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
