import { useState, useEffect, useMemo } from 'react'
import './App.css'
import HeaderCard from './component/Card/HeaderCard'
import BackgroundCard from './component/Card/BackgroundCard'
import ImageCard from './component/Card/ImageCard'
import InfoCard from './component/Card/InfoCard'
import CategoryCard from './component/Card/info/CategoryCard'
import PriceCard from './component/Card/info/PriceCard'
import WebBackHeader from './component/web/header/WebBackHeader'
import CategorySelec from './component/web/menu/CategorySelec'
import Footer from './component/web/footer/Footer'
import WebMenu from './component/web/WebMenu'
import PanelMain from './component/main/PanelMain'
import ResultsSearch from './component/main/ResultsSearch'

const categoryTranslations = {
  Seafood: 'Mariscos',
  Chicken: 'Pollo',
  Beef: 'Carne de Res',
  Vegetarian: 'Vegetariano',
  Dessert: 'Postres',
  Pasta: 'Pasta'
}

function App() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('Seafood')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    'Seafood',
    'Chicken',
    'Beef',
    'Vegetarian',
    'Dessert',
    'Pasta'
  ]

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

  const filteredMeals = useMemo(() => {
    if (!searchTerm) return meals
    return meals.filter(meal =>
      meal.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [searchTerm, meals])

  const handleSearchChange = (e) => setSearchTerm(e.target.value)

  if (loading) return <div className="loading"><h2>Cargando menú...</h2></div>
  if (error) return (
    <div className="error">
      <h2>Error: {error}</h2>
      <p>Por favor, intenta nuevamente más tarde.</p>
    </div>
  )

  return (
    <>

      <WebMenu>
        <WebBackHeader />
        <CategorySelec
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categoryTranslations={categoryTranslations}
        />
        <Footer />
      </WebMenu>

      <PanelMain>
        <ResultsSearch
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          filteredMeals={filteredMeals}
          selectedCategory={selectedCategory}
          categoryTranslations={categoryTranslations}
        />

        {filteredMeals.length === 0 ? (
          <div className="no-results">
            <h3>No hay platos para mostrar.</h3>
          </div>
        ) : (
          <div className="cards-container">
            {filteredMeals.map(meal => (
              <BackgroundCard key={meal.idMeal}>
                <HeaderCard mealName={meal.strMeal} />
                <ImageCard
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width="93%"
                  height="90%"
                />
                <InfoCard>
                  <CategoryCard category={categoryTranslations[meal.category] || meal.category} />
                  <PriceCard price={`$${meal.price}`} />
                </InfoCard>
              </BackgroundCard>
            ))}
          </div>

        )}
      </PanelMain>

    </>
  )
}

export default App
