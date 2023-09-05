import React from 'react';

const GridOthers = () => {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-2 pt-40'>

      {/* Primer Elemento */}
      <div className="h-full bg-gray-100 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-105 sm:hover:scale-150 sm:h-auto sm:w-full sm:rounded-lg">
        <a href="#" className="flex flex-col items-center sm:flex-row sm:max-w-xl">
          <img className="object-cover w-full rounded-t-lg h-40 sm:h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg" src="/Img/i.jpg" alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
      </div>

      {/* Segundo Elemento */}
      <div className="h-full bg-gray-100 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-105  sm:hover:scale-150 sm:h-auto sm:w-full sm:rounded-lg">
        <a href="#" className="flex flex-col items-center sm:flex-row sm:max-w-xl">
          <img className="object-cover w-full rounded-t-lg h-40 sm:h-auto sm:w-48 sm:rounded-none sm:rounded-l-lg" src="/Img/i.jpg" alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default GridOthers;
