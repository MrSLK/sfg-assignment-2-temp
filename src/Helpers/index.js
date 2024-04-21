import * as Yup from 'yup';

export const trimText = (str, size = 30) => {
  return str.length > size ? str.substr(0, size - 1) + "..." : str;
};

export const validateIDNumber = () => {
  return Yup.string()
    .min(13, "ID number must be 13 digits long")
    .test("luhn-check", "ID number is invalid", value => validateIdNumber(value))
    .required("ID number is required");
};

const validateIdNumber = (idNumber) => {
  const regex = /^\d{13}$/;
  if (!regex.test(idNumber)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(idNumber[i]);
    if (i % 2 === 0) {
      sum += digit;
    } else {
      sum += digit * 2;
      if (digit >= 5) {
        sum -= 9;
      }
    }
  }

  const checkDigit = parseInt(idNumber[12]);
  const calculatedCheckDigit = (10 - (sum % 10)) % 10;

  return checkDigit === calculatedCheckDigit;
};
