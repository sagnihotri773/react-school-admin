import * as Yup from 'yup';
import UserImg from '../../../media/download.png'


export const options = Array.from({ length: 12 }, (_, index) => ({
    id: index + 1,
    value: index + 1,
    label: index + 1
}));

export const fieldConfig = [
    {
        name: 'image',
        type: 'file',
        label: 'Image Upload',
        validation: Yup.mixed().required('Image is required'),
        col: 'col-md-6',
        accept: ".jpg, .jpeg, .png",
        header: 'Personal Details',
        headerClass: "mb-2",
        images: UserImg
    }, {
        name: 'teacherName',
        type: 'text',
        label: 'Name',
        validation: Yup.string().required('Teacher Name is required'),
        col: 'col-md-6',
        newRow: 1
    }, {
        name: 'age',
        type: 'number',
        label: 'Age',
        validation: Yup.number().positive('Age must be a positive number').required('Age is required'),
        col: 'col-md-6',
    }, {
        name: 'email',
        type: 'email',
        label: 'Email',
        validation: Yup.string().email('Invalid email address').required('Email is required'),
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
        col: 'col-md-6',
    }, {
        name: 'phoneNumber',
        type: 'tel',
        label: 'Phone Number',
        validation: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is required'),
        col: 'col-md-6',
    }, {
        name: 'qualification',
        type: 'text',
        label: 'Qualification',
        validation: Yup.string().required('Qualification is required'),
        col: 'col-md-6',
    }, {
        name: 'bloodGroup',
        type: 'select',
        label: 'Blood Group',
        options: [
            { id: 1, label: 'A+', value: 'A+' },
            { id: 2, label: 'A-', value: 'A-' },
            { id: 3, label: 'B+', value: 'B+' },
            { id: 4, label: 'B-', value: 'B-' },
            { id: 5, label: 'AB+', value: 'AB+' },
            { id: 6, label: 'AB-', value: 'AB-' },
            { id: 7, label: 'O+', value: 'O+' },
            { id: 8, label: 'O-', value: 'O-' }
        ],
        validation: Yup.string().required('Blood Group is required'),
        col: 'col-md-6',
    }, {
        name: 'adharCardImg',
        type: 'file',
        label: 'Adhar Card Image URL',
        col: 'col-md-6',
        validation: Yup.mixed().required('Adhar Card Image URL is required'),
        accept: ".jpg, .jpeg, .png",
    }, {
        name: 'address',
        type: 'text',
        label: 'Address',
        validation: Yup.string().required('Address is required'),
        col: 'col-md-6',
    }, {
        name: 'fatherName',
        type: 'text',
        label: 'Father Name',
        validation: Yup.string().required('Father Name is required'),
        col: 'col-md-6',
    }, {
        name: 'teacherClass',
        type: 'multipalSelect',
        label: 'Incharge',
        options: options,
        validation: Yup.array().min(1, "Please select at least one option").required("Please select at least one option"),
        col: 'col-md-6',
        header: 'Offical Details',
        multipalSelect: true
    }, {
        name: 'Section',
        type: 'select',
        label: 'Section',
        options: [
            { label: 'A', title: 'A' },
            { label: 'B', title: 'B' },
            { label: 'C', title: 'C' },
            { label: 'D', title: 'D' }
        ],
        validation: Yup.string().required('Section are required'),
        col: 'col-md-6',
    }, {
        name: 'skills',
        type: 'text',
        label: 'Skills',
        validation: Yup.string().required('Skills are required'),
        col: 'col-md-6',
    }, {
        name: 'experience',
        type: 'number',
        label: 'Experience (years)',
        validation: Yup.number().positive('Experience must be a positive number').required('Experience is required'),
        col: 'col-md-6',
    }, {
        name: 'teacherId',
        type: 'text',
        label: 'Teacher ID Number',
        validation: Yup.string().required('Teacher ID Number is required'),
        col: 'col-md-6',
    }, {
        name: 'joiningDate',
        type: 'date',
        label: 'Joining Date',
        validation: Yup.date().required('Joining Date is required'),
        col: 'col-md-6',
    }, {
        name: 'discription',
        type: 'textarea',
        label: 'Discription',
        col: 'col-md-12',
        rows: 4,
        cols: 50
    },
];

// Define initial values for fields
export const initialValues = (data = {}) => {
    const a = fieldConfig.reduce((acc, curr) => {
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
    fieldConfig.reduce((acc, curr) => {
        acc[curr.name] = curr.validation;
        return acc;
    }, {})
);
