import React, { useEffect, useState } from 'react';
import useTools from '../Hooks/useTools';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useTools();

    return (
        <div className='px-20 pb-16'>
            <h1 className='text-center text-5xl mt-12  text-white'>Tools</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 justify-items-center'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;