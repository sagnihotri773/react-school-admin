import React from 'react'

export default function Cards({ data, title }) {
    return (
        <div className="bg-white shadow-md rounded-md p-4 max-w-lg ">
        <h3 className="text-center text-lg font-semibold text-blue-900 mb-4">{title}</h3>
  
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {data.map((admission, index) => (
            <div
              key={index}
              className="text-center bg-white border border-gray-200 rounded-md p-4 shadow-sm"
            >
              <div className="bg-blue-100 p-4 rounded-full mb-2">
                <img
                  src={admission.img}
                  alt={admission.name}
                  className="w-12 h-12 mx-auto"
                />
              </div>
              <h4 className="text-blue-900 font-semibold">{admission.name}</h4>
              <p className="text-sm text-red-500 font-semibold mt-1">{admission.date}</p>
            </div>
          ))}
        </div>
  
        <div className="text-center text-sm text-gray-600 mt-4">
          Total admissions this month so far: {data.length}
        </div>
      </div>
    )
}
