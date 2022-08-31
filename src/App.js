import { Routes, Route } from 'react-router-dom';
import AllMeetupsPage from './Pages/AllMeetups';
import FavouritesPage from './Pages/Favourites';
import NewMeetupsPage from './Pages/NewMeetup';
import Layout from './components/layouts/Layout';

function App() {
  return ( 
      <Layout>        
        <Routes>
            <Route path='/' element={<AllMeetupsPage />} />
            <Route path='/new-meetup' element={<NewMeetupsPage />} />
            <Route path='/favourites' element={<FavouritesPage />} />
        </Routes>
      </Layout>    
    
  )
}

export default App;
