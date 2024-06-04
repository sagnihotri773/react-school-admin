export const initialOptions = {
    names: [
        { id: 1, name: 'John Doe', classId: 1 },
        { id: 2, name: 'Jane Smith', classId: 2 },
        { id: 3, name: 'Michael Johnson', classId: 1 },
        // Add more names as needed
    ],
    classes: [
        { id: 1, className: 'Class A' },
        { id: 2, className: 'Class B' },
        { id: 3, className: 'Class C' },
        // Add more classes as needed
    ],
    sections: [
        { id: 1, sectionName: 'Section 1', classId: 1 },
        { id: 2, sectionName: 'Section 2', classId: 2 },
        { id: 3, sectionName: 'Section 3', classId: 1 },
        // Add more sections as needed
    ]
};

const getStudentLocalData = JSON.parse(localStorage.getItem('student')) || [];

export const data = getStudentLocalData;

export const hTitls = [
    { title: 'Name', value: 'Name' },
    { title: 'Parent', value: 'Parent' },
    { title: 'DOB', value: 'DOB' },
    { title: 'Gender', value: 'Gender' },
    { title: 'Phone', value: 'Phone' },
    { title: 'Address', value: 'Address' },
    { title: 'Date Added', value: 'Date Added' },
    { title: 'Admit', value: 'Admit' },
    { title: 'Send SMS', value: 'Send SMS' },
    { title: 'Action', value: 'Action' },
]