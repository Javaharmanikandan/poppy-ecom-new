import React from 'react';

export function OrderPending(){
    return(
        <>
        
        <li class="step0 active text-center" id="step1">Ordered</li>
            <li class="step0  text-center" id="step2">On Progress</li>
            <li class="step0  text-right" id="step3">Dispatched</li>
            <li class="step0 text-right" id="step4">Delivered</li>
        </>
    )
} 

export function OrderOnprogress(){
    return(
        <>
        
        <li class="step0 active text-center" id="step1">Ordered</li>
            <li class="step0 active text-center" id="step2">On Progress</li>
            <li class="step0  text-right" id="step3">Dispatched</li>
            <li class="step0 text-right" id="step4">Delivered</li>
        </>
    )
} 

export function OrderDispatched(){
    return(
        <>
        
        <li class="step0 active text-center" id="step1">Ordered</li>
            <li class="step0 active text-center" id="step2">On Progress</li>
            <li class="step0 active text-right" id="step3">Dispatched</li>
            <li class="step0 text-right" id="step4">Delivered</li>
        </>
    )
} 



export function OrderDelivered(){
    return(
        <>
        
        <li class="step0 active text-center" id="step1">Ordered</li>
            <li class="step0 active text-center" id="step2">On Progress</li>
            <li class="step0 active text-right" id="step3">Dispatched</li>
            <li class="step0 active text-right" id="step4">Delivered</li>
        </>
    )
} 


// #endregion
