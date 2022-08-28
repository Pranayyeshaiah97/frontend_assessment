/*eslint-disable*/
import {React, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";




export default function Sidebar({posts, setPostId, postId}) {
  
  // Update post id to display the content
  const upateId = (id) => {
    console.log("UpdateID::", id)
    setPostId(id)
  }


  return (
    <>
      <nav className="relative z-10 flex flex-wrap items-center justify-between px-6 py-4 bg-white shadow-xl md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden md:w-80">
        <div className="flex flex-wrap items-center justify-between w-full px-0 mx-auto md:flex-col md:items-stretch md:min-h-full md:flex-nowrap">
        
          {/* Brand */}
          <Link
            className="inline-block p-4 px-0 mr-0 text-sm font-bold text-left uppercase md:block md:pb-2 text-blueGray-600 whitespace-nowrap"
            to="/"
          >
            Posts
          </Link>
          {/* User */}
        
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " 
            }
          >
            {/* Navigation */}

            <ul className="flex flex-col list-none md:flex-col md:min-w-full">
            {posts.map((item, key) => (
              <>
                  <li className="items-center cursor-pointer">
                <a
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (item.id === postId
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  onClick={() => upateId(item.id)}
                >
                  {item.title}
                </a>
              </li>
              </>
            ))}
            
            </ul>

          </div>
        </div>
      </nav>
    </>
  );
}
