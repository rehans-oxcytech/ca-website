import React from 'react';
import BreadCrumb from '../breadCrumb/BreadCrumb';
import FooterStyle1 from '../footer/FooterStyle1';
import HeaderTopStyle2 from '../header/HeaderTopStyle2';
import MainHeaderStyle4 from '../header/MainHeaderStyle4';
import shape38 from '@/assets/img/shape/38.png';
import logoLightSolid from '@/assets/img/logo-light-solid.png';




const LayoutStyle7 = ({ children, breadCrumb, title }) => {
    return (
        <>
            <HeaderTopStyle2 />
            <MainHeaderStyle4 />
            {breadCrumb && <BreadCrumb breadCrumb={breadCrumb} title={title} />}
            {children}
            {/* <FooterStyle1 /> */}
            <FooterStyle1 shape={shape38} shapeClass="bottom" logo={logoLightSolid} formStyle="secondary" />
         
        </>
    );
};

export default LayoutStyle7;