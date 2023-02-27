import './TokenDistribution.css'

import Chart from 'react-apexcharts'
const TokenDistribution = (props) => {
    return ( 
        <div className="tokendistribution p-3 focusBox">
            <div className=' position-relative'>
                    <Chart
                        options={props.opt.options}
                        series={props.opt.series}
                        type='donut'
                        height= '200'
                        width="100%"
                    /> 
                    {/* <div className=' position-absolute top-0 d-flex justify-content-center align-items-center w-100 h-100'>
                        <img src='/Assets/Images/polkadotbtnmd.png'/>
                        <div className=' d-flex flex-column justify-content-center align-items-center'>
                            <div>
                                <p>Circulating</p>
                            </div>
                            <div>
                                <p>STacking</p>
                            </div>
                        </div>
                    </div> */}
            </div>        
        </div>
     );
}
 
export default TokenDistribution;