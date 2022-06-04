import React from 'react';
import useAuth from '../../Hooks/useAuth';
import SingleService from '../SingleService/SingleService';
import './Services.css'

const Services = () => {
    const { AllService } = useAuth()
    return (
        <div>
            <div className="home-container">
                {AllService.map((service) => (
                    <SingleService key={service._id} service={service}></SingleService>
                ))}
            </div>

        </div>
    );
};

export default Services;