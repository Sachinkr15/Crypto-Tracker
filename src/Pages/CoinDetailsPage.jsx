import React from "react";
import { useParams } from "react-router-dom";



function CoinDetailsPage() {


    const { coinId } = useParams();
    
    return <div>Hello {coinId}</div>
}

export default CoinDetailsPage;