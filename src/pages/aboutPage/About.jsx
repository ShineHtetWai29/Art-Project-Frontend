import React from 'react'
import staff1 from '../../images/staff1.png'
import AboutCard from '../component/AboutCard'
import about1 from '../../images/about1.png';
import AboutDetail from '../component/AboutDetail';
import about6 from '../../images/about6.jpg';
import about3 from '../../images/about3.jpg';
import about4 from '../../images/about4.jpg';
import profile3 from '../../images/profile3.jpg';
import profile4 from '../../images/profile4.jpg';
import profile5 from '../../images/profile5.jpg';
import profile6 from '../../images/profile6.webp';
import profile7 from '../../images/profile7.webp';
import profile8 from '../../images/profile8.webp';
import profile9 from '../../images/profile9.webp';

const staffList = [
  {
    id: 1,
    img: profile9,
    name: 'Mr. Smith',
    email: 'smith@gmail.com',
    phone:"0978678999"
  }

]
const staffList1 = [
  {
    id: 1,
    img: profile3,
    name: "Mr.Mike",
    email: 'mike@gmail.com',
    phone:"09783238999"
  },
  {
    id: 2,
    img: profile4,
    name: "Mrs.Sue",
    email: 'sue@gmail.com',
    phone:"0978678999"
  },
  {
    id: 3,
    img: profile5,
    name: "Mrs.Sam",
    email: 'sam@gmail.com',
    phone:"0978678999"
  },
  {
    id: 4,
    img: profile6,
    name: "Mrs.Saint",
    email: 'saint@gmail.com',
    phone:"0978678999"
  },
  {
    id: 5,
    img: profile7,
    name: "Mr.Fourth",
    email: 'fourth@gmail.com',
    phone:"0978678999"
  },
  {
    id: 6,
    img: profile8,
    name: "Mr.Ben",
    email: 'ben@gmail.com',
    phone:"0978678999"
  },
]

const aboutList = [
  {
    id: 1,
    image: about6,
    title: "Painting",
    description: "We have an individual relationship with all our artists and we choose them based on their reputation and professionalism. All our art is realistically priced to sell. Most of our customers just want to buy their art and go. "
  },
  {
    id: 1,
    image: about3,
    title: "Painting",
    description: "We have an individual relationship with all our artists and we choose them based on their reputation and professionalism. All our art is realistically priced to sell. Most of our customers just want to buy their art and go. "
  },
  {
    id: 1,
    image: about4,
    title: "Painting",
    description: "We have an individual relationship with all our artists and we choose them based on their reputation and professionalism. All our art is realistically priced to sell. Most of our customers just want to buy their art and go. "
  },
]

const About = () => {
  return (
    <>
      <div className='w-[1300px] mx-auto '>
        <div className=' mb-12'>
          <div className='m-auto font-muli mb-9'>
            <h2 className='  text-center font-bold text-[30px] mb-5 p-5'>AboutUs</h2>
            <div className='flex gap-20'>
              <img src={about1} className='w-[500px] h-[500px]' alt="about" />
              <div className='p-16 '>
                <h2 className='text-center font-bold text-[30px] '>About Our ArtGallery</h2>
                <p className=' w-[500px] m-auto items-center leading-8'>At ArtGallery.co.uk you can buy stunning original art by some of the world’s most talented artists.
                  We sell artwork by established "names" as well as the cream of the crop of emerging talent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique enim nam
                  mollitia quibusdam iure inventore cumque itaque praesentium minima impedit, sapiente quasi deserunt repudiandae ea. Suscipit, tempore magnam. In, animi?</p>
              </div>

            </div>

          </div>
          <div className='font-muli'>
            <div className='m-auto w-[1340px] leading-6'>
              <h2 className='text-center text-3xl font-bold text-[25px] mb-9'>Feature Arts</h2>
              
              <div className=" flex gap-20">
              {aboutList.map((about)=>
                <AboutDetail id={about.id} image={about.image} title={about.title} description={about.description}/>
                )
                }
                </div>
                

            </div>
          </div>
        </div>


        <div className='font-muli'>
          <h2 className='  text-center font-bold text-[30px] mb-5'>Our Team Members</h2>
          <div className='w-auto flex flex-col items-center justify-center staffs'>
            <div className=" flex flex-col items-center justify-center key={staffs.id} ">
              {
                staffList.map((staff) =>
                  <AboutCard id={staff.id} img={staff.img} name={staff.name} email={staff.email} phone={staff.phone}  />
                )
              }
            </div>
            <div className="grid grid-cols-3 gap-2 key={staffs.id} ">
              {
                staffList1.map((staff) =>
                  <AboutCard id={staff.id} img={staff.img} name={staff.name} email={staff.email} phone={staff.phone} />
                )
              }
            </div>

          </div>

        </div>

      </div>


    </>
  )
}

export default About