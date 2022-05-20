import React from 'react';
import useAuth from './../../../Hooks/UseAuth';

const MyProfile = () => {
    const { user } = useAuth();

    return (
        <div className="h-[80vh] container mx-auto">
            <div className="bg-white drop-shadow-xl mb-7">
                <div className="p-5 border-b border-solid border-orange-500 rounded-t">
                    <h3 className="text-3xl font-semibold text-center text-orange-500">
                        Your Profile
                    </h3>
                </div>
                <div className="mx-auto py-4">
                    <div className="mx-auto ">
                        <div
                            className="flex flex-col mb-1"
                            style={{ alignItems: "center" }}
                        >
                            <img
                                src={user?.photoURL || user?.photoURL}
                                alt={user?.displayName}
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    borderRadius: "50%",
                                }}
                            />
                            <button
                                style={{
                                    width: "150px",
                                }}
                                className=" px-4 py-2 text-lg my-6 font-semibold text-white transition-colors duration-300 bg-orange-500 rounded-3xl shadow hover:bg-orange-600 focus:outline-none focus:ring-red-200 focus:ring-1"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                            <div className="my-2">
                                <h2 className="text-lg">Student ID:</h2>
                                <p>{user?._id || "N/A"}</p>
                            </div>
                            <div className="my-2">
                                <h2 className="text-lg">Full Name:</h2>
                                <p>{user?.fullname || user?.displayName || "N/A"}</p>
                            </div>
                            <div className="my-2">
                                <h2 className="text-lg">Email Address:</h2>
                                <p>{user?.email || "N/A"}</p>
                            </div>
                            <div className="my-2">
                                <h2 className="text-lg">Phone:</h2>
                                <p>{user?.phone || "N/A"}</p>
                            </div>
                        </div>
                        <div className="my-3">
                            <h2 className="text-lg">About:</h2>
                            <p>{user?.about || "N/A"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;