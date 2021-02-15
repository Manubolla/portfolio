import React from 'react';
import './index.scss'

const Folder = (props) => {
    return (
        <div className='folder'>
            <div className='folder__back'>
                <div className='paper'/>
                <div className='paper'/>
                <div className='paper'/>
                <div className='folder__front'></div>
                <div className='folder__front right'><p className='title'>{props.name}</p></div>
            </div>
        </div>
    )
}
export default Folder;