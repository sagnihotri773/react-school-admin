import React, { useRef, useState } from 'react';
import { Label } from "../components/ui/label";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Button } from '../components/ui/button';
import { Input } from '../../src/components/ui/input'
import { PlusIcon, UploadIcon, CameraIcon, PanelTopCloseIcon, CloudUploadIcon, isMobile } from '../utils/utils'
import { styleInputTextarea } from '../utils/utils'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Webcam from 'react-webcam';
import { PopoverTrigger, PopoverContent, Popover } from "../components/ui/popover"
import { Link, redirect } from 'react-router-dom';

export default function InputComp(props) {
    const { fieldConfig, handleFile, setFieldValue, styleInput, img = "", handleRemoveImage, multipalSelect, values, filterButtonAction, filterButtonName = '' } = props;
    const WebcamRef = useRef(null);
    const [isFacingUser, setIsFacingUser] = useState(true);
    const [showWebcam, setShowWebcam] = useState(false);
    const [captureImg, setCaptureImg] = useState('');

    const handleCheckboxChange = () => {
        if (img) {
            window.open(img, '_blank');
        } else {
            alert('Please select an image first.');
        }
    };

    const handleSubmit = (values, actions) => {
        console.log(values);
        actions.setSubmitting(false);
    };

    const capture = (name, setFieldValue) => {
        const imageSrc = WebcamRef.current.getScreenshot();
        console.log("imageSrc", imageSrc);
        setFieldValue(name, imageSrc);
        setCaptureImg(imageSrc);
    };

    const getSelectedValue = (option, values, name) => {
        const options = option?.filter((x) => values?.[name]?.includes(x?.value))
        return options
    }

    const toggleCameraFacingMode = () => {
        setIsFacingUser((prev) => !prev);
    };

    const retake = (name, setFieldValue) => {
        setShowWebcam(true);
        setFieldValue(name, '');
        setCaptureImg('');
    };

    const openImage = (image) => {
        if (captureImg) {
            const imageSrc = WebcamRef.current.getScreenshot();
            window.open(imageSrc, '_blank');
        }
    }

    const labelAll = (field) => {
        return <> <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name} >{field.label}</Label> {field?.required && <strong className='text-danger'> * </strong> } </>
    }

    return fieldConfig.map((field, i) => (
        <>
            {field?.header ?
                <div className={`col-lg-7 ${field?.headerClass}`}>
                    <b className='h3 mb-4'> {field?.header} </b>
                </div> : ""}
            {field?.newRow == 1 ?
                <div className='col-md-6 mt-3'> </div>
                : ' '
            }
            <div className={field.col} key={field.name}>

                {field.type === 'select' ? (
                    <>
                        {labelAll(field)}
                        {/* <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name} >{field.label}</Label> */}
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
                        {labelAll(field)}
                        {/* <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name} >{field.label}</Label> */}
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
                ) : field.name === 'profileimage' && field.type === 'file' ? (
                    <div className={`${isMobile ? "" : 'flex'} items-center`}>
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
                        {labelAll(field)}
                        {/* <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name} >{field.label}</Label> */}
                        <Button as="label" type="button" className="ml-0 h-auto" variant="outline">
                            {/* <UploadIcon className="h-4 w-4 mb-2" />&nbsp; */}
                            <input className="" id="image" type="file" name={field.name} onChange={(event) => {
                                // handleFile(setFieldValue, event)
                                const file = event.currentTarget.files[0];
                                console.log("file", file);
                                setFieldValue(field.name, event);
                            }} />
                        </Button>
                    </div>
                ) : field.name === 'csvFile' && field.type === 'file' ? (
                    <>
                        {labelAll(field)}
                        {/* <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name} >{field.label}</Label> */}
                        <div className={field?.outerDivClass}>
                            <div className={field?.outerDivClass1}>
                                <CloudUploadIcon className="h-8 w-8" />
                                <p className="text-sm font-medium">{field.dragDrop} </p>
                            </div>

                            <input
                                type="file"
                                name="csvFile"
                                accept=".csv"
                                className={'absolute inset-0 h-full w-full cursor-pointer opacity-0'}
                                onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    setFieldValue('csvFile', file);
                                }}
                            />
                        </div>
                    </>
                ) : field?.type === 'webcam' ?
                    <>
                        {!showWebcam ? <div className='flex items-center space-x-4'>
                            <Button type='button' variant="outline" onClick={(e) => setShowWebcam(!showWebcam)}>
                                <CameraIcon className="mr-2 h-4 w-4" />
                                Open Camera
                            </Button>
                        </div> :
                            captureImg !== '' ?
                                <div className="flex items-center">
                                    <img
                                        alt="Profile picture"
                                        className="rounded-full"
                                        height={150}
                                        src={captureImg}
                                        style={{
                                            aspectRatio: "64/64",
                                            objectFit: "cover",
                                        }}
                                        width={150}
                                        // onClick={() => window.open(captureImg, "_blank")}
                                        onClick={(e) => openImage(captureImg)}
                                    />
                                    <Button type='button' variant="outline" onClick={(e) => retake(field?.name, setFieldValue)}>Retake</Button>
                                    {/* <Button type='button' > retake </Button> */}
                                </div>
                                :
                                <>
                                    <div className="flex items-center space-x-4">
                                        <Webcam
                                            audio={false}
                                            ref={WebcamRef}
                                            imageSmoothing={true}
                                            className="rounded-full"
                                            screenshotFormat="image/jpeg"
                                            style={{
                                                aspectRatio: "64/64",
                                                objectFit: "cover",
                                            }}
                                            width={150}
                                            height={150}
                                            videoConstraints={{
                                                facingMode: isFacingUser ? 'user' : 'environment',
                                            }}
                                        />
                                    </div>
                                    <Button variant="outline" type='button' className='mt-2 mr-2' onClick={(e) => setShowWebcam(!showWebcam)} >
                                        <CameraIcon className="h-5 w-5 mr-2 mr-2" />
                                        Close
                                    </Button>
                                    <Button variant="outline" type='button' className='mt-2' onClick={(e) => capture(field?.name, setFieldValue)}>
                                        <CameraIcon className="h-5 w-5 mr-2" />
                                        Capture
                                    </Button>
                                </>}
                    </>
                    :
                    field?.type === 'textarea' ?
                        <>
                            {labelAll(field)}
                            {/* <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name} >{field.label}</Label> */}
                            <Field type={field.type} as={field.type} id={field.name} name={field.name} className={styleInputTextarea} {...field?.element} />
                        </>
                        : (
                            <>
                                {labelAll(field)}
                                {/* <Label className={`text-sm ${field?.labelClass}`} htmlFor={field.name} >{field.label}</Label> */}
                                <Field type={field.type} as={CustomInputComponent} name={field.name} id={field.name} {...field?.element} className={styleInput} />
                            </>
                        )}
                {field?.ErrorMessageShow && <ErrorMessage name={field.name} component="div" className="error-message" />}
            </div>
        </>
    ))
}


export const CustomInputComponent = (props) => (
    <input className="my-custom-input" {...props} />
);