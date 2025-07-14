import '../styles/LandingPage.css'
import { useState } from 'react';
// import { RowsPhotoAlbum } from "react-photo-album";
// import "react-photo-album/rows.css";
// import sedona1 from '../assets/img (1).jpg'
// import uastreet from '../assets/img (1).png'
// import selfie from '../assets/img (10).jpg'
// import me_sedona from '../assets/img (11).jpg'
// import guitar_shop from '../assets/img (12).jpg'
// import cortaro_sunset from '../assets/img (2).jpg'
// import me_chicago from '../assets/img (2).png'
// import me_grand_canyon from '../assets/img (3).jpg'
// import me_bright_angel from '../assets/img (3).png'
// import sedona2 from '../assets/img (4).jpg'
// import me_freshman from '../assets/img (6).jpg'
// import ua_cactus from '../assets/img (7).jpg'
// import palms from '../assets/img (8).jpg'
// import ua_flag from '../assets/img (9).jpg'


// const photos = [
//   { src: me_grand_canyon, width:3/4, height:1 },
//   { src: sedona1, width: 3/4, height:1 },
//   { src: selfie, width: 3/4, height: 1 },
//   { src: guitar_shop, width: 3/4, height: 1 },
//   { src: sedona2, width: 1, height: 1 },
//   { src: me_freshman, width: 1, height: 1 },
//   { src: cortaro_sunset, width: 1, height: 1 },
//   { src: me_sedona, width: 3/5, height: 1 },
//   { src: me_bright_angel, width: 1, height: 3/4 },
//   { src: ua_flag, width: 1, height: 1 },
//   { src: ua_cactus, width: 1, height: 1 },
//   { src: palms, width: 1, height: 1 },
//   { src: uastreet, width: 3/4, height: 1 },
//   { src: me_chicago, width: 3/5, height: 1 },


// ];

// function Gallery() {
//   return <RowsPhotoAlbum photos={photos} spacing={10} />;
// }



const LandingPage = ( {scrollToAbout} ) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div id="landing_page">
            
            <span style={{
            fontSize: 70,
            fontWeight: 700,
            cursor: "pointer",
            opacity: hovered ? 0.6:1,
            }} onClick={scrollToAbout}
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}>
            Abror Asralov
            </span>
     
            <span style={{
                fontSize: 25,
                fontWeight: 500,
                color: '#828480'                
            }}>
                Student Software Developer @UA    
            </span>
            <br/>

        </div>
    )
}

export default LandingPage;