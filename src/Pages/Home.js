
import React from 'react'
import house from '../Images/house.jpg'
import Card from '../Components/Card'

function Home() {
  return (
    <div className='home'>
        <div className="home__cardContainer">
       
        <Card
  src={house}
  title="Beautiful Beach House"
  description="A cozy house by the beach"
  rating="4.8"
  dates="Available in December"
  price="$200 per night"
  isFeatured={true} // This controls if the dynamic button shows
  buttonText="Super Choice" // This controls the button text
/>
<Card
  src={house}
  title="Beautiful Beach House"
  description="A cozy house by the beach"
  rating="4.8"
  dates="Available in December"
  price="$200 per night"
  isFeatured={true} // This controls if the dynamic button shows
  buttonText="Featured" // This controls the button text
/>
<Card
  src={house}
  title="Beautiful Beach House"
  description="A cozy house by the beach"
  rating="4.8"
  dates="Available in December"
  price="$200 per night"
  isFeatured={true} // This controls if the dynamic button shows
  buttonText="Luxury host" // This controls the button text
/>
<Card
  src={house}
  title="Beautiful Beach House"
  description="A cozy house by the beach"
  rating="4.8"
  dates="Available in December"
  price="$200 per night"
  isFeatured={true} // This controls if the dynamic button shows
  buttonText="Super Choice" // This controls the button text
/>
<Card
  src={house}
  title="Beautiful Beach House"
  description="A cozy house by the beach"
  rating="4.8"
  dates="Available in December"
  price="$200 per night"
  isFeatured={true} // This controls if the dynamic button shows
  buttonText="Super Choice" // This controls the button text
/>
<Card
  src={house}
  title="Beautiful Beach House"
  description="A cozy house by the beach"
  rating="4.8"
  dates="Available in December"
  price="$200 per night"
  isFeatured={true} // This controls if the dynamic button shows
  buttonText="Super Choice" // This controls the button text
/>
<Card
  src={house}
  title="Beautiful Beach House"
  description="A cozy house by the beach"
  rating="4.8"
  dates="Available in December"
  price="$200 per night"
  isFeatured={true} // This controls if the dynamic button shows
  buttonText="Super Choice" // This controls the button text
/>
        
<Card
  src={house}
  title="Beautiful Beach House"
  description="A cozy house by the beach"
  rating="4.8"
  dates="Available in December"
  price="$200 per night"
  isFeatured={true} // This controls if the dynamic button shows
  buttonText="Super Choice" // This controls the button text
/>
     
</div>
    </div>
  )
}

export default Home