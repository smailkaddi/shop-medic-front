import '../index.css'
import {useEffect, useState} from 'react';
import { Link,useHistory  } from 'react-router-dom';
import axios from 'axios';
function Home() {

  const history = useHistory();
//----------- show gategory added in datatable------------
const [product , setProduct] = useState(null);
useEffect(()=>{

  axios.get(`https://app-ndoejs.herokuapp.com/products`)
    .then(function (response) {
      setProduct(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])


const [category , setcategory] = useState(null);
useEffect(()=>{

  axios.get(`https://app-ndoejs.herokuapp.com/category`)
    .then(function (response) {
      setcategory(response.data)
    }).catch(function (err) {
      console.log(err);
  });
  
},[])

const getIdProduct = (category)=>{
  localStorage.setItem('idProduct',category);
  history.push('/sousProduct');


}

const Checkout = (product)=>{
  localStorage.setItem('idProducttobuy',product);
  history.push('/Home/CheckOut');
  console.log(product);

}


  return (












    
  <header className="bg-white bg-no-repeat bg-center bg-cover		" >
  <div className="container mx- auto px-6 py-3 bg-black mb-8 ">
    <div className="flex items-center justify-between">
      <div className="hidden w-full text-white md:flex md:items-center">
        <span className="mx-1 text-sm">Medicament</span>
      </div>
      <div className="w-full text-gray-700 md:text-center text-2xl font-semibold">
      </div>
      <div className="flex items-center justify-end w-full">
     
        <div className="flex sm:hidden">
        <div className="flex items-center justify-center w-screen h-screen">
  {/* Component Start */}
  <div className="grid grid-cols-2 w-full max-w-screen-sm">
    <div>
      <input className="hidden gender" id="pria" type="radio" name="radio" defaultChecked />
      <label className="flex justify-center p-4 border-2 border-black cursor-pointer" htmlFor="pria">
        <span className="text-xl font-bold">Pria</span>
      </label>
    </div>
    <div>
      <input className="hidden gender" id="wanita" type="radio" name="radio" />
      <label className="flex justify-center p-4 border-2 border-black cursor-pointer" htmlFor="wanita">
        <span className="text-xl font-bold ">Wanita</span>
      </label>
    </div>
  </div>
  {/* Component End  */}
</div>

          
        </div>
      </div>
    </div>
    <nav class="isOpen ? '' : 'hidden'" className="sm:flex sm:justify-center sm:items-center mt-4">
      <div className="flex flex-col sm:flex-row">
      { category && category.map(item =>(
           <Link onClick={() => getIdProduct(item._id)}> <a className="mt-3 text-white hover:underline sm:mx-3 sm:mt-0" >{item.CategoryName}</a></Link>
        ))}
        
      </div>
      
    </nav>
    <div className="relative mt-6 max-w-lg mx-auto">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
          <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
    </div>
  </div>
  <div className="container mx-auto px-6">
  <div className="h-64 rounded-md overflow-hidden bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1550657368-3db73991cb2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}}>
      <div className="bg-gray-900 bg-opacity-50 flex items-center h-full">
        <div className="px-10 max-w-xl">
          <h2 className="text-2xl text-white font-semibold">Medicament</h2>
          <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
          <button className="flex items-center mt-4 px-3 py-2 bg-black text-white text-sm uppercase font-medium rounded hover:bg-black focus:outline-none focus:bg-black">
            <span>Shop Now</span>
            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </div>
    </div>
    
  <div className="mt-16 m-28">
    <h3 className="text-gray-600 text-2xl font-medium  text-center text-5xl">Product</h3>
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
    { product && product.map(item =>(
      <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
    <div className="flex items-end justify-end h-56 w-full bg-cover" >  
    <img className="hover:grow hover:shadow-lg" alt="img" src={item.productImg}/>    
        </div>
        <div className="px-5 py-3">
          <h4 className="text-gray-700 uppercase">{item.Titel}</h4>
          <h3 className="pt-1 text-gray-900">By {item.idSeller}</h3>
          <h3 className="pt-1 text-gray-400">TAGS: {item.tags}</h3>
          <span className="text-gray-500 mt-2">{item.price} MAD</span>
        </div>
        <Link onClick={() => Checkout(item._id)}> <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button></Link>
      </div>
       ))}
    </div>
     
  </div>
  
  
</div>
<footer className="bg-gray-800 p-5 grid grid-cols-1 md:grid-cols-12">
  <div className="md:col-span-2 pb-2 md:mb-0">
   
  
  </div>
  <div className="md:col-span-2 pb-2 md:mb-0">
    <p className="text-gray-200">Social</p>
    <ul className="pt-5 text-gray-400">
      <li>Facebook</li>
      <li>Twitter</li>
      <li>Youtube</li>
    </ul>
  </div>
  <div className="md:col-span-2 pb-2 md:mb-0">
    <p className="text-gray-200">Service</p>
    <ul className="pt-5 text-gray-400">
      <li>Compare</li>
      <li>Download</li>
      <li>Feedback</li>
      <li>Bug Report</li>
    </ul>
  </div>
  <div className="md:col-span-2 pb-2 md:mb-0">
    <p className="text-gray-200">Activity</p>
    <ul className="pt-5 text-gray-400">
      <li>Influencers</li>
      <li>Affiliate</li>
      <li>Co-Branding</li>
      <li>Give Away</li>
    </ul>
  </div>
  <div className="md:col-span-4 pb-2 md:mb-0">
    
    <div className="pt-5">
      <input type="text" className="rounded p-2 w-full" placeholder="@ YourEmail" />
      <button className="bg-red-600 text-white px-3 py-2 rounded mt-2">Subscribe</button>
    </div>
  </div>
  <div className="mt-5 md:col-span-12 text-center text-gray-400 pt-2">
    Created by Team Youcode
  </div>
</footer>

</header>
  );
}

export default Home;
