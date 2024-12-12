
import React from 'react'
import house from '../Images/house.jpg'
import Card from '../Components/Card'
import RentalCard from '../Components/RentalCard';

function Home() {
  
  return (
    <div className='home'>
        <div className="home__cardContainer">
            <RentalCard
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmis6d0j_vV-PENnkM5CD9qhoC0-b-FCf7nA&s"
              headingTitle= "Luxury Apartment"
              description= "Spacious apartment for lease"
             
              availability= "Available now"
              price= {2000}
              isFeatured={true}
              buttonText= "Features"
            />
            <Card
               src="https://da28rauy2a860.cloudfront.net/completehome/wp-content/uploads/2021/03/03114534/Millbrook-Homes-58series-1-1024x683.jpg"
               title= "Luxury Apartment"
               description= "Beautiful Beach house villa for sale"
               rating={4.9}
               dates= "Available January"
               price= {15000}
               isFeatured={true}
               buttonText= "Buy Now"
            />
</div>
    </div>
  )
}

export default Home