import web from '../src/images/homeimg.jpg';
import Common from './components/Common';

const Home = () => {
  return (
    <>
        <Common 
            title="Unlimited Transactions" 
            description="Get access to our exclusive diamond ard that allows you to send unlimited transactions without getting charged any fees." 
            imgsrc={web} visit="/contact" 
            btnname="Getting Started" 
        />
    </>
  );
}

export default Home;
