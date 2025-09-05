import { useEffect, useState } from 'react'

/**
 * Hook genérico para sincronizar estado com localStorage.
 * @param {string} key - Chave no localStorage.
 * @param {any} initialValue - Valor inicial (ou função que retorna).
 */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw != null ? JSON.parse(raw) : (typeof initialValue === 'function' ? initialValue() : initialValue)
    } catch {
      return typeof initialValue === 'function' ? initialValue() : initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {}
  }, [key, value])

  return [value, setValue]
}