import React, { useState } from 'react';
import UserImg from '../../../media/download.png'
import BasicInfo from '../../ui/reusableComponents/BasicInfo';
import ParentInfo from '../../ui/reusableComponents/ParentInfo';
import ExamResults from '../../ui/reusableComponents/ExamResults';
import PaymentOfYear from '../../ui/reusableComponents/PaymentOfYear';

export default function StudentView(props) {
  const { handleModalClose } = props;
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Basic Info', 'Parent Info', 'Exam Marks', 'Test Progress', 'Payments This Year'];

  return (
    <>
      <div className="px-4 py-3 sm:p-6 text-black overflow-auto" style={{ height: "82%" }}>
        {/* <h2 className="text-2xl font-bold">Modal Title</h2> */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center ">
            <span className="text-white text-3xl"> <img src={UserImg} className='w-20 h-20 rounded-full' alt='' /> </span>
          </div>
          <h3 className="text-xl font-semibold"> Shubham Agnihotri </h3>
          <p className="text-gray-500">Class: 1 | Section: A</p>
        </div>
        <div className="mt-4">
          <div class="grid grid-cols-3 md:grid-cols-5 gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`px-2 py-2 focus:outline-none ${activeTab === index ? 'border-b-2 bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="bg-white mt-2 shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-3 sm:px-6">
              {activeTab === 0 && <BasicInfo />}
              {activeTab === 1 && <ParentInfo />}
              {activeTab === 2 && <ExamResults />}
              {activeTab === 3 && <div>Test Progress Content</div>}
              {activeTab === 4 && <PaymentOfYear/>}
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-1 mt-2 mb-2 flex flex-row-reverse">
        <button
          className="ml-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={() => handleModalClose}
        >
          Close
        </button>
      </div>
    </>
  )
}
