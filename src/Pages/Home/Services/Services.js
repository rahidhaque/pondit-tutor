import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services'>
            <div className='container mt-5'>
                <h2 className='text-primary text-center'>Our Services</h2>
                <div className='row mt-5'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >
                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;