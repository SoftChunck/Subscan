import Focus from './Focus/Focus';
import './Landing.css'
import {MdCenterFocusStrong,MdEditNote} from 'react-icons/md'
import {BiPackage,BiTransferAlt} from 'react-icons/bi'
import {RxStack} from 'react-icons/rx'
import {HiUser} from 'react-icons/hi'
import {GiTwoCoins} from 'react-icons/gi'
import {FaChartBar} from 'react-icons/fa'
import TokenStatus from '../../Components/TokenStatus/TokenStatus';
import { useState } from 'react';
import TokenDistribution from '../../Components/TokenDistribution/TokenDistribution';
const Landing = () => {
    const [selectedTokenBtn,setSelectedTokenBtn] = useState(0)
    const [tabSelectedTokenBtn,setTabSelectedTokenBtn] = useState(0)
    var tokenStatus = {
        options : {
            chart: {
              height: 280,
              type: "area"
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
                width: 1
                },
            colors: ['#e90979'],
            fill: {
              type: "gradient",
              gradient: {
                shadeIntensity: 0.7,
                opacityFrom: 0.8,
                opacityTo: 0.9,
                stops: [40, 100]
              }
            },               
            xaxis: {
              categories: [
                "07:00",
                "09:00",
                "11:00",
                "13:00",
                "15:00",
                "17:00",
                "19:00",
                "21:00",
                "23:00",
                "01:00",
                "03:00",
                "05:00",
              ]
            }
          },
          series: [
            {
              name: "Series 1",
              data: [6.45, 6.5, 6.55, 6.6,6.35,6.5,6.55, 6.6,6.35, 6.4, 6.45, 6.5]
            }
          ],
        };
    var tokenDistribution = {
        options : {
            labels: ['Circulating', 'Stacking', 'Others'],
            plotOptions: {
                pie: {
                  customScale: 0.8,
                  donut: {
                    size: '75%',
                  }
                }
              },
            chart: {
              type: 'donut'
            },
            dataLabels: {
                enabled: false
            },
            colors: ['#e90979','#f082b9','#d7d7d7'],
          },
        series: [44, 31,25 ],
        
    };

    return ( 
        <div className='Landing'>
            <div className=' container'>
                <div className=' my-2 row justify-content-between m-0 p-0'>
                    <div className=' col-lg-4 p-2 d-flex flex-column'>
                        <div className=' d-flex align-items-center'>
                            <MdCenterFocusStrong className=' fs-5 me-3' />
                            <p className=' fs-6 m-0 p-0 '>Focus</p>
                        </div>
                        <Focus />
                    </div>
                    <div className=' col-lg-8 p-2 d-flex flex-column'>
                        <div className=' d-flex align-items-center'>
                            <MdCenterFocusStrong className=' fs-5 me-3' />
                            <p className=' fs-6 m-0 p-0 '>Chain Data</p>
                        </div>
                        <div className=' py-4 rounded-3 d-flex flex-column flex-lg-row justify-content-evenly align-items-center bg-white shadow'>
                            <div className=' d-flex flex-column align-items-start'>
                                <div className=' my-3 d-flex justify-content-center align-items-center'>
                                    <BiPackage className=' fs-2 text-secondary' />
                                    <div className=' ms-3'>
                                        <p className=' p-0 m-0 fs-6 fw-semibold text-secondary'>Finalized Blocks</p>
                                        <p className=' p-0 m-0 fs-6 fw-semibold '>40,404,709</p>
                                    </div>
                                </div>
                                <div className=' my-3 d-flex justify-content-center align-items-center'>
                                    <HiUser className=' fs-2 text-secondary' />
                                    <div className=' ms-3'>
                                        <p className=' p-0 m-0 fs-6 fw-semibold text-secondary'>Holders</p>
                                        <p className=' p-0 m-0 fs-6 fw-semibold '>40,404,709</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' d-flex flex-column align-items-start'>
                                <div className=' my-3 d-flex justify-content-center align-items-center'>
                                    <MdEditNote className=' fs-2 text-secondary' />
                                    <div className=' ms-3'>
                                        <p className=' p-0 m-0 fs-6 fw-semibold text-secondary'>Signed Extrinsics</p>
                                        <p className=' p-0 m-0 fs-6 fw-semibold '>40,404,709</p>
                                    </div>
                                </div>
                                <div className=' my-3 d-flex justify-content-center align-items-center'>
                                    <BiTransferAlt className=' fs-2 text-secondary' />
                                    <div className=' ms-3'>
                                        <p className=' p-0 m-0 fs-6 fw-semibold text-secondary'>Transfers</p>
                                        <p className=' p-0 m-0 fs-6 fw-semibold '>40,404,709</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' d-flex flex-column align-items-start'>
                                <div className=' my-3 d-flex justify-content-center align-items-center'>
                                    <RxStack className=' fs-2 text-secondary' />
                                    <div className=' ms-3'>
                                        <p className=' p-0 m-0 fs-6 fw-semibold text-secondary'>Stacked / Bonded</p>
                                        <p className=' p-0 m-0 fs-6 fw-semibold '>4040M /4709M</p>
                                    </div>
                                </div>
                                <div className=' my-3 d-flex justify-content-center align-items-center'>
                                    <GiTwoCoins className=' fs-2 text-secondary' />
                                    <div className=' ms-3'>
                                        <p className=' p-0 m-0 fs-6 fw-semibold text-secondary'>Inflation Rate</p>
                                        <p className=' p-0 m-0 fs-6 fw-semibold '>9.04%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' row m-0 p-0'>
                    <div className=' col-lg-7 py-1'>
                        <div className=' d-flex align-items-center justify-content-between p-2'>
                            <div className=' d-flex align-items-center '>
                                <FaChartBar className=' fs-5 me-3' />
                                <p className=' fs-6 m-0 p-0 '>Token Status</p>
                            </div>
                            <div className=' d-flex btnContainer flex-row mainColorBorder flex-wrap rounded-1'>
                                <button onClick={()=> { setTabSelectedTokenBtn(0)}} className={(tabSelectedTokenBtn == 0) ? 'mainColor mainFontSmall rounded-1 text-white border-0 py-1 px-2' : ' rounded-1 py-1 px-2 mainFontSmall border-0 bg-transparent mainColorText' } >Price</button>                            
                                <button onClick={()=> { setTabSelectedTokenBtn(1)}} className={(tabSelectedTokenBtn == 1) ? 'mainColor mainFontSmall rounded-1 text-white border-0 py-1 px-2 ms-1 ' : ' ms-1 rounded-1 py-1 px-2 mainFontSmall border-0 bg-transparent mainColorText' }>Volume</button>
                            </div>
                        </div>
                        <div className=' shadow bg-white p-3'>
                            <div className=' d-flex btnContainer flex-row mainColorBorder flex-wrap rounded-1'>
                                <button onClick={()=> { setSelectedTokenBtn(0)}} className={(selectedTokenBtn == 0) ? 'mainColor mainFontSmall rounded-1 text-white border-0 py-1 px-2' : ' rounded-1 py-1 px-2 mainFontSmall border-0 bg-transparent mainColorText' } >1D</button>                            
                                <button onClick={()=> { setSelectedTokenBtn(1)}} className={(selectedTokenBtn == 1) ? 'mainColor mainFontSmall rounded-1 text-white border-0 py-1 px-2 ms-1 ' : ' ms-1 rounded-1 py-1 px-2 mainFontSmall border-0 bg-transparent mainColorText' }>7D</button>                            
                                <button onClick={()=> { setSelectedTokenBtn(2)}} className={(selectedTokenBtn == 2) ? 'mainColor mainFontSmall rounded-1 text-white border-0 py-1 px-2 ms-1 ' : ' ms-1 rounded-1 py-1 px-2 mainFontSmall border-0 bg-transparent mainColorText' }>1M</button>
                            </div>
                            <TokenStatus opt={tokenStatus} />
                        </div>
                    </div>
                    <div className=' col-lg-4 py-1'>
                    <div className=' d-flex align-items-center justify-content-between p-2'>
                            <div className=' d-flex align-items-center '>
                                <FaChartBar className=' fs-5 me-3' />
                                <p className=' fs-6 m-0 p-0 '>Token Distribution</p>
                            </div>
                        </div>
                        <div className=" rounded-3 d-flex flex-column bg-white shadow">
                            <div className="topReferenda mainColor rounded-1">
                                <p className=" p-2 mainFontSmall fw-semibold m-0 text-white">Total Issuance: 1.287 B</p>
                            </div>
                            <TokenDistribution opt={tokenDistribution} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Landing;