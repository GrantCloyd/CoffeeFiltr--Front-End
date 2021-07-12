import React from 'react'
import Coffee from "./Coffee";
import Recommended from "./Recommended";

const DiscoverPage = () => {
    return (
        <div>
              <h2>Home</h2>
              <div>
                <h3>Coffee of the Day</h3>
                <Coffee />
              </div>
              <Recommended />
        </div>
    )
}

export default DiscoverPage;