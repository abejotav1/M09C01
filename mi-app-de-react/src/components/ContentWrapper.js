import React from 'react';
import TopBar from './TopBar';
import ContentRowTops from './ContentRowTops';
import Footer from './Footer';

function ConterWrapper(){
    return(
        <div>
            <h1>ConterWrapper</h1>
            <TopBar />
            <ContentRowTops />
            <Footer />

        </div>

    );
}
export default ConterWrapper;