import React, { useEffect, useState } from 'react'
import '../Components/responsive.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import briefcase1 from '../Assets/images/briefcase1.png'
import onlineshop from '../Assets/images/onlineshop.png'
import report from '../Assets/images/report.png'
import  image12 from '../Assets/images/image12.jpg'
import image_6 from '../Assets/images/image_6.jpg'
import product1 from '../Assets/images/product1.png'
import product2 from '../Assets/images/product2.png'
import product3 from '../Assets/images/product3.png'
import product4 from '../Assets/images/product4.png'
import product5 from '../Assets/images/product5.png'
import product6 from '../Assets/images/product6.png'
import product7 from '../Assets/images/product7.png'
import video from '../Assets/video.mp4'
/*------mui import----*/
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Footer from '../Components/Footer'
/*
import product8 from '../Assets/images/product8.png'
*/



const style = {
   position: 'absolute',
    top: '50%',
    textAlign: 'center',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    bgcolor: 'background.paper',
    border: '2px solid #fff',
    boxShadow: '24',
    p: 4,
};

export default function Home() {
    const [open, setOpen] = useState(false)
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   useEffect(()=>{
      Aos.init({
         duration: 2000
      })
   }, [])
  return(
  <div>
   <div className='grid-container'>
   <section>
   <div className='sub-container'>
    <img src={image_6} alt="" />
    <div data-aos="fade-top">
      <h1>Quia pariatur nisi soluta tenetur</h1>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi non sunt amet vero molestiae, 
    culpa doloribus perferendis architecto consequatur repellendus cupiditate deserunt. Distinctio soluta ratione aperiam molestiae cum
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, earum harum aut eius alias fugiat. Ut cumque quasi eum velit officia
     fugit voluptate laudantium neque fugiat tempora voluptas, recusandae ea!
    </p>
    <button className="btn1">Button</button>
    </div>
   </div>
   </section>
   {/*--------product section-----*/}
  <section>
 <div className='section-container'>
<h1> dicta voluptatem rem fuga fugit, ab sunt officia iste possimus</h1>
<div class="products-container">

<div className="product" data-name="p-1">
   <img src={product1}alt="" />
   <h3>camera</h3>
   <div class="price">$2.00</div>
   <button className="btn2" onClick={handleOpen}>Buy</button>
</div>

<div className="product" data-name="p-2">
   <img src={product2} alt="" />
   <h3>Land phone</h3>
   <div class="price">$2.00</div>
   <button className="btn2">Buy</button>
</div>

<div className="product" data-name="p-3">
   <img src={product3} alt="" />
   <h3>WristWatch</h3>
   <div class="price">$2.00</div>
   <button className="btn2">Buy</button>
</div>

<div className="product" data-name="p-4">
   <img src={product4} alt="" />
   <h3>Bluetooth</h3>
   <div class="price">$2.00</div>
   <button className="btn2">Buy</button>
</div>

<div className="product" data-name="p-5">
   <img src={product5} alt="" />
   <h3>Camera&nbsp;lens</h3>
   <div class="price">$2.00</div>
   <button className="btn2">Buy</button>
</div>

<div className="product" data-name="p-6">
   <img src={product6} alt="" />
   <h3>Headset</h3>
   <div class="price">$2.00</div>
   <button className="btn2">Buy</button>
</div>

<div className="product" data-name="p-7">
   <img src={product7} alt="" />
   <h3>Shades</h3>
   <div class="price">$2.00</div>
   <button className="btn2">Buy</button>
</div>

<div className="product" data-name="p-8">
   <img src={product3} alt="" />
   <h3>Wristwatch</h3>
   <div class="price">$2.00</div>
   <button className="btn2">Buy</button>
</div>

</div>
 </div>

 <Modal
  open={open}
  onClose={handleClose}
  >

   <Box sx={style} data-target="p-1" className="modal-box">
   <i class="fas fa-times" onClick={handleClose}></i>
      <img src={product1} alt="" />
      <h3>Digital Camera</h3>
      <div className="stars">
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star"></i>
         <i className="fas fa-star-half-alt"></i>
         <span>( 250 )</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div className="price">$2.00</div>
      <div className="buttons">
         <a href="#" className="buy">Buy now</a>
         <a href="#" className="cart">Add to cart</a>
      </div>
   </Box>
   </Modal>
{/*
    <Modal
  open={open}
  onClose={handleClose}
  >
      <Box sx={style} data-target="p-2" className="modal-box">
      <i class="fas fa-times" onClick={handleClose}></i>
      <img src={product2} alt="" />
      <h3>Land Phone</h3>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <span>( 250 )</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div class="price">$2.00</div>
      <div class="buttons">
         <a href="#" class="buy">Buy now</a>
         <a href="#" class="cart">Add to cart</a>
      </div>
  </Box>
   </Modal>
   
   <Modal
  open={open}
  onClose={handleClose}
  >
     <Box sx={style} data-target="p-3" className="modal-box">
      <i class="fas fa-times"></i>
      <img src={product3} alt="" />
      <h3>Wrist Watch</h3>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <span>( 250 )</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div class="price">$2.00</div>
      <div class="buttons">
         <a href="#" class="buy">buy now</a>
         <a href="#" class="cart">add to cart</a>
      </div>
  </Box>
   </Modal>

      <Modal
      open={open}
      onClose={handleClose}
        >
       <Box sx={style} data-target="p-4" className="modal-box">
      <i class="fas fa-times"></i>
   <img src={product4} alt="" />
      <h3>Bluetooth</h3>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <span>( 250 )</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div class="price">$2.00</div>
      <div class="buttons">
         <a href="#" class="buy">buy now</a>
         <a href="#" class="cart">add to cart</a>
      </div>
  </Box>
   </Modal>

    <Modal
    open={open}
    onClose={handleClose}
      >
   <Box sx={style} data-target="p-5" className="modal-box">
      <i class="fas fa-times"></i>
   <img src={product5} alt="" />
      <h3>Camera Lens</h3>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <span>( 250 )</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div class="price">$2.00</div>
      <div class="buttons">
         <a href="#" class="buy">buy now</a>
         <a href="#" class="cart">add to cart</a>
      </div>
   </Box>
   </Modal>

      <Modal
      open={open}
      onClose={handleClose}
        >
   <Box sx={style} data-target="p-6" className="modal-box">
      <i class="fas fa-times"></i>
      <img src={product6} alt="" />
      <h3>Headset</h3>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <span>( 250 )</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div class="price">$2.00</div>
      <div class="buttons">
         <a href="#" class="buy">buy now</a>
         <a href="#" class="cart">add to cart</a>
      </div>
 </Box>
   </Modal>

   <Modal
      open={open}
      onClose={handleClose}
        >
   <Box sx={style} data-target="p-7" className="modal-box">
      <i class="fas fa-times"></i>
      <img src={product7} alt="" />
      <h3>Shades</h3>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <span>( 250 )</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div class="price">$2.00</div>
      <div class="buttons">
         <a href="#" class="buy">buy now</a>
         <a href="#" class="cart">add to cart</a>
      </div>
 </Box>
   </Modal>

   <Modal
      open={open}
      onClose={handleClose}
        >
   <Box sx={style} data-target="p-8" className="modal-box">
      <i class="fas fa-times"></i>
      <img src={product3} alt="" />
      <h3>Wrist Watch</h3>
      <div class="stars">
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star"></i>
         <i class="fas fa-star-half-alt"></i>
         <span>( 250 )</span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
      <div class="price">$2.00</div>
      <div class="buttons">
         <a href="#" class="buy">buy now</a>
         <a href="#" class="cart">add to cart</a>
      </div>
 </Box>
   </Modal>
  */}

  </section>
{/*----Another section here----*/}
  <section>
   <div className='sub-container2'>

      <div className='image-container'>
      <img src={image12} />
      </div>
    <div className="right-container">
      <h1>Distinctio soluta ratione aperiam molestiae cum</h1>
    <div className='right-sub-container'>
    <h2>Quia pariatur nisi</h2>
         <div className='image-div'>
         <img src={briefcase1} alt="images" />
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi non sunt amet vero molestiae, 
    culpa doloribus perferendis architecto consequatur repellendus cupiditate deserunt. Distinctio soluta ratione aperiam molestiae cum
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
    </div>
    </div>

    <div className='right-sub-container'>
    <h2>vero molestiae</h2>
         <div className='image-div'>
         <img src={onlineshop} alt="images" />
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi non sunt amet vero molestiae, 
    culpa doloribus perferendis architecto consequatur repellendus cupiditate deserunt. Distinctio soluta ratione aperiam molestiae cum
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
    </div>
    </div>

    <div className='right-sub-container'>
    <h2>cupiditate deserunt</h2>
         <div className='image-div'>
         <img src={report} alt="images" />
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi non sunt amet vero molestiae, 
    culpa doloribus perferendis architecto consequatur repellendus cupiditate deserunt. Distinctio soluta ratione aperiam molestiae cum
    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
    </p>
    </div>
    </div>
    </div>
   </div>
   </section>
{/*----Another section here----*/}
   <section>
   <div className='section-container'>
   <h1> dicta voluptatem rem</h1>
      <div className='form-container'>
       <form action="">
         <div>
         <div className='input-sect'>
      <input type="text" placeholder='Name' /> 
      <input type="text" placeholder='Full name' /> 
      </div>

      <div className='input-sect'>
      <input type="text" placeholder='Name' /> 
      <input type="password" placeholder='Password' /> 
      </div>
      </div> 

      <div>
      <textarea name="" id=""  placeholder='Type your messages...'></textarea>
      </div>
      <button className="btn1" type='submit'>Button</button>
       </form>
      </div>
       <video src={video} width='100%' height="350px" controls>sorry your browser does not support embedding videos</video>
      </div>
   </section>
{/*----Footer section here----*/}

   <section>
 <Footer />
   </section>
   </div>
  </div>
  )
}
