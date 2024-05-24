import * as Yup from 'yup';
import UserImg from '../../../media/download.png';
import { isMobile } from '../../../utils/utils';

export const options = Array.from({ length: 12 }, (_, index) => ({
    // id: index + 1,
    value: index + 1,
    label: index + 1
}));

const className = [
    { label: '--Select Class--', value: '' },
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


console.log('isMobile', isMobile);
export const fieldConfig = [
    {
        name: 'profileimage',
        type: isMobile ? 'file' : 'webcam',
        isMobile,
        label: 'Image Upload',
        labelClass: "mt-2 ml-0 mt-3",
        validation: Yup.mixed().required('Image is required'),
        col: 'col-md-6',
        accept: ".jpg, .jpeg, .png",
        header: 'Personal Details',
        headerClass: "w-auto mt-2 mb-4 h-9 rounded-md",// text-white bg-[#00194d]
        images: UserImg,
        ErrorMessageShow: true,
        required: true,

    }, {
        name: 'name',
        type: 'text',
        label: 'Name',
        validation: Yup.string().required('Student Name is required'),
        col: 'col-md-6',
        ErrorMessageShow: true,
        required: true,
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
        required: true,
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
        required: true,
        col: 'col-md-6',
    }, {
        name: 'caste',
        type: 'text',
        label: 'Caste',
        validation: Yup.string().required('Student Caste is required'),
        col: 'col-md-6',
        ErrorMessageShow: true,
        required: true,

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
        required: true,
        col: 'col-md-6',
    }, {
        name: 'adharCardImg',
        type: 'file',
        label: 'Adhar Card Image URL',
        col: 'col-md-6',
        validation: Yup.mixed().required('Adhar Card Image URL is required'),
        //  Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is required'),
        ErrorMessageShow: true,
        required: true,
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
        name: 'fatherName',
        type: 'text',
        label: 'Father Name',
        validation: Yup.string().required('Father Name is required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
        element: {
            placeholder: "Father Name"
        },
        header: 'Parent Infomation',
        headerClass: "w-auto h-9 mt-4 mb-4 rounded-md",
    }, {
        name: 'fatherOccupation',
        type: 'select',
        label: 'Father occupation ',
        options: [
            { label: '--Select--', value: '' },
            { label: 'Government Employee', value: 'Government Employee', },
            { label: 'Private Employee', value: 'Private Employee', },
            { label: 'Business Owner', value: 'Business Owner', },
            { label: 'Doctor', value: 'Doctor', },
            { label: 'Engineer', value: 'Engineer', },
            { label: 'Teacher', value: 'Teacher', },
            { label: 'Lawyer', value: 'Lawyer', },
            { label: 'Farmer', value: 'Farmer', },
            { label: 'Other', value: 'Other', }
        ],
        validation: Yup.string().required('Father Occupation is required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
        element: {
            placeholder: "Father Name"
        },
    }, {
        name: 'phone',
        type: "number",
        label: 'Father Phone Number',
        validation: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
        element: {
            placeholder: "9876543210",
            pattern: "[0-9]{3}-[0-9]{2}-[0-9]{3}"
            // as: { TextField }
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
        required: true,
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
        required: true,
        col: 'col-md-6',
        element: {
            placeholder: "#123 sector 1 mohali"
        },
    }, {
        name: 'registernumber',
        type: 'tel',
        label: 'G.R Number',
        validation: Yup.string().required('General register number is required'),
        col: 'col-md-6',
        ErrorMessageShow: true,
        required: true,
        element: {
            placeholder: "General register number"
        },
        header: 'Academic Infomation',
        headerClass: "w-auto h-9 mt-4 mb-4 rounded-md", // text-white bg-[#00194d]
    }, {
        name: 'studentcode',
        type: 'tel',
        label: 'Student code',
        validation: Yup.string().required('Student code is required'),
        col: 'col-md-6',
        ErrorMessageShow: true,
        required: true,
        element: {
            placeholder: "Student code"
        },
    }, {
        name: 'class',
        type: 'select',
        label: 'Class',
        options: className,
        validation: Yup.string().required('Class is required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
    }, {
        name: 'section',
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
        ErrorMessageShow: true,
        required: true,
    }, {
        name: 'previousSchool',
        type: 'text',
        label: 'Previous School',
        validation: Yup.string().required('Previous School is required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
        element: {
            placeholder: "Previous School"
        },
    }, {
        name: 'addmissionDate',
        type: 'date',
        label: 'Addmission Date',
        validation: Yup.date().required('Date of birth is required').nullable().max(new Date(), 'Date of birth must be in the past'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
        element: {
            placeholder: "Previous School",
            InputLabelProps: { shrink: true },
            min: new Date().toISOString().split('T')[0]
            // inputProps:[{ }]
        },
    }, {
        name: 'referenceRemarks',
        type: 'textarea',
        label: 'Reference / Remarks',
        // validation: Yup.string().required('Reference / Remarks is required'),
        ErrorMessageShow: false,
        col: 'col-md-6',
        element: {
            rows: 4,
            cols: 8,
            placeholder: "Any Remark about this addmission? type here if any"
        },
    }, {
        name: 'monthlyFee',
        type: 'tel',
        label: 'Monthly Fee',
        validation: Yup.string().required('Monthly Fee is required'),
        col: 'col-md-6',
        ErrorMessageShow: true,
        required: true,
        element: {
            placeholder: "Monthly Fee"
        },
        header: 'Other Infomation',
        headerClass: "w-auto h-9 mt-4 mb-4 rounded-md",
    }, {
        name: 'discountedStudent',
        type: 'select',
        label: 'Discounted Student?',
        options: [
            { label: '--Select--', value: '' },
            { label: 'Yes', title: 'Yes' },
            { label: 'No', title: 'No' }
        ],
        validation: Yup.string().required('Discounted Student are required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
    }, {
        name: 'transportRoute',
        type: 'select',
        label: 'Transport Route',
        options: [
            { label: '--Select Transport Route--', value: '' },
            { label: 'Route 1', title: 'Route 1' },
            { label: 'Route 2', title: 'Route 2' },
            { label: 'Route 3', title: 'Route 3' },
            { label: 'Route 4', title: 'Route 4' },
            { label: 'Route 5', title: 'Route 5' },
        ],
        validation: Yup.string().required('Transport Route are required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
    }, {
        name: 'admissionNotification',
        type: 'select',
        label: 'Admission Notification',
        options: [
            { label: '--Select Admission Notification--', title: '' },
            { label: 'Email', title: 'Email' },
            { label: 'SMS', title: 'SMS' },
            { label: 'Both', title: 'Both' },
            { label: 'None', title: 'None' },

        ],
        validation: Yup.string().required('Admission Notification are required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
    }, {
        name: 'parentAccount',
        type: 'select',
        label: 'Parent Account',
        options: [
            { label: '--Select Parent Account--', title: '' },
            { label: 'Yes', title: 'Yes' },
            { label: 'No', title: 'No' },

        ],
        validation: Yup.string().required('Parent Account are required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
    }, {
        name: 'generateAdmissionFee',
        type: 'select',
        label: 'Generate Admission Fee',
        options: [
            { label: '--Select--', title: '' },
            { label: 'Yes', title: 'Yes' },
            { label: 'No', title: 'No' },
        ],
        validation: Yup.string().required('Admission Notification are required'),
        ErrorMessageShow: true,
        required: true,
        col: 'col-md-6',
    }
];



export const BulkUploadStudentConfig = [
    {
        name: 'class',
        type: 'select',
        label: 'Class',
        validation: Yup.string().required('Class file is required'),
        options: className,
        col: 'col-md-12 p-0',
        ErrorMessageShow: true,
        required: true,
    }, {
        name: 'section',
        type: 'select',
        label: 'Section',
        validation: Yup.string().required('Section file is required'),
        options: [
            { label: '--Select Section--', value: '' },
            { label: 'A', value: 'A' },
            { label: 'B', value: 'B' },
            { label: 'C', value: 'C' },
            { label: 'D', value: 'D' }
        ],
        col: 'col-md-12 p-0',
        ErrorMessageShow: true,
        required: true,
    }, {
        name: 'csvFile',
        type: 'file',
        label: 'Upload CSV file',
        col: 'col-md-12 p-0',
        labelClass: "mt-2",
        validation: Yup.mixed().required('CSV file is required'),
        //  Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is required'),
        ErrorMessageShow: true,
        required: true,
        dragDrop: "Drag and drop a file or click to upload",
        outerDivClass: 'group relative mt-2 flex h-32 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-gray-400 dark:border-gray-700 dark:bg-gray-900',
        outerDivClass1: "pointer-events-none z-10 flex flex-col items-center justify-center space-y-1 text-center text-gray-500 transition-colors group-hover:text-gray-600 dark:text-gray-400 dark:group-hover:text-gray-300",
        accept: ".csv",
        element: {
            placeholder: "Student Name",
            accept: ".csv"
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