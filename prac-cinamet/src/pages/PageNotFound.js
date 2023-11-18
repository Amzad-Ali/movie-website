import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../component/Button'
export default function PageNotFound() {
  return (
    <main>
         <section className="flex flex-col justify-center px-2 pt-5 pb-20">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
          <div className="max-w-lg ">
            <img className="rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4UK-VacVrppny4aGjzhWStSrcsP_6A1UdFvRLCMg&s" alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
              <Button>
                  Back To Home
              </Button>
          </Link>          
        </div>
      </section>
    </main>
  )
}
