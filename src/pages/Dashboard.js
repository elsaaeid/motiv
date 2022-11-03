import React from 'react' 
import Cards from "../components/containerContent/cards/Cards"
import Groups from "../components/containerContent/show-groups/Groups"
import RecommendGroups from "../components/containerContent/recommend-groups/RecommendGroups"


const Dashboard = () => {
  return (
      <div className='container'>
        <Cards />
        <Groups />
        <RecommendGroups />
      </div>
  )
}

export default Dashboard
