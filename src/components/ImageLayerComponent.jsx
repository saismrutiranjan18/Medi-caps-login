import '../styles/ImageLayerComponent.css';

const ImageLayerComponent = ({ children }) => {
    return (
        <div className="foreground">
            <img src="public\scs.png" alt="University foreground" className="foreground-image" />
            {children}
        </div>
    );
};

export default ImageLayerComponent;

  