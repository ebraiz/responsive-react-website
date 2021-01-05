import Card from './components/Card';

const Services = () => {
  return (
    <>
      <section className="serviceSection">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="display-3 text-center mb-5">Our Services</h1>
            </div>  
          </div>
          <div className="row gy-4">
            <Card />
          </div>
        </div>
      </section>
      
    </>
  );
}

export default Services;
