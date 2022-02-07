import React from "react";
import pageNotFound from './404-page-not-found.jpg'


export const Page404 = () => {

   return (
        <div>
            <img alt={"404"} src={pageNotFound} style={{height:'200px', width:'200px'}}/>
        </div>
    )
}
