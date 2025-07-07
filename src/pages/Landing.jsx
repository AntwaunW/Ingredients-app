
import Header from '../components/Header';
import Title from '../components/Title';
import WelcomeSection from '../components/WelcomeSection';
import CookingButton from '../components/CookingButton';
import Background from '../components/Background';
import Footer from '../components/Footer';


function Landing() {
  return (
    //<> </> - is a fragment used to hold all the code for one component
    // {} allows for images or content to show up in react
    <>
      <div className="Start">
            <Header></Header>
              <Title></Title>
                <WelcomeSection></WelcomeSection>
                  <CookingButton></CookingButton>
                <Background></Background>  
              <Footer></Footer>
      </div>
    </>
  );
}

export default Landing;