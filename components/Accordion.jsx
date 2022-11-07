import React, { useRef } from 'react'
import PropTypes from 'prop-types';
import { slideToggle } from 'helper/slide';

export default function Accordion(props) {
    const { children, header } = props
    const contentRef = useRef()
    const toggle = () => {
        slideToggle(contentRef.current)
    }
    return (
        <div className='accordion__item border-b'>
            <div className='accordion__header cursor-pointer' onClick={toggle}>{header}</div>
            <div className='accordion__content relative' ref={contentRef}>{children}</div>
        </div>
    )
}

Accordion.propTypes = {
    header: PropTypes.element,
    children: PropTypes.element
};
