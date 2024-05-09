import React from 'react';
import { Label } from "../components/ui/label";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from '../components/ui/button';
import { styleInput, TrashIcon, RefreshCwIcon } from '../utils/utils';
import { Input } from '../../src/components/ui/input'
import { PlusIcon, UploadIcon } from '../utils/utils'
import { styleInputTextarea } from '../utils/utils'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function input(props) {

    const { fieldConfig, handleFile, setFieldValue, styleInput, img = "", handleRemoveImage, multipalSelect, values, filterButtonAction, filterButtonName = '' } =  props;
    const handleCheckboxChange = () => {
        if (img) {
            window.open(img, '_blank');
        } else {
            alert('Please select an image first.');
        }
    };

    const options = [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' },
        { value: 'orange', label: 'Orange' },
        { value: 'grape', label: 'Grape' }
    ];

    const getSelectedValue = (option, values, name) => {
        const options = option?.filter((x) => values?.[name]?.includes(x?.value))
        return options
    }


    return fieldConfig.map((field, i, array) => (
        <>
            {field?.header ?
                <div className={`col-md-12 mt-4 ${field?.headerClass}`}>
                    <b className='h3 mb-4'> {field?.header} </b>
                </div> : ""}
            {field?.newRow == 1 ?
                <div className='col-md-6 mt-3'>
                </div> : ' '
            }
            <div className={field.col} key={field.name}>

                {field.type === 'select' ? (
                    <>
                        <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name}>{field.label}</Label>
                        <Field as="select" name={field.name} className={styleInput} >
                            {field.options.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Field>
                    </>
                ) : field.type === 'multipalSelect' ? (
                    <>
                        <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name}>{field.label}</Label>
                        <Autocomplete
                            multiple
                            id={field.name}
                            options={field.options}
                            getOptionLabel={(option) => option.label}
                            defaultValue={getSelectedValue(field.options, values, field.name)}
                            filterSelectedOptions
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                />
                            )}
                            onChange={(event, selectedOptions) => {
                                setFieldValue(
                                    field.name,
                                    selectedOptions.map(option => option.value)
                                );
                                multipalSelect(field.name, selectedOptions);
                            }}
                        />
                    </>
                ) : field.name === 'image' ? (
                    <div className="flex items-center space-x-4">
                        <img
                            alt="Profile picture"
                            className="rounded-full"
                            height="150"
                            src={img == '' ? field?.images : img}
                            style={{
                                aspectRatio: "64/64",
                                objectFit: "cover",
                            }}
                            width="150"
                            onClick={handleCheckboxChange}
                        />
                        <Button as="label" type="button" className="ml-3 h-auto" variant="outline">
                            <UploadIcon className="h-4 w-4 mb-2" />&nbsp;
                            <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name}>{field.label}</Label>
                            <Input className="sr-only" id="image" type="file" onChange={(event) => {
                                handleFile(setFieldValue, event)
                            }} />
                        </Button>
                    </div>
                ) : field?.type === 'textarea' ?
                    <>
                        <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name}>{field.label}</Label>
                        <Field type={field.type} as={field.type} rows={field?.rows} cols={field?.cols} name={field.name} className={styleInputTextarea} />
                    </>
                    : (
                        <>
                            <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name}>{field.label}</Label>
                            <Field type={field.type} name={field.name}  {...field?.element} className={styleInput} />
                        </>
                    )}
                {field?.ErrorMessageShow && <ErrorMessage name={field.name} component="div" className="error-message" />}
            </div>
        </>
    ))
}
