import { Helmet } from 'react-helmet-async'
import Categories from '../../components/Categories/Categories'
import Rooms from '../../components/Home/Rooms'
import Carousel from '../../components/Carosel'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Contest Platform |Home</title>
      </Helmet>
      {/*banner section */}
      <Carousel></Carousel>
      {/* Categories section  */}
      <Categories />
      {/* Rooms section */}
      <Rooms />
    </div>
  )
}

export default Home
