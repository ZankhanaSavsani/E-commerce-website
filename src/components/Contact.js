function Contact(){
    return(
        <div className="contact_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h1 className="contact_taital">Get In Touch</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="contact_section_2">
            <div className="row">
              <div className="col-md-12">
                <div className="mail_section_1">
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Your Name"
                    name="Your Name"
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Your Email"
                    name="Your Email"
                  />
                  <input
                    type="text"
                    className="mail_text"
                    placeholder="Your Phone"
                    name="Your Phone"
                  />
                  <textarea
                    className="massage-bt"
                    placeholder="Massage"
                    rows="5"
                    id="comment"
                    name="Massage"
                  ></textarea>
                  <div className="send_bt">
                    <a href="#">Send</a>
                  </div>
                </div>
              </div>
              <div className="map_main">
                <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0533101781584!2d70.79828297453473!3d22.351615841034885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5e73ac2056b%3A0xe67994f617cdd959!2sGokul%20Agro%20Seeds!5e0!3m2!1sen!2sin!4v1721894815431!5m2!1sen!2sin" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact;