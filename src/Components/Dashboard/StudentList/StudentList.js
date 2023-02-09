import React, { useEffect, useState } from 'react';

const StudentList = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_PATH}/students`)
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    return (
        <div className="container mx-auto flex flex-col px-5 min-h-screen">
            <div className="w-full my-5">
                <h1 className="text-3xl text-left font-semibold text-orange-500">Our All Students List</h1>
            </div>
            {students?.length > 0 ?

                <div className="mt-2 mb-6 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr className="text-white bg-gray-800">
                                        <th className="py-3">Roll</th>
                                        <th className="py-3">Name</th>
                                        <th className="py-3">Class</th>
                                        <th className="py-3">Hall Name</th>
                                        <th className="py-3">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {students?.map((student) => (
                                        <tr key={student?._id} className=" hover:bg-gray-200 cursor-pointer duration-300">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="">
                                                    <div className="text-sm font-medium text-gray-900">{student?.roll}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {student?.name}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {student?.class}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        {student?.hall_name}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        <div className=" flex justify-center items-center">
                                                            {
                                                                student?.status === "Active" ?
                                                                    <div className="text-sm font-medium text-gray-900 bg-green-200 px-2 rounded-lg">{student?.status}</div> :
                                                                    <div className="text-sm font-medium text-gray-900 bg-red-300 px-2 rounded-lg">{student?.status}</div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div> :
                <div className="w-full h-[60vh] flex justify-center items-center">
                    <div className="w-12 h-12 rounded-full animate-spin border-4 border-solid border-orange-500 border-t-transparent"></div>
                </div>
            }
        </div>
    );
};

export default StudentList;