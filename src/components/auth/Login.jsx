import React, { useState, useLayoutEffect } from "react"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "../ui/card"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { styleInput, RefreshCwIcon, setLocalStorageData, getUserToken } from '../../utils/utils'
import { showSuccessToast, showErrorToast } from '../../utils/toastUtils'
import API, { BASE_URL } from '../../api/apiRoute'
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required')
  });

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        const token = await getUserToken();
        console.log('Token:', token);
        if (token) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error('Error:', error);
      }

    };
    fetchData();
  }, [loading]);


  const onSubmit = async (value) => {
    if (window?.innerWidth < 912) {
      setLocalStorageData("kfjidsujfksmangdsjbasfkm", []);
      return navigate('/dashboard');
    }
    setIsLoading(true);
    var formdata = new FormData();
    formdata.append('email', value?.email);
    formdata.append('password', value?.password);

    try {
      const response = await fetch(BASE_URL + "/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: value?.email, password: value?.password }),
      });
      console.log("response", response);
      if (!response.ok) {
        const data = await response.json();
        console.log("data?.error", data?.message);
        showErrorToast(data?.message || data?.msg);
        setIsLoading(false);
        throw new Error(data.error);
      }

      // Login successful, handle response here
      const data = await response.json();
      console.log('Login successful:', data);
      navigate('/dashboard');
      setLocalStorageData(data?.token, JSON.stringify(data?.user));
      setIsLoading(false);
      showSuccessToast(data.message)
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
      if (error.message) {
        showErrorToast(error.message);
      }
    }
  }

  return (
    <div className="flex items-center min-h-[600px] px-4">
      <div className="w-full max-w-md space-y-4 mx-auto">
        <div className="space-y-2">
          <Card className="dark:bg-black-800 dark:text-white-800 text-black">
            <CardHeader className="space-y-2">
              <CardTitle className="text-3xl ">Login</CardTitle>
              <CardDescription>Enter your email and password to access the admin panel.</CardDescription>
            </CardHeader>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              // onSubmit={(values, { resetForm }) => {
              //   onSubmit(values);
              // }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // alert(JSON.stringify(values, null, 2));
                  onSubmit(values);
                  setSubmitting(false);
                }, 400);
              }}
            >
              <Form>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Field type="email" id="email" name="email" className={styleInput} />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Field type="password" id="password" name="password" className={styleInput} />
                    <ErrorMessage name="password" component="div" className="error-message" />
                  </div>
                </CardContent>
                <CardFooter>
                  {isLoading &&
                    <Button size="icon" variant="outline">
                      <RefreshCwIcon className="animate-spin h-4 w-4" />
                      <span className="sr-only">Loading</span>
                    </Button>
                  }
                  <Button disabled={isLoading} className="w-full ml-auto bg-black text-white" type='submit'>Login</Button>
                </CardFooter>
              </Form>
            </Formik>
            {/* <CardFooter className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Link className="underline" href="#">
                  Forgot your password?
                </Link>
                <Link className="underline" href="#">
                  Register
                </Link>
              </div>
            </CardFooter> */}
          </Card>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
}
