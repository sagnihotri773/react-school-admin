import * as Yup from 'yup';
import UserImg from '../../../media/download.png';
export const options = Array.from({ length: 12 }, (_, index) => ({
    // id: index + 1,
    value: index + 1,
    label: index + 1
}));

const className = [
    { label: '--Select--', value: '' },
    { value: 'nursery', label: 'Nursery' },
    { value: 'ukg', label: 'UKG' },
    { value: 'lkg', label: 'LKG' },
    ...options
]

export const filterFieldConfig = [
    {
        name: 'name',
        type: 'text',
        label: 'Student Name',
        col: 'col-md-12 p-0',
        element: {
            placeholder: "Student Name"
        },
        ErrorMessageShow: false,
    }, {
        name: 'class',
        type: 'select',
        label: 'Class',
        options: className,
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
        col: 'col-md-6',
        accept: ".jpg, .jpeg, .png",
        header: 'Personal Details',
        headerClass: "w-auto mt-2 mb-4 h-9 rounded-md",// text-white bg-[#00194d]
        images: UserImg,
        ErrorMessageShow: true,

    }, {
        name: 'name',
        type: 'text',
        label: 'Name',
        validation: Yup.string().required('Student Name is required'),
        col: 'col-md-6',
        ErrorMessageShow: true,
        newRow: 1,
        element: {
            placeholder: "Student Name"
        },
    }, {
        name: 'age',
        type: 'number',
        label: 'Age',
        validation: Yup.string()
            .required('Age is required')
            .test('is-valid-number', 'Please enter a valid age (numbers only)', value => {
                return /^\d+$/.test(value); // Validate if input contains only numbers
            })
            .test('is-adult', 'You must be at least 18 years old', function (value) {
                const { isAdult } = this.parent; // Access the value of isAdult field
                if (isAdult) {
                    return parseInt(value, 10) >= 18; // Check if age is at least 18 if user is an adult
                }
                return true; // Skip this validation if user is not an adult
            }),
        ErrorMessageShow: true,
        col: 'col-md-6',
        element: {
            placeholder: "6"
        },
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
        name: 'caste',
        type: 'text',
        label: 'Caste',
        validation: Yup.string().required('Student Caste is required'),
        col: 'col-md-6',
        ErrorMessageShow: true,

        element: {
            placeholder: "Student Caste"
        },
    }, {
        name: 'bloodGroup',
        type: 'select',
        label: 'Blood Group',
        options: [
            { label: '--Select--', value: '' },
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
        //  Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is required'),
        ErrorMessageShow: true,
        accept: ".jpg, .jpeg, .png",
    }, {
        name: 'email',
        type: 'email',
        label: 'Email',
        // validation: Yup.string().email('Invalid email address').required('Email is required'),
        ErrorMessageShow: false,
        col: 'col-md-6',
        element: {
            placeholder: "example@gmail.com"
        },
    }, {
        name: 'class',
        type: 'select',
        label: 'Class',
        options: className,
        validation: Yup.string().required('Class is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
        header: 'Academic Infomation',
        headerClass: "w-auto h-9 mt-4 mb-4 rounded-md", // text-white bg-[#00194d]
    }, {
        name: 'Section',
        type: 'select',
        label: 'Section',
        options: [
            { label: '--Select--', value: '' },
            { label: 'A', title: 'A' },
            { label: 'B', title: 'B' },
            { label: 'C', title: 'C' },
            { label: 'D', title: 'D' }
        ],
        validation: Yup.string().required('Section are required'),
        col: 'col-md-6',
    }, {
        name: 'fatherName',
        type: 'text',
        label: 'Father Name',
        validation: Yup.string().required('Father Name is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
        element: {
            placeholder: "Father Name"
        },
        header: 'Parent Infomation',
        headerClass: "w-auto h-9 mt-4 mb-4 rounded-md",
    }, {
        name: 'phone',
        type: 'tel',
        label: 'Father Phone Number',
        validation: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Father Phone Number is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
        element: {
            placeholder: "9876543210"
        },
    }, {
        name: 'email',
        type: 'email',
        label: 'Father Email',
        validation: Yup.string().email('Invalid email address').required('Email is required'),
        ErrorMessageShow: false,
        col: 'col-md-6',
        element: {
            placeholder: "example@gmail.com"
        },
    }, {
        name: 'motherName',
        type: 'text',
        label: 'Mother Name',
        validation: Yup.string().required('Mother Name is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
        element: {
            placeholder: "Mother Name"
        },
    }, {
        name: 'address',
        type: 'text',
        label: 'Address',
        validation: Yup.string().required('Address is required'),
        ErrorMessageShow: true,
        col: 'col-md-6',
        element: {
            placeholder: "#123 sector 1 mohali"
        },
    },
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