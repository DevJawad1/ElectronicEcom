import React, {useState} from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import PgIndicator from '../../Components/pageIndicator/PgIndicator'
import CategoryDisp from '../../Components/categoryDisp/CategoryDisp'

const Productpage = () => {
    const [selectedCategories, setSelectedCategories] = useState([])
    const handleCategorySelection = (selected) => {
      setSelectedCategories(selected)
      console.log(selected)
    }
  
  return (
    <div>
        <Navbar/>
        <PgIndicator pgName={'Product page'}/>
        <div className="mt-3">
            <div className="d-flex">
            <CategoryDisp onSelectChange={handleCategorySelection} />
            </div>
        </div>
    </div>
  )
}

export default Productpage