import React, { memo } from 'react'

function StarRating(props) {
    const stars = Array.from({length: 5}, () => '🟊');
    const activeColor = "#fa0000";
    const inactiveColor = "#ddd";
    const size = 28
    const value = (props.value)/2;
    return(
        <div>
            {stars.map((s,index)=>{
                let style = inactiveColor;
                if(index < value){
                   
                    style = activeColor;
                }
                return(
                    <span key={index}
                    style={{color:style, width:size, height:size, fontSize:size}}>
                    {s}</span>
                )
            })}
           
        </div>
    )
}
export default memo(StarRating);