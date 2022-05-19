import React, { useEffect, useState } from 'react';

const Programme = () => {
    const [programmes, setProgrammes] = useState([])
    useEffect(() => {
        fetch("./Programme.json")
            .then(res => res.json())
            .then(data => setProgrammes(data))
    }, [])
    return (
        <div className="container mx-auto h-[80vh]">
            <h1 className="text-4xl text-orange-500 font-bold mb-10 mt-4">Our All Programmes</h1>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <h1 className="text-xl font-bold text-gray-600 mb-4">Secondary School Programme</h1>
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr className="text-white bg-gray-800">
                                    <th className="py-3">Class</th>
                                    <th className="py-3">Seat</th>
                                    <th className="py-3">Tution Fees</th>
                                    <th className="py-3">Others Fees</th>
                                    <th className="py-3">Monthly Cost</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {programmes.map((programme) => (
                                    <tr key={programme._id} className=" hover:bg-gray-200 cursor-pointer duration-300">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="">
                                                <div className="text-sm font-medium text-gray-900">{programme.class}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {programme?.seat}</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="">
                                                <div className="text-sm font-medium text-gray-900">{programme?.fees}.00 Tk</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="">
                                                <div className="text-sm font-medium text-gray-900">{programme.others}.00 TK</div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {programme?.fees + programme?.others}.00 TK
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Programme;