import * as Yup from 'yup';
import UserImg from '../../../media/download.png';
import { Placeholder } from 'react-bootstrap';
export const options = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    value: index + 1,
    label: index + 1
}));

export const filterFieldConfig = [
    {
        name: 'name',
        type: 'text',
        label: 'Student Name',
        col: 'col-md-12 p-0',
        element: {
            Placeholder: "Student Name"
        },
        ErrorMessageShow: false,
    }, {
        name: 'class',
        type: 'select',
        label: 'Class',
        options: [
            { label: '--select--', value: '' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' }
        ],
        col: 'col-md-12 p-0',
        ErrorMessageShow: false,
    }, {
        name: 'Section',
        type: 'select',
        label: 'Section',
        options: [
            { label: '--select--', value: '' },
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' },
            { label: 'D', value: 'D' }
        ],
        col: 'col-md-12 p-0',
        ErrorMessageShow: false,
    }, 
    {
        name: 'status',
        type: 'select',
        label: 'Status',
        options: [
            { label: '--select--', value: '' },
            { label: 'Active', value: 'Active' },
            { label: 'In-Active', value: 'In-Active' },
        ],
        col: 'col-md-12 p-0',
        ErrorMessageShow: false,
    }
];


export const fieldConfig = [
    {
        name: 'image',
        type: 'file',
        label: 'Image Upload',
        validation: Yup.mixed().required('Image is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
        accept: ".jpg, .jpeg, .png",
        header: 'Personal Details',
        headerClass: "mb-2",
        images: UserImg
    }, {
        name: 'name',
        type: 'text',
        label: 'Name',
        validation: Yup.string().required('Teacher Name is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
        newRow: 1
    }, {
        name: 'age',
        type: 'number',
        label: 'Age',
        validation: Yup.number().positive('Age must be a positive number').required('Age is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
    }, {
        name: 'email',
        type: 'email',
        label: 'Email',
        validation: Yup.string().email('Invalid email address').required('Email is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
    }, {
        name: 'gender',
        type: 'select',
        label: 'Gender',
        options: [
            { value: '', label: 'Select Gender' },
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
        ],
        validation: Yup.string().required('Gender is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
    }, {
        name: 'class',
        type: 'select',
        label: 'Class',
        options: options,
        validation: Yup.string().required('Class is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
    }, {
        name: 'phone',
        type: 'tel',
        label: 'Phone Number',
        validation: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
    }, {
        name: 'bloodGroup',
        type: 'select',
        label: 'Blood Group',
        options: [
            { label: '--Select--' , value: ''},
            { label: 'A+', value: 'A+' },
            { label: 'A-', value: 'A-' },
            { label: 'B+', value: 'B+' },
            { label: 'B-', value: 'B-' },
            { label: 'AB+', value: 'AB+' },
            { label: 'AB-', value: 'AB-' },
            { label: 'O+', value: 'O+' },
            { label: 'O-', value: 'O-' }
        ],
        validation: Yup.string().required('Blood Group is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
    }, {
        name: 'adharCardImg',
        type: 'file',
        label: 'Adhar Card Image URL',
        col: 'col-md-6',
        validation: Yup.mixed().required('Adhar Card Image URL is required'),
        ErrorMessageShow: true,
        accept: ".jpg, .jpeg, .png",
    }, {
        name: 'address',
        type: 'text',
        label: 'Address',
        validation: Yup.string().required('Address is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
    }, {
        name: 'fatherName',
        type: 'text',
        label: 'Father Name',
        validation: Yup.string().required('Father Name is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
    }
];

// Define initial values for fields
export const initialValues = (array = [], data = {}) => {
    const a = array.reduce((acc, curr) => {
        const name = curr.name;
        if (curr?.type === "multipalSelect") {
            acc[curr.name] = data?.[name] || [];
        } else {
            acc[curr.name] = data?.[name] || '';
        }
        return acc;
    }, {})
    return a
}

// Create validation schema
export const validationSchema = Yup.object().shape(
    filterFieldConfig.reduce((acc, curr) => {
        acc[curr.name] = curr.validation;
        return acc;
    }, {})
);

