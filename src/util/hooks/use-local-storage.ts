import { useCallback, useState } from 'react'

export default function useLocalStorage<T>(key: string, initialValue?: T) {
   const [storedValue, setStoredValue] = useState<T>(() => {
      try {
         const item = window.localStorage.getItem(key)
         return (item ? JSON.parse(item) : null) ?? initialValue
      } catch (error) {
         console.log(error)
         return initialValue
      }
   })

   const setValue: React.Dispatch<React.SetStateAction<T>> = useCallback(
      (value: T | ((value: T) => T)) => {
         try {
            const valueToStore = value instanceof Function ? value(storedValue) : value
            setStoredValue(valueToStore)
            window.localStorage.setItem(key, JSON.stringify(valueToStore))
         } catch (error) {
            console.log(error)
         }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [key]
   )

   return [storedValue, setValue] as [T, React.Dispatch<React.SetStateAction<T>>]
}
