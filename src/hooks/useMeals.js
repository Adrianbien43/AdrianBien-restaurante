import { useState, useEffect } from 'react'

export const useMeals = (selectedCategory) => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        setLoading(true)
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
        if (!res.ok) throw new Error('Error al cargar los datos')

        const data = await res.json()

        const mealsWithPrices = data.meals.map(meal => ({
          ...meal,
          price: (Math.random() * 30 + 10).toFixed(2),
          category: selectedCategory
        }))

        setMeals(mealsWithPrices)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMeals()
  }, [selectedCategory])

  return { meals, loading, error }
}