import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Route, Routes } from "react-router-dom";
import DashboardHome from "../DashboardHome/DashboardHome";
import MyProfile from "../MyProfile/MyProfile";
import StudentList from "../StudentList/StudentList";
import OurTutors from "../../About/OurTutors/OurTutors";
import ManageStudents from "../ManageStudents/ManageStudents";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

const Dashboard = () => {

    const toogleMenu = () => {
        const toggleButton = document.getElementById("toogleDashboard");
        if (toggleButton.style.display === "none") {
            toggleButton.style.display = "block";
        } else {
            toggleButton.style.display = "none";
        }
    }

    return (
        <>
            <button
                onClick={toogleMenu}
                type="button"
                className="fixed left-3 p-2 rounded-md text-gray-400 hover:text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white block lg:hidden" aria-controls="mobile-menu" aria-expanded="false">
                <FontAwesomeIcon icon={faBars} className="px-2" />
            </button>
            <main className="flex w-full h-full">
                <aside className="w-80 h-full bg-gray shadow-md lg:block hidden" id="toogleDashboard">
                    <div className="flex flex-col justify-between h-screen p-4 bg-gray-800">
                        <div className="text-sm">

                            <img className="w-12 h-12 mb-4 rounded-full mx-auto" src="" alt="User" />

                            <Link
                                to="/dashboard"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                Dashboard
                            </Link>
                            <Link
                                to="myProfile"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                My Profile
                            </Link>
                            <Link
                                to="students"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                All Students
                            </Link>
                            <Link
                                to="manageStudents"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                Manage Students
                            </Link>
                            <Link
                                to="teachers"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                All Teachers
                            </Link>
                            <Link
                                to="makeAdmin"
                                className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-orange-600 focus:bg-orange-600 w-full block">
                                Make Admin
                            </Link>
                        </div>
                    </div>
                </aside>
                <section className="w-full">
                    <Routes>
                        <Route path="/" element={<DashboardHome />} />
                        <Route path="myProfile" element={<MyProfile />} />
                        <Route path="students" element={<StudentList />} />
                        <Route path="teachers" element={<OurTutors />} />
                        <Route path="manageStudents" element={<ManageStudents />} />
                        <Route path="makeAdmin" element={<MakeAdmin />} />
                    </Routes>
                </section>
            </main>
        </>
    );
};

export default Dashboard;