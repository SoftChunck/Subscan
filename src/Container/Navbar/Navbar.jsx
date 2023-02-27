import  "./Navbar.css"
import {AiOutlineStock,AiOutlineMenu} from 'react-icons/ai'
import {IoMdArrowDropdownCircle} from 'react-icons/io'
import {FaAngleRight,FaAngleDown, FaAngleUp} from 'react-icons/fa'
import {FiSearch} from 'react-icons/fi'
import { useState } from "react"
const Navbar = () => {
    const [tongle,setToggle] = useState(0)
    return ( 
        <nav className="Navbar">
            <div className=" container-xl pb-3">
                <div className="py-3 row m-0 p-0">
                    <div className=" d-lg-none col-2 col-md-1 bg-white rounded-1 d-flex justify-content-center align-items-center py-1">
                        <img src="/Assets/Images/polkadotbtnmd.png" className=" btnsmall" />
                        <IoMdArrowDropdownCircle className=" mainColorText" />
                    </div>
                    <div className=" col-9 col-md-10 col-lg-4 d-flex justify-content-center align-items-center">
                        <img src="/Assets/Images/logo.png"/>
                        <p className=" d-lg-flex d-none px-lg-3 p-2 m-0 p-0">DOT $4.790 (-6.987%) 
                        <AiOutlineStock  className=" fs-4"/></p>
                    </div>
                        <a class=" bg-transparent btn col-1 d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <AiOutlineMenu color="white" />
                        </a>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header offcanvasHeaderColor">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                            <button type="button" class="btn-close bg-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body offcanvasBodyColor p-0">
                            <div class="dropdown mt-3">
                            <ul className=" w-100 list-unstyled fs-4 fw-semibold">
                                <li className=" ms-2 px-4 py-3">
                                    <a className=" d-flex justify-content-between align-items-center text-decoration-none text-white">
                                        Home
                                    </a>
                                </li>
                                <li className=" ms-2 px-4 py-3">
                                    <a onClick={()=> {(tongle == 1 ? setToggle(0) : setToggle(1))}} className=" fs-4 d-flex justify-content-between align-items-center text-decoration-none text-white">
                                        Blockchain
                                        { (tongle == 1 ?  <FaAngleDown /> : <FaAngleRight />) }   
                                    </a>
                                    <div className={"w-100 ms-4 py-2 bg-transparent fs-5 flex-column " + (tongle != 1 ? "d-none" : "d-flex") }>
                                        <a className="py-2 text-decoration-none text-white">Blocks</a>
                                        <a className="py-2 text-decoration-none text-white">Extrinsics</a>
                                        <a className="py-2 text-decoration-none text-white">Transfers</a>
                                        <a className="py-2 text-decoration-none text-white">Hello</a>
                                        <a className="py-2 text-decoration-none text-white">Events</a>
                                        <a className="py-2 text-decoration-none text-white">Accounts</a>
                                        <a className="py-2 text-decoration-none text-white">Logs</a>
                                    </div>
                                </li>
                                <li className=" ms-2 px-4 py-3">
                                    <a onClick={()=> {(tongle == 2 ? setToggle(0) : setToggle(2))}} className=" fs-4 d-flex justify-content-between align-items-center text-decoration-none text-white">
                                        Parachain
                                        { (tongle == 2 ?  <FaAngleDown /> : <FaAngleRight />) }
                                    </a>
                                    <div className={"w-100 ms-4 py-2 bg-transparent fs-5 flex-column " + (tongle != 2 ? "d-none" : "d-flex") }>
                                        <a className="py-2 text-decoration-none text-white">PLO Dashboard</a>
                                        <a className="py-2 text-decoration-none text-white">Parachain</a>
                                        <a className="py-2 text-decoration-none text-white">Auction</a>
                                        <a className="py-2 text-decoration-none text-white">Crowdloan</a>
                                        <a className="py-2 text-decoration-none text-white">Bid</a>
                                    </div>
                                </li>
                                <li className=" ms-2 px-4 py-3">
                                    <a onClick={()=> {(tongle == 3 ? setToggle(0) : setToggle(3))}} className=" fs-4 d-flex justify-content-between align-items-center text-decoration-none text-white">
                                        XCM
                                        { (tongle == 3 ?  <FaAngleDown /> : <FaAngleRight />) }
                                    </a>
                                    <div className={"w-100 ms-4 py-2 bg-transparent fs-5 flex-column " + (tongle != 3 ? "d-none" : "d-flex") }>
                                    <a className="py-2 text-decoration-none text-white">XCM Dashboard</a>
                                    <a className="py-2 text-decoration-none text-white">XCM Messages</a>
                                    <a className="py-2 text-decoration-none text-white">XCM Transfers</a>
                                    <a className="py-2 text-decoration-none text-white">XCM Channels</a>
                                    </div>
                                </li>
                                <li className=" ms-2 px-4 py-3">
                                    <a className=" d-flex justify-content-between align-items-center text-decoration-none text-white">
                                        Stacking
                                    </a>
                                </li>
                                <li className=" ms-2 px-4 py-3">
                                    <a onClick={()=> {(tongle == 4 ? setToggle(0) : setToggle(4))}} className=" fs-4 d-flex justify-content-between align-items-center text-decoration-none text-white">
                                        Governance
                                        { (tongle == 4 ?  <FaAngleDown /> : <FaAngleRight />) }
                                    </a>
                                    <div className={"w-100 ms-4 py-2 bg-transparent fs-5 flex-column " + (tongle != 4 ? "d-none" : "d-flex") }>
                                        <a className="py-2 text-decoration-none text-white">Democracy Proposals</a>
                                        <a className="py-2 text-decoration-none text-white">Democracy Referenda</a>
                                        <a className="py-2 text-decoration-none text-white">Council Motions</a>
                                        <a className="py-2 text-decoration-none text-white">Tech. comm. Proposals</a>
                                        <a className="py-2 text-decoration-none text-white">Treasury Proposals</a>
                                        <a className="py-2 text-decoration-none text-white">Treasury Tips</a>
                                        <a className="py-2 text-decoration-none text-white">Bounties</a>
                                    </div>
                                </li>
                                <li className=" ms-2 px-4 py-3">
                                    <a onClick={()=> {(tongle == 5 ? setToggle(0) : setToggle(5))}} className=" fs-4 d-flex justify-content-between align-items-center text-decoration-none text-white">
                                        Tools
                                        { (tongle == 5 ?  <FaAngleDown /> : <FaAngleRight />) }
                                    </a>
                                    <div className={"w-100 ms-4 py-2 bg-transparent fs-5 flex-column " + (tongle != 5 ? "d-none" : "d-flex") }>
                                    <a className="py-2 text-decoration-none text-white">Runtime</a>
                                    <a className="py-2 text-decoration-none text-white">Account Format Transform</a>
                                    <a className="py-2 text-decoration-none text-white">Price Converter</a>
                                    <a className="py-2 text-decoration-none text-white">Charts</a>
                                    <a className="py-2 text-decoration-none text-white">Multi-sig Tool</a>
                                    <a className="py-2 text-decoration-none text-white">API Docs</a>
                                    <a className="py-2 text-decoration-none text-white">Get API Key</a>
                                    </div>
                                </li>
                                <li className=" ms-2 px-4 py-3">
                                    <a onClick={()=> {(tongle == 6 ? setToggle(0) : setToggle(6))}} className=" fs-4 d-flex justify-content-between align-items-center text-decoration-none text-white">
                                        About
                                        { (tongle == 6 ?  <FaAngleDown /> : <FaAngleRight />) }
                                    </a>
                                    <div className={"w-100 ms-4 py-2 bg-transparent fs-5 flex-column " + (tongle != 6 ? "d-none" : "d-flex") }>
                                        <a className="py-2 text-decoration-none text-white">Version History</a>
                                        <a className="py-2 text-decoration-none text-white">Privacy Policy</a>
                                        <a className="py-2 text-decoration-none text-white">Terms of Use</a>
                                        <a className="py-2 text-decoration-none text-white">Open Source Notices</a>
                                        <a className="py-2 text-decoration-none text-white">Service Status</a>
                                        <a className="py-2 text-decoration-none text-white">Feedback</a>
                                    </div>
                                </li>
                            </ul>    
                            </div>
                        </div>
                        </div>
                    <ul className=" list-unstyled d-lg-flex col-lg-6 d-none justify-content-evenly align-items-center fw-semibold m-0 p-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#">Home</a>
                        </li> 
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                BlockChain
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">Blocks</a>
                                    <a class="dropdown-item" href="#">Extrinsics</a>
                                    <a class="dropdown-item" href="#">Transfers</a>
                                    <a class="dropdown-item" href="#">Hello</a>
                                    <a class="dropdown-item" href="#">Events</a>
                                    <a class="dropdown-item" href="#">Accounts</a>
                                    <a class="dropdown-item" href="#">Logs</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Parachain
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">PLO Dashboard</a>
                                    <a class="dropdown-item" href="#">Parachain</a>
                                    <a class="dropdown-item" href="#">Auction</a>
                                    <a class="dropdown-item" href="#">Crowdloan</a>
                                    <a class="dropdown-item" href="#">Bid</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                XCM
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">XCM Dashboard</a>
                                    <a class="dropdown-item" href="#">XCM Messages</a>
                                    <a class="dropdown-item" href="#">XCM Transfers</a>
                                    <a class="dropdown-item" href="#">XCM Channels</a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#">Stacking</a>
                        </li> 
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Governance
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">Democracy Proposals</a>
                                    <a class="dropdown-item" href="#">Democracy Referenda</a>
                                    <a class="dropdown-item" href="#">Council Motions</a>
                                    <a class="dropdown-item" href="#">Tech. comm. Proposals</a>
                                    <a class="dropdown-item" href="#">Treasury Proposals</a>
                                    <a class="dropdown-item" href="#">Treasury Tips</a>
                                    <a class="dropdown-item" href="#">Bounties</a>
                                </li>
                            </ul>
                        </li> 
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Tools
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a class="dropdown-item" href="#">Runtime</a>
                                    <a class="dropdown-item" href="#">Account Format Transform</a>
                                    <a class="dropdown-item" href="#">Price Converter</a>
                                    <a class="dropdown-item" href="#">Charts</a>
                                    <a class="dropdown-item" href="#">Multi-sig Tool</a>
                                    <a class="dropdown-item" href="#">API Docs</a>
                                    <a class="dropdown-item" href="#">Get API Key</a>
                                </li>
                            </ul>
                        </li> 
                    </ul>
                    <div className=" bg-white col-lg-2 d-none d-lg-flex m-0  p-1 align-items-center  rounded-2">
                        <p className=" py-1 px-2 mainColor text-center m-0 rounded-2"> MAINNET </p>
                        <img src="/Assets/Images/polkadotbtn.webp" />
                        <IoMdArrowDropdownCircle className=" mainColorText" />
                    </div>
                </div>
                <div className=" row m-0 p-0 justify-content-center">
                    <div className=" col-10 col-lg-8 bg-white d-flex justify-content-between p-0 rounded-1">
                        <div className=" h-100 position-relative text-dark d-flex justify-content-center align-items-center">
                            <button onClick={()=> {(tongle == 9 ? setToggle(0) : setToggle(9))}}  className=" position-relative dropdownAll btn h-100 px-4 d-none d-lg-flex justify-content-center align-items-center text-dark ">All {(tongle == 9 ?  <FaAngleUp className=" ms-4" /> : <FaAngleDown className=" ms-4" />)}</button>               
                            <div className={" rounded-1 flex-column  position-absolute dropdownDiv px-3 py-2 bg-white " + (tongle != 9 ? "d-none" : "d-lg-flex")}>
                                <a className=" py-1 text-decoration-none text-dark" href="#">Block</a>
                                <a className=" py-1 text-decoration-none text-dark" href="#">Extrinsic</a>
                                <a className=" py-1 text-decoration-none text-dark" href="#">Account</a>
                                <a className=" py-1 text-decoration-none text-dark" href="#">Event</a>
                                <a className=" py-1 text-decoration-none text-dark" href="#">Validator</a>
                                <a className=" py-1 text-decoration-none text-dark" href="#">Nominator</a>
                            </div>
                        </div>
                        <input placeholder=" Search by Block / Extrinsic / Account" className=" bg-transparent searchtextfield p-3" />
                        <button className=" d-lg-flex justify-content-center align-items-center d-none border-0 rounded-1 m-1 mainColor text-white px-4">
                            Search
                        </button>
                        <button className=" d-flex justify-content-center align-items-center d-lg-none border-0 rounded-1 m-1 mainColor text-white px-4">
                            <FiSearch className=" fs-4" />
                        </button>
                    </div>   
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;