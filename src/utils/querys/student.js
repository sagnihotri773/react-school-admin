import { gql } from "@apollo/client";

export const ADD_STUDENT = gql`
  mutation AddStudent(
    $name: String!
    $age: Int!
    $gender: String!
    $caste: String!
    $bloodGroup: String!
    $email: String!
    $fatherOccupation: String!
    $fatherEmail: String!
    $address: String!
    $studentCode: String!
    $section: String!
    $admissionDate: String!
    $fatherName: String!
    $fatherPhone: String!
    $motherName: String!
    $GRNumber: String!
    $class: String!
    $previousSchool: String!
    $remarks: String
    $monthlyFee: Float
    $transportRoute: String
    $parentAccount: String
    $discountedStudent: Boolean
    $admissionNotification: Boolean
    $adharCardURL: String
    $studentImage: String
    $generateAdmissionFee: Boolean
  ) {
    addStudent(
      name: $name
      age: $age
      gender: $gender
      caste: $caste
      bloodGroup: $bloodGroup
      email: $email
      fatherOccupation: $fatherOccupation
      fatherEmail: $fatherEmail
      address: $address
      studentCode: $studentCode
      section: $section
      admissionDate: $admissionDate
      fatherName: $fatherName
      fatherPhone: $fatherPhone
      motherName: $motherName
      GRNumber: $GRNumber
      class: $class
      previousSchool: $previousSchool
      remarks: $remarks
      monthlyFee: $monthlyFee
      transportRoute: $transportRoute
      parentAccount: $parentAccount
      discountedStudent: $discountedStudent
      admissionNotification: $admissionNotification
      adharCardURL: $adharCardURL
      studentImage: $studentImage
      generateAdmissionFee: $generateAdmissionFee
    ) {
      id
      name
    }
  }
`;