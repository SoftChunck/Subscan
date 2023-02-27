import { wait } from '@testing-library/user-event/dist/utils';
import { useEffect, useState } from 'react';
import Referenda from '../../../Components/Referenda/Referanda';
import {BsGithub, BsTwitter} from 'react-icons/bs'
import {BiLink} from 'react-icons/bi'
import './Focus.css'
const Focus = () => {
    const [sliderSelected,setSliderSelected] = useState(0)
    const referendaData = [
        {
            referendaNum:77,
            msg:"A New Batch Of HRMP Channels: HydraDX, Kapex, Ajuna, Pendulum, Litentry",
            byImgSrc:"/Assets/Images/polkadotbtnmd.png",
            byName:"Adfksdl...sdfksdjf",
            countdown:"7 Days 2Hr Left",
        },
        {
            referendaNum:7,
            msg:"A New Batch Of HRMP Channels: HydraDX, Kapex, Ajuna, Pendulum, Litentry",
            byImgSrc:"/Assets/Images/polkadotbtnmd.png",
            byName:"Adfksdl...sdfksdjf",
            countdown:"7 Days 2Hr Left",
        },
        {
            referendaNum:77444,
            msg:"A New Batch Of HRMP Channels: HydraDX, Kapex, Ajuna, Pendulum, Litentry",
            byImgSrc:"/Assets/Images/polkadotbtnmd.png",
            byName:"Adfksdl...sdfksdjf",
            countdown:"7 Days 2Hr Left",
        },
        {
            referendaNum:9977,
            msg:"A New Batch Of HRMP Channels: HydraDX, Kapex, Ajuna, Pendulum, Litentry",
            byImgSrc:"/Assets/Images/polkadotbtnmd.png",
            byName:"Adfksdl...sdfksdjf",
            countdown:"7 Days 2Hr Left",
        }
        ,
        {
            referendaNum:998877,
            msg:"A New Batch Of HRMP Channels: HydraDX, Kapex, Ajuna, Pendulum, Litentry",
            byImgSrc:"/Assets/Images/polkadotbtnmd.png",
            byName:"Adfksdl...sdfksdjf",
            countdown:"7 Days 2Hr Left",
        }
    ]

    function autoSlider(){
        setTimeout(()=>{
            if(sliderSelected < 4){
                setSliderSelected(sliderSelected+1);
                autoSlider()
            }
            else{
                setSliderSelected(0);   
                autoSlider()
            }  
        },2000) 
    }

    useEffect(()=>{
        autoSlider()
    },[])
    return ( 
        <>
            <div className=' position-relative'>
                {
                    (sliderSelected == 0) ?  
                    <div className='rounded-3 d-flex flex-column bg-white shadow'>
                        <div className="topReferenda mainColor rounded-1">
                            <p className=" p-2 mainFontSmall fw-semibold m-0 text-white">Basic Info</p>
                        </div>
                        <div className=' d-flex justify-content-evenly align-items-center focusBox'>
                            <img src='/Assets/Images/polkadotbtnmd.png' className=' imgPolka' />
                            <div className=' d-flex flex-column'>
                                <p className=' m-0 p-0 fs-4 mainColorText'>Polkadot</p>
                                <p className=' m-0 p-0'>DOT $6.580 (-5.67%)</p>
                                <div className=' d-flex mainColorText'>
                                    <a><BiLink /></a>
                                    <a><BsGithub className=' ms-2' /></a>
                                    <a><BsTwitter className=' ms-2' /></a>
                                </div>
                            </div>
                        </div>    
                    </div> :
                    <Referenda referendaData= {referendaData[sliderSelected]}/>
                }
                
                
                <div className=' d-flex justify-content-center'>
                    <div className=' w-75 d-flex justify-content-evenly slider position-absolute'>
                        <div className={"rounded-2 sliderFocus " + (sliderSelected == 0 ? " mainColor " : "")} onMouseOver={ () => { setSliderSelected(0) }} />
                        <div className={"rounded-2 sliderFocus " + (sliderSelected == 1 ? "mainColor" : "")} onMouseOver={ () => { setSliderSelected(1) }} />
                        <div className={"rounded-2 sliderFocus " + (sliderSelected == 2 ? "mainColor" : "")} onMouseOver={ () => { setSliderSelected(2) }} />
                        <div className={"rounded-2 sliderFocus " + (sliderSelected == 3 ? "mainColor" : "")} onMouseOver={ () => { setSliderSelected(3) }} />
                        <div className={"rounded-2 sliderFocus " + (sliderSelected == 4 ? "mainColor" : "")} onMouseOver={ () => { setSliderSelected(4) }} />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Focus;