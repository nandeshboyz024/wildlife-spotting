import React from 'react'
export default function Heading() {
  return (
    <div>
        <div style={{background:'linear-gradient(to right, #5170FF, #FF66C4)', display:'flex'}}>
          <img src={process.env.PUBLIC_URL +"/imgs/viz.gif"} style={{margin:'10px'}}  width={50} height={50} alt="Viz-Logo"/>
          <h2 style={{color:'white', marginTop:'20px'}}>Vizuara</h2>
          <a href="/wildlife-spotting" style={{marginLeft: 'auto', color:'white', marginTop:'30px',marginRight:'20px'}}>Homepage</a>
        </div>
    </div>
  )
}
