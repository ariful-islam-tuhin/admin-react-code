import React from 'react';
import { Container } from 'react-bootstrap';
import Services from '../../Component/Services/Services';


const Home = () => {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                {/* <Banner /> */}
                <ul>
                    <li>All data loaded from mongodb database</li>
                    <li>and after login dashboard page will be show </li>
                    <li>and normal user and admin will see different page in the dash board</li>
                </ul>
               
                <Services></Services>
            </Container>

        </section>
    );
};

export default Home;