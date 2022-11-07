import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CgCloseO } from "react-icons/cg"
import { useSelector, useDispatch } from 'react-redux'
import { setWork } from "redux/workSlice"

export default function WorkContent() {
    const data = useSelector((state) => state)
    const dispatch = useDispatch()
    const handleValues = (values) => {
        dispatch(setWork(values.work))
    };

    return (
        <Formik initialValues={data}>
            {({ values }) => (
                <Form onChange={() => handleValues(values)} onKeyUp={() => handleValues(values)}>
                    <FieldArray name="work">
                        {({ push, remove }) => (
                            <div>
                                <button type="button" className="absolute right-0 text-sm font-semibold -top-8" onClick={() => push({ company: "", designation: "", start: "", end: "", description: "" })}>Add Work</button>
                                {values.work.length > 0 ?
                                    values.work.map((work1, index) => (
                                        <div className="border rounded p-4 mb-4 relative" key={index}>
                                            <button type="button" className="absolute right-4 top-4" title="remove" onClick={() => {
                                                remove(index); setTimeout(() => {
                                                    handleValues(values);
                                                }, 1000);
                                            }}><CgCloseO className="text-red-700" /></button>
                                            <div className='flex flex-col mb-1'>
                                                <label htmlFor={`work[${index}].company`} className="leading-7 text-sm text-gray-600">Company</label>
                                                <Field type="text" id={`work[${index}].company`} name={`work[${index}].company`} className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                            <div className='flex flex-col mb-1'>
                                                <label htmlFor={`work[${index}].designation`} className="leading-7 text-sm text-gray-600">Designation</label>
                                                <Field type="text" id={`work[${index}].designation`} name={`work[${index}].designation`} className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                            <div className='flex mb-1'>
                                                <div className="basis-1/2 pr-4">
                                                    <label htmlFor={`work[${index}].start`} className="leading-7 text-sm text-gray-600">Start</label>
                                                    <Field type="text" id={`work[${index}].start`} name={`work[${index}].start`} placeholder="02/2010" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                                <div className="basis-1/2 pl-4">
                                                    <label htmlFor={`work[${index}].end`} className="leading-7 text-sm text-gray-600">End</label>
                                                    <Field type="text" id={`work[${index}].end`} name={`work[${index}].end`} placeholder="10/2012" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div className='flex flex-col mb-1'>
                                                <label htmlFor={`work[${index}].description`} className="leading-7 text-sm text-gray-600">Description</label>
                                                <Field as="textarea" row="2" type="text" id={`work[${index}].description`} name={`work[${index}].description`} className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                            </div>
                                        </div>
                                    )) : <div className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 text-base text-gray-700 py-1 px-3 leading-8">Fresher</div>}
                            </div>
                        )}
                    </FieldArray>
                </Form>
            )}
        </Formik>
    )
}
