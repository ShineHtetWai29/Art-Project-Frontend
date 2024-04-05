import React from 'react'
import blog1 from '../../images/blog1.webp';
import blog3 from '../../images/blog3.jpg';
import blog4 from '../../images/blog4.jpg';
import blog5 from '../../images/blog5.jpg';
import blog6 from '../../images/blog6.png';
import blog7 from '../../images/blog7.jpg';
import BlogCard from '../component/BlogCard';
import profile4 from '../../images/profile4.jpg';
import profile5 from '../../images/profile5.jpg';

const blogList = [
  {
    id:1,
    image:blog6,
    title: "Popular Arts",
    description : "lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet",
    icon: profile5,
    name : "Mary Cassatt",
    para : "lorem ipsum dolor sit amet,Loore magna "
  },
  {
    id:2,
    image:blog7,
    title: "Creative Arts",
    description : "lorem ipsum dolor sit amet, consectetur adip. Lorem ipsum dolor sit amet",
    icon: profile4,
    name : "Oscar-Claude Monet",
    para : "lorem ipsum dolor sit amet,Loore magna "
  }
]

const Blog = () => {
  return (
    <>
      <div className='w-[1440px] font-muli'>
        <div className='w-[1200px] mx-auto mt-7 flex mb-10'>
          <div>
            <img src={blog1} className='w-[500px] h-[400px]' alt="" />
          </div>
          <div className='w-[900px] p-5 text-center justify-center'>
            <h2 className='font-bold text-3xl mt-20 mb-10'>The Most Popular Arts are you greatest source of learning</h2>
            <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, assumenda cumque omnis sit commodi
              reiciendis. Dolor doloribus quae ipsa nostrum esse, eos eligendi maxime similique, ullam
              architecto corrupti vel suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
              inventore quis quae quas temporibus quam enim dignissimos deleniti eveniet provident vel ut aut nesciunt fuga,
              mollitia veniam, nihil ad laudantium.</p>
          </div>
        </div>

        <div className='mx-auto w-[1200px] flex gap-10 mb-20 '>
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <img className="w-full" src={blog3} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Famous Abstract Art</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>

          </div>
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl mt-20">
            <img className="" src={blog4} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>

          </div>
          <div className="max-w-sm rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <img className="w-full" src={blog5} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>

          </div>
        </div>
        <div className='w-[1200px] mx-auto flex gap-20'>

          {blogList.map((blog) =>
            <BlogCard id={blog.id} image={blog.image} title={blog.title} description={blog.description} icon={blog.icon} name={blog.name} para={blog.para}/>
  )  }


        </div>

      </div>

    </>
  )
}

export default Blog