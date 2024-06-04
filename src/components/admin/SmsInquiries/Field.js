import * as Yup from 'yup';
import { isMobile } from '../../../utils/utils';

    export const fieldConfig = [
        {
            name: 'class',
            type: 'select',
            label: 'Class',
            options: [
                { label: '--select--', value: '' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
                { label: '3', value: '3' },
                { label: '4', value: '4' },
                { label: 'all', value: 'All' },
            ],
            col: 'col-md-12 ',
            newRow: 1,
            ErrorMessageShow: false,
        }, {
            name: 'sms',
            type: 'textarea',
            label: 'SMS to Inquiries',
            // validation: Yup.string().required('Reference / Remarks is required'),
            ErrorMessageShow: false,
            col: 'col-md-12 ',
            suggestion: true,
            newRow: 1,
            element: {
                rows: 10,
                placeholder: "SMS to Inquiries? type here if any",
            }
        }, {
            name: 'date',
            type: 'date',
            label: 'Date',
            // validation: Yup.string().required('Reference / Remarks is required'),
            ErrorMessageShow: false,
            col: isMobile ? 'col-md-12 text-black' : "col-md-6 text-black ",
            
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
        fieldConfig.reduce((acc, curr) => {
            acc[curr.name] = curr.validation;
            return acc;
        }, {})
    );