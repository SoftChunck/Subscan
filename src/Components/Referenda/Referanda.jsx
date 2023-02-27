import './Referenda.css'
const Referenda = ({referendaData}) => {
    return ( 
        <div className=" rounded-3 d-flex flex-column bg-white shadow">
            <div className="topReferenda mainColor rounded-1">
                <p className=" p-2 mainFontSmall fw-semibold m-0 text-white">Referenda #{referendaData.referendaNum}</p>
            </div>
            <div className=" p-3 focusBox">
                <p className=" mainFontSmall px-0 m-0 pb-1 ">{referendaData.msg}</p>
                <p className=" m-0 p-0 ">by <img src={referendaData.byImgSrc} className=" byImg" /> <a className=' mainFontSmall text-decoration-none'>{referendaData.byName}</a></p>
                <p className='mainColorText smallText m-0 px-0 py-1'>Countdown {referendaData.countdown}</p>
                <div className=' d-flex justify-content-end w-100 mb-2'>
                    <button className=' btn mainColorText mainColorBorder px-4 mainFontSmall'>
                        Detail
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Referenda;