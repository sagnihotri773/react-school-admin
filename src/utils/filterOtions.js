import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  message: ''
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required')
});

const onSubmit = (values, { resetForm }) => {
  // Handle form submission logic here
  console.log(values);
  resetForm();
};

const filterOtions = () => {
  return (
    <div>
      <h2>Contact Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <Field as="textarea" id="message" name="message" />
              <ErrorMessage name="message" component="div" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default filterOtions;



// import React from 'react';

// export default function filterOtions() {
//     return (
//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             <div className="space-y-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" placeholder="Search by name" type="text" />
//             </div>
//             <div className="space-y-2">
//                 <Label htmlFor="section">Section</Label>
//                 <Select id="section">
//                     <SelectTrigger className="w-full">
//                         <SelectValue placeholder="Select section" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="section1">Section 1</SelectItem>
//                         <SelectItem value="section2">Section 2</SelectItem>
//                         <SelectItem value="section3">Section 3</SelectItem>
//                     </SelectContent>
//                 </Select>
//             </div>
//             <div className="space-y-2">
//                 <Label htmlFor="status">Status</Label>
//                 <Select id="status">
//                     <SelectTrigger className="w-full">
//                         <SelectValue placeholder="Select status" />
//                     </SelectTrigger>
//                     <SelectContent>
//                         <SelectItem value="active">Active</SelectItem>
//                         <SelectItem value="inactive">Inactive</SelectItem>
//                     </SelectContent>
//                 </Select>
//             </div>
//         </div>
//     )
// }
