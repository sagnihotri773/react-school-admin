import React from 'react'

export default function otp() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Enter OTP</h2>
                <div className="flex items-center justify-center space-x-4">
                    <div className="flex flex-col items-center">
                        <input
                            autoFocus
                            className="w-16 h-16 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
                            maxLength={1}
                            type="text"
                        />
                        <span className="text-gray-500 dark:text-gray-400 mt-2">1</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <input
                            className="w-16 h-16 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
                            maxLength={1}
                            type="text"
                        />
                        <span className="text-gray-500 dark:text-gray-400 mt-2">2</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <input
                            className="w-16 h-16 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
                            maxLength={1}
                            type="text"
                        />
                        <span className="text-gray-500 dark:text-gray-400 mt-2">3</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <input
                            className="w-16 h-16 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-center text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors duration-200"
                            maxLength={1}
                            type="text"
                        />
                        <span className="text-gray-500 dark:text-gray-400 mt-2">4</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
