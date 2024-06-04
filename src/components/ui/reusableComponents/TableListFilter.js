import React from 'react';
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "../../ui/collapsible";
import InputFields from '../../../utils/input';
import { Formik, Form } from 'formik';
import { styleInput, FilterIcon, ChevronRightIcon } from '../../../utils/utils';
import { Button } from '../../ui/button';

export default function TableListFilter(props) {
    const { handleOpenFilter, filterClearButton, filterButtonName, onSubmit, filterFieldConfig, clearFilter, initialValues } = props;


    return (
        <Collapsible className="grid text-black bold" >
            <div className='text-right'>
                <CollapsibleTrigger className={`flex items-center gap-1 rounded-md [&[data-state=open]>svg]:rotate-90 mb-3 text-[#088224] hover:text-[#0db634]`} style={{ outline: 'none', float: 'right' }} onClick={handleOpenFilter}>
                    <strong className=''> Apply Filter </strong> <ChevronRightIcon type="button" className="ml-0 h-4 w-4 transition-all" />
                </CollapsibleTrigger>
            </div>

            <CollapsibleContent className="grid gap-1 p-0 " >
                <Formik
                    initialValues={initialValues(filterFieldConfig)}
                    onSubmit={(values, { resetForm }) => {
                        onSubmit(values);
                    }}
                >
                    {({ setFieldValue, values, resetForm }) => (
                        <Form className="dark:bg-black-800 dark:text-white-800 text-black mb-3">
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                                <InputFields
                                    fieldConfig={filterFieldConfig}
                                    styleInput={styleInput}
                                    setFieldValue={setFieldValue}
                                    values={values}
                                    filterButtonName={'Apply Filter'}
                                />
                            </div>
                            <div className='grid col-span-2 md:grid-cols-6 gap-4 mt-3'>
                                <Button type='Submit' className='rounded-md bg-[#088224] text-white hover:bg-[#0db634]' size="sm" onClick={(e) => onSubmit(values)}>
                                    <FilterIcon className="h-4 w-4" viewBox="0 0 24 24" />
                                    {filterButtonName}
                                </Button>
                                {/* <CollapsibleTrigger> */}
                                <Button type="button" className='border rounded-md bg-white' size="sm"
                                    onClick={() => {
                                        resetForm();
                                        clearFilter();
                                    }} >
                                    {filterClearButton}
                                </Button>
                                {/* </CollapsibleTrigger> */}
                            </div>
                        </Form>
                    )}
                </Formik>
            </CollapsibleContent>
        </Collapsible>
    )
}
