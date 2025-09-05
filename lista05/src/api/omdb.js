const API_URL = 'https://www.omdbapi.com/'

// Lê a chave do .env (VITE_OMDB_API_KEY). O Vite expõe via import.meta.env.
const API_KEY = import.meta.env.VITE_OMDB_API_KEY

if (!API_KEY) {
  // Aviso inicial no console para ajudar em DX.
  console.warn('VITE_OMDB_API_KEY não definida. Crie um .env com VITE_OMDB_API_KEY=...')
}

/**
 * Busca filmes por termo com paginação.
 * @param {string} term - termo de busca
 * @param {number} page - página (1..N)
 */
export async function searchMovies(term, page = 1) {
  const url = new URL(API_URL)
  url.searchParams.set('apikey', API_KEY || '')
  url.searchParams.set('s', term)
  url.searchParams.set('type', 'movie')
  url.searchParams.set('page', String(page))

  const res = await fetch(url)
  if (!res.ok) throw new Error('Erro de rede ao buscar filmes')
  const data = await res.json()
  if (data.Response === 'False') {
    // OMDb retorna { Response: "False", Error: "Movie not found!" }
    throw new Error(data.Error || 'Erro ao buscar filmes')
  }
  // Retorna lista e totalResults (string)
  return { list: data.Search || [], total: Number(data.totalResults || 0) }
}

/**
 * Busca detalhes por imdbID.
 * @param {string} imdbID
 */
export async function getMovieDetails(imdbID) {
  const url = new URL(API_URL)
  url.searchParams.set('apikey', API_KEY || '')
  url.searchParams.set('i', imdbID)
  url.searchParams.set('plot', 'full')

  const res = await fetch(url)
  if (!res.ok) throw new Error('Erro de rede ao carregar detalhes')
  const data = await res.json()
  if (data.Response === 'False') throw new Error(data.Error || 'Não foi possível carregar detalhes')
  return data
}