
const Home = () => {

  return (
    <div className="home">
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="text-white font-weight-bold">Your Favorite Place for all your traveling needs</h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5" style={{color: "white"}}>Are you in need of a reliable driver for your upcoming journey? Or perhaps you're a skilled driver looking to offer your services to those in need? Look no further! DriveShare is the perfect platform for connecting drivers with those seeking their services.</p>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="page-section" id="services">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center mt-5 ">
            <span className="service__title"> </span>
              At Your Service
             </h2>
          <div className="row gx-lg-5">
            <div className="col-lg-6 col-md-6 text-center">
              <div className="mt-5 service__card">
                <div className="mb-2"><i className="bi-laptop fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Driver</h3>
                <p className="text-muted mb-0">Are you a safe and experienced driver looking to earn some extra income? Join our community of drivers today and start offering your services to individuals and businesses in need of transportation assistance. Whether it's chauffeuring clients to important meetings, providing airport transfers, or simply offering a designated driver service for special events, DriveShare is the place to showcase your skills and find opportunities.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center">
              <div className="mt-5 service__card">
                <div className="mb-2"><i className="bi-heart fs-1 text-primary"></i></div>
                <h3 className="h4 mb-2">Hirer</h3>
                <p className="text-muted mb-0">Finding a reliable driver for your transportation needs has never been easier. Whether you need a driver for a one-time journey or a long-term arrangement, DriveShare allows you to browse through a diverse selection of drivers and choose the one that best fits your requirements. With transparent profiles, reviews, and ratings, you can rest assured that you're hiring a trustworthy and skilled driver for your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mb-5" />
      {/* About */}
      <section className="page-section" id="about">
        <div className="container">
          <h2 className="text-center mt-0">Why Choose Us</h2>
          <div className="row">
            <div className="col-sm">
              <h5>Safety First</h5>
              <p className="text-white-75 mb-4">We prioritize the safety and security of both drivers and hirers. All drivers undergo thorough background checks and must meet our strict safety standards before joining the platform.</p>
            </div>
            <div className="col-sm">
              <h5>Convenience</h5>
              <p className="text-white-75 mb-4">Our user-friendly platform makes it easy to find and book drivers for your transportation needs. Whether you're scheduling a last-minute ride or planning in advance, DriveShare has you covered.</p>
            </div>
            <div className="col-sm">
              <h5>Quality Assurance</h5>
              <p className="text-white-75 mb-4">With detailed driver profiles, reviews, and ratings, you can trust that you're hiring a qualified and experienced driver for your journey. Our platform ensures transparency and accountability every step of the way.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
