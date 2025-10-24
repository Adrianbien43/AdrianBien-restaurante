import { useState, useMemo } from 'react'
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
import { useMeals } from './hooks/useMeals'

const categoryTranslations = {
  Seafood: 'Mariscos',
  Chicken: 'Pollo',
  Beef: 'Carne de Res',
  Vegetarian: 'Vegetariano',
  Dessert: 'Postres',
  Pasta: 'Pasta'
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Seafood')
  const [searchTerm, setSearchTerm] = useState('')

  const { meals, loading, error } = useMeals(selectedCategory)

  const categories = [
    'Seafood',
    'Chicken',
    'Beef',
    'Vegetarian',
    'Dessert',
    'Pasta'
  ]

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