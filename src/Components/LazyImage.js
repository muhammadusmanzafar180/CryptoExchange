    import react from 'react';
    import { LazyLoadImage } from "react-lazy-load-image-component";
    import logo from '../asset/crypto.jpg';
    
    const LazyImage = () => {
        <p>Lazy Loaded Image</p>
        return <LazyLoadImage
        src={logo}
        width={600}
        height={400}
        alt="Image Alt"
        effect="blur"
        />;
    };

    export default LazyImage;