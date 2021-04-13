import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link,useHistory  } from 'react-router-dom';
function LoginSuperAdmin() {

//----------- show added in datatable------------

const history = useHistory();

const [order , setorder] = useState(null);

useEffect(()=>{
   axios.get(`https://app-ndoejs.herokuapp.com/order`)
    .then(function (response) {
      setorder(response.data)
    }).catch(function (err) {
      console.log(err);
  });
},[])

// ---------------Delete Order-------------------
const deleteOrder = (id)=>{
  var yesno = window.confirm("Are You Sure?");
  if (yesno) {   
axios.delete(`https://app-ndoejs.herokuapp.com/order/delete/${id}`)
.then(function (response) {
  window.location.reload();
  console.log('item was deleted Succesfully ... ');
    })
      }
}

// ---------------GET Order by Id-------------------
const getIdOrder = (id)=>{
  localStorage.setItem('idOrder',id);
  history.push('/Admins/order/Confirm');
}

// ---------------GET Order Lentgh-------------------
const [orderlentgh , setorderlentgh] = useState(null);
axios.get(`https://app-ndoejs.herokuapp.com/order`)
.then(function (response) {
  setorderlentgh(response.data.length)
}).catch(function (err) {
  console.log(err);
});

// ---------------------Display the name of admin----------------------------
  const name=localStorage.getItem('name');

// ---------------Logout admin-------------------
const logOut =()=>{
  localStorage.removeItem('token')
  history.push('/admin');
}

    return(






 
      <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Tailwind Admin Starter Template : Tailwind Toolbox</title>
      <meta name="author" content="name" />
      <meta name="description" content="description here" />
      <meta name="keywords" content="keywords,here" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" />
      <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet" /> 
      <link href="https://afeld.github.io/emoji-css/emoji.css" rel="stylesheet" />
      <nav className="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0">
        <div className="flex flex-wrap items-center">
          <div className="flex flex-shrink md:w-1/3 justify-center md:justify-start text-white">
            <a href="#">
              <span className="text-xl pl-2"><i className="em em-grinning" /></span>
            </a>
          </div>
          <div className="flex flex-1 md:w-1/3 justify-center md:justify-start text-white px-2">
            <span className="relative w-full">
              <input type="search" placeholder="Search" className="w-full bg-gray-900 text-white transition border border-transparent focus:outline-none focus:border-gray-400 rounded py-3 px-2 pl-10 appearance-none leading-normal" />
              <div className="absolute search-icon" style={{top: '1rem', left: '.8rem'}}>
                <svg className="fill-current pointer-events-none text-white w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
              </div>
            </span>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/3 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li className="flex-1 md:flex-none md:mr-3">
                <a className="inline-block py-2 px-4 text-white no-underline" href="/Logout" >Logout</a>
              </li>
              <li className="flex-1 md:flex-none md:mr-3">
                <div className="relative inline-block">
                  <button onclick="toggleDD('myDropdown')" className="drop-button text-white focus:outline-none"> <span className="pr-2"><i className="em em-robot_face" /></span> Hi, User <svg className="h-3 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg></button>
                  <div id="myDropdown" className="dropdownlist absolute bg-gray-800 text-white right-0 mt-3 p-3 overflow-auto z-30 invisible">
                    <input type="text" className="drop-search p-2 text-gray-600" placeholder="Search.." id="myInput" onkeyup="filterDD('myDropdown','myInput')" />
                    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-user fa-fw" /> Profile</a>
                    <a href="#" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fa fa-cog fa-fw" /> Settings</a>
                    <div className="border border-gray-800" />
                    <a href="/Logout" className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"><i className="fas fa-sign-out-alt fa-fw" /> Log Out</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row">
        <div className="bg-gray-800 shadow-xl h-16 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48">
          <div className="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
            <ul className="list-reset flex flex-row md:flex-col py-0 md:py-3 px-1 md:px-2 text-center md:text-left">
              <li className="mr-3 flex-1">
                <a href="#" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500">
                  <i className="fas fa-tasks pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Dashboard</span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a href="/ProblemOrder" className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500">
                  <i className="fa fa-envelope pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">delivery problems</span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a href="/ClientOrder" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500  ">
                  <i className="fas fa-chart-area pr-0 md:pr-3 " /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Confirm orders</span>
                </a>
              </li>
              <li className="mr-3 flex-1">
                <a href="/Delivery" className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-red-500">
                  <i className="fa fa-wallet pr-0 md:pr-3" /><span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">Add delivery</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
          <div className="bg-gray-800 pt-3">
            <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white mt-8" >
              <h3 className="font-bold pl-2">Orders</h3>
            </div>
          </div>
          <div className="flex flex-wrap">
          
           
          <main className="flex-1 bg-gray-200 dark:bg-gray-900 overflow-y-auto transition
        duration-500 ease-in-out">
        <div className="px-24 py-12 text-gray-700 dark:text-gray-500 transition
          duration-500 ease-in-out">
         
          <div className="mt-1 mb-4 flex items-center justify-between">
            <span className="text-sm">
            <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
            <div className="flex flex-row items-center">
              <div className="flex-shrink pr-4">
                <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse" /></div>
              </div>
              <div className="flex-1 text-right md:text-center">
                <h5 className="font-bold uppercase text-gray-600">New order</h5>
                <h3 className="font-bold text-3xl">{orderlentgh} <span className="text-yellow-600"><i className="fas fa-caret-up" /></span></h3>
              </div>
            </div>
          </div>
    
    
            </span>
            <div className="flex items-center select-none">
              <span className="hover:text-pink-500 cursor-pointer mr-3">
                <svg viewBox="0 0 512 512" className="h-5 w-5 fill-current">
                  <path d="M505 442.7L405.3
                    343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7
                    44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1
                    208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4
                    2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9
                    0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7
                    0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0
                    128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
              </span>
              <input className="bg-transparent focus:outline-none" placeholder="Search in activity" />
            </div>
            
          </div>
          <div className="border dark:border-gray-700 transition duration-500
            ease-in-out" />
          <div className="flex flex-col mt-2">
    
          { order && order.map(item =>(
            
    
            <div className="flex flex-row mt-2">
              <div className="flex w-full items-center justify-between bg-white
                dark:bg-gray-800 px-8 py-6 border-l-4 border-green-500
                dark:border-green-300">
     
    
    
    
                <div className="flex">
                  <img className="h-12 w-12 rounded-full object-cover" alt="profimg" src="./product.jpg"></img>
                  <div className="flex flex-col ml-6">
                    <span className="text-lg font-bold"> {item.fullname} </span>
                    <div className="mt-4 flex">
                      <div className="flex">
                        <svg className="h-5 w-5 fill-current
                          dark:text-gray-300" viewBox="0 0 24 24">
                          <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4
                            4 4 0 01-4-4 4 4 0 014-4m0
                            10c4.42 0 8 1.79 8
                            4v2H4v-2c0-2.21 3.58-4 8-4z" />
                        </svg>
                        <span className="ml-2 text-sm text-gray-600
                          dark:text-gray-300 capitalize">
                          {item.fullname} {' '} Client
                        </span>
                      </div>
                      <div className="flex ml-6">
                        <svg className="h-5 w-5 fill-current
                          dark:text-gray-300" viewBox="0 0 24 24">
                          <path d="M19
                            19H5V8h14m-3-7v2H8V1H6v2H5c-1.11
                            0-2 .89-2 2v14a2 2 0 002 2h14a2 2
                            0 002-2V5a2 2 0 00-2-2h-1V1m-1
                            11h-5v5h5v-5z" />
                        </svg>
                        <span className="ml-2 text-sm text-gray-600
                          dark:text-gray-300 capitalize">
                          {item.OrderDate}
                        </span>
                      </div>


                      <div className="flex ml-6">
                        <svg className="h-5 w-5 fill-current
                          dark:text-gray-300" viewBox="0 0 24 24">
                          <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4
                            4 4 0 01-4-4 4 4 0 014-4m0
                            10c4.42 0 8 1.79 8
                            4v2H4v-2c0-2.21 3.58-4 8-4z" />
                        </svg>
                        <span className="ml-2 text-sm text-gray-600
                          dark:text-gray-300 capitalize">
                          Email : {item.email}
                        </span>
                      </div>

                      <div className="flex ml-6">
                        <svg className="h-5 w-5 fill-current
                          dark:text-gray-300" viewBox="0 0 24 24">
                          <path d="M12 4a4 4 0 014 4 4 4 0 01-4 4
                            4 4 0 01-4-4 4 4 0 014-4m0
                            10c4.42 0 8 1.79 8
                            4v2H4v-2c0-2.21 3.58-4 8-4z" />
                        </svg>
                        <span className="ml-2 text-sm text-gray-600
                          dark:text-gray-300 capitalize">
                          Phone :{item.phone}
                        </span>
                      </div>









                    </div>
                   
                   
                  </div>
                  
                </div>
                
                <div className="flex flex-col -mt-10 mr-20">
                <span className="font-semibold text-green-500
                  dark:text-green-300">
                  {item.status}
                </span>
              </div>
  
              </div>
    
              <Link onClick={()=> getIdOrder(item._id)} className="text-center flex flex-col items-center
                justify-center bg-white dark:bg-gray-800
                dark:text-gray-300 ml-1 px-12 cursor-pointer
                hover:bg-blue-200 dark-hover:bg-blue-500 rounded-lg" >
    
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
                
              </Link>
    
              <Link onClick={()=> deleteOrder(item._id)}  className="text-center flex flex-col items-center
                justify-center bg-white dark:bg-gray-800
                dark:text-gray-300 ml-1 px-12 cursor-pointer
                hover:bg-red-200 dark-hover:bg-red-500 rounded-lg">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
                </svg>
              </Link>
              
            </div>
    
    ))}
    
          </div>
          

    
    
        
    
    
    
    
    
    
    
          
        </div>
    
      </main>
          </div> 
        </div>
      </div>
    </div>




    )

}
export default LoginSuperAdmin;