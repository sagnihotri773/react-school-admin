import React from 'react'

export default function ParentInfo() {
    return (
        <div className="mt-4">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Father Name</dt>
                    <dd className="mt-1 text-sm text-gray-900"> Test Father </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Mother Name</dt>
                    <dd className="mt-1 text-sm text-gray-900"> Test Mother </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500"> Father Number </dt>
                    <dd className="mt-1 text-sm text-gray-900"> 9876543210 </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Address</dt>
                    <dd className="mt-1 text-sm text-gray-900"> #502 sector 1 Mohali </dd>
                </div>
                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500"> Father Profession </dt>
                    <dd className="mt-1 text-sm text-gray-900">Govt</dd>
                </div>
            </dl>
        </div>
    )
}
