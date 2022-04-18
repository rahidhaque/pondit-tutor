import React, { useContext, useEffect } from 'react';
import { ServiceContext } from '../../../App';
import Service from '../Service/Service';



const Services = () => {
    const [services, setServices] = useContext(ServiceContext);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [setServices])

    return (

        <div id='services'>
            <div className='container mt-5'>
                <h2 className='text-secondary text-center'>My Services</h2>
                <div className='row mt-5 position-relative'>
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