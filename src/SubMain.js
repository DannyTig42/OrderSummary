import React, { useState } from 'react'
import Pic from "./asset/icon-music.svg"
import './SubMain.css'

const SunMain = () => {

    const [plan, setYearPlan] = useState(
        {
            year: 'Annual plan',
            amount: `59.99/yearly`
        }
    )

    function handleClick() {
        if (plan.year === 'Annual plan' && plan.amount === `59.99/yearly`) {
            setYearPlan({ year: '6 Months Plan', amount: `29.99/6mon` })
        }else if (plan.year == 'Annual plan' || plan.amount == `59.99/yearly`) {
            setYearPlan({ year: '3 Months Plan', amount: `14.99/3mon` })
        } else { setYearPlan({ year: 'Monthly Plan', amount: `4.99/monthly` }) }
    }
    return (
        <div className='plan-section'>
            <div className='plans'>
                <img className='music' src={Pic} alt="" />
                <section className='amount' >
                    <h4> {plan.year} </h4>
                    <p> ${plan.amount} </p>
                </section>
            </div>
            <span onClick={handleClick}>Change</span>
        </div >
    )
}

export default SunMain