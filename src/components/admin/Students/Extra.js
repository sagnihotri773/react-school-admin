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

const getStudentLocalData = JSON.parse(localStorage.getItem('student')) || [] ;

export const data = getStudentLocalData ;
// export const data1 = [
//     {
//         name: getStudentLocalData?.teacherName,
//         email: 'john@example.com',
//         class: '10th Grade',
//         address: '123 Main St',
//         gender: 'Male',
//         phone: '123-456-7890',
//         designation: 'Teacher',
//         subjects: ['Math', 'Science', 'English']
//     },
//     {
//         name: 'Jane Smith',
//         email: 'jane@example.com',
//         class: '11th Grade',
//         address: '456 Elm St',
//         gender: 'Female',
//         phone: '987-654-3210',
//         designation: 'Principal',
//         subjects: ['History', 'Geography']
//     },
// ];

export const hTitls = [
    { title: 'Name', value: 'Name' },
    { title: 'Image', value: 'Image'},
    { title: 'Email', value: 'Email' },
    { title: 'Class', value: 'Class' },
    { title: 'Address', value: 'Address' },
    { title: 'Gender', value: 'Gender' },
    { title: 'Phone', value: 'Phone' },
    { title: 'Action', value: 'Action' },
]

