import img1 from '../images/lululemonOMNI/lulu1.png';
import img2 from '../images/lululemonOMNI/lulu2.png';
import img3 from '../images/lululemonOMNI/lulu3.png';
import img4 from '../images/lululemonOMNI/lulu4.png';
import img6 from '../images/lululemonOMNI/lulu6.png';
import img7 from '../images/lululemonOMNI/lulu7.png';
import img8 from '../images/lululemonOMNI/lulu8.png';
import img9 from '../images/lululemonOMNI/lulu9.png';
import img10 from '../images/lululemonOMNI/lulu10.png';
import img11 from '../images/lululemonOMNI/lulu11.png';
import luluVideo from '../images/lululemonOMNI/luluVideo.mp4';

export const OMNIProject = () => {

    
    return(
        <div className="singleProject">
            <h1 className="singleProjectTitle">OMNI PROJECT</h1>

            <h4 className="singleProjectTitle2">A redesign of the OMNI application used by Lululemon in retail stores to process online purchases.</h4>

            <p className="singleProjectText">This is a UI/UX redesign of an application Lululemon have in all of their retail stores. Currently I am an educator working with this app every shift and have heard many comoplaints and issues with the usability and features of the current application. My aim is to design a new UI/UX that will be easier to use for educators and the retail stores and then to have my work seen by a developer at Lululemon to either use or take peices from my design. Once I have a full UI/UX design I will attempt to develop the application on my own using React Native and other frameworks and languages.</p>

            <div className='singleProjectVideo'>
                <video src={luluVideo} autoPlay loop muted />
            </div>


            <div>
                <h3 className="singleProjectTitle2">Log In and Home Page</h3>
                <div className="singleProjectImages">
                    <img src={img2}></img>
                    <img src={img3}></img>
                    <img src={img4}></img>
                </div>
                <h3 className="singleProjectTitle2">BOPIS Order for Guest Pickup</h3>
                <div className="singleProjectImages">
                    <img src={img6}></img>
                    <img src={img7}></img>
                    <img src={img8}></img>
                    <img src={img9}></img>
                    <img src={img10}></img>
                    <img src={img1}></img>
                    <img src={img11}></img>
                </div>
            </div>
        </div>
    )
}