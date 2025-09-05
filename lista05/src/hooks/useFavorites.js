import { useLocalStorage } from './useLocalStorage'
import { useCallback } from 'react'

/**
 * Hook para gerenciar favoritos no localStorage.
 * Cada favorito é um objeto mínimo com imdbID, Title, Year, Poster.
 */
export function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage('favorites', [])

  const add = useCallback((movie) => {
    setFavorites((prev) => {
      if (prev.some(m => m.imdbID === movie.imdbID)) return prev
      return [...prev, movie]
    })
  }, [setFavorites])

  const remove = useCallback((imdbID) => {
    setFavorites((prev) => prev.filter(m => m.imdbID !== imdbID))
  }, [setFavorites])

  const toggle = useCallback((movie) => {
    setFavorites((prev) => {
      const exists = prev.some(m => m.imdbID === movie.imdbID)
      return exists ? prev.filter(m => m.imdbID !== movie.imdbID) : [...prev, movie]
    })
  }, [setFavorites])

  const isFavorite = useCallback((imdbID) => favorites.some(m => m.imdbID === imdbID), [favorites])

  return { favorites, add, remove, toggle, isFavorite }
}