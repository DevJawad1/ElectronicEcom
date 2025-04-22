import React from 'react'
import { Navbar } from '../../Components/Navbar/Navbar'
import PgIndicator from '../../Components/pageIndicator/PgIndicator'
import CategoryDisp from '../../Components/categoryDisp/CategoryDisp'

const Productpage = () => {
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