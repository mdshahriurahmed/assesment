import React from 'react';
import useTools from '../Hooks/useTools';
import Tool from '../Tools/Tool';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomeTools = () => {
    const [tools] = useTools();
    const newTools = tools.slice(0, 6);



    return (
        <div className='px-20'>
            <h1 className='text-center text-4xl mt-12  text-white'>Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 justify-items-center'>
                {
                    newTools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
            <div className='flex justify-center lg:justify-end md:justify-end mt-8'>
                <Link to='/tools' className='  btn btn-secondary'> All Tools
                    <FontAwesomeIcon className='ml-2' icon={faCircleArrowRight} /></Link>
            </div>
        </div>
    );
};

export default HomeTools;