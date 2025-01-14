import '../styles/Background.css';

const Background = ({ children }) => {
  return (
    <div className="background">
      <img src="/background.jpg" alt="University Background" className="background-image" />
      {children}
    </div>
  );
};

export default Background;
