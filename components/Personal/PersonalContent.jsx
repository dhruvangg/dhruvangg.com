import { Formik, Form, Field } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonal } from 'redux/personalSlice'

export default function PersonalContent() {

    const data = useSelector((state) => state.personal)
    const dispatch = useDispatch()

    const handleValues = (values) => {
        dispatch(setPersonal(values))
    }

    return (
        <>
            <Formik initialValues={{
                firstname: data.firstname || '',
                lastname: data.lastname || '',
                email: data.email || '',
                phone: data.phone || '',
                designation: data.designation || '',
                location: data.location || ''
            }} enableReinitialize={true}>
                {({ values, errors, touched }) => (
                    <Form onKeyUp={() => handleValues(values)} onChange={() => handleValues(values)}>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor='firstname' className="leading-7 text-sm text-gray-600">First Name</label>
                            <Field type="text" id="firstname" name="firstname" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor='lastname' className="leading-7 text-sm text-gray-600">Last Name</label>
                            <Field type="text" id="lastname" name="lastname" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor='email' className="leading-7 text-sm text-gray-600">Email</label>
                            <Field type="email" id="email" name="email" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor='phone' className="leading-7 text-sm text-gray-600">Phone</label>
                            <Field type="text" id="phone" name="phone" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor='designation' className="leading-7 text-sm text-gray-600">Designation</label>
                            <Field type="text" id="designation" name="designation" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className='flex flex-col mb-1'>
                            <label htmlFor='location' className="leading-7 text-sm text-gray-600">Location</label>
                            <Field type="text" id="location" name="location" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
