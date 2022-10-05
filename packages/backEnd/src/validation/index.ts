import { RequestHandler } from "express";
import validate from "validate.js";

var unallowedCharacters = new RegExp("^.*?(?=[\^#%&$\*:<>\?/\{\|\}]).*$")
export const userRegisterValidatioin: RequestHandler = async (
  req,
  res,
  next
) => {
  const constraints = {
    name: {
      presence: { allowEmpty: false },
      type: "string",
      length: {
        minimum: 3,
        tooShort: "must be at least %{count} characters or more",
        maximum: 20,
        tooLong: "needs to have %{count} characters or less",
      },
    },
    password: {
      presence: { allowEmpty: false },
      type: "string",
      length: {
        minimum: 6,
        tooShort: "must be at least %{count} characters",
      },
    },
    email: {
      presence: { allowEmpty: false },
      type: "string",
      email: true,
    },
    repeatPassword: {
      equality: "password",
    },
  };
  try {
    const result = validate(req.body, constraints);
    if (result) {
      return res.status(400).json({
        message: "Invalid request body from registration",
        errors: result,
      });
    }
    return next();
  } catch (err) {
    return res.status(400).json({
      message: "Invalid body",
    });
  }
};

export const userLoginValidation: RequestHandler = async (req, res, next) => {
  const constraints = {
    password: {
      presence: { allowEmpty: false },
      type: "string",
      length: {
        minimum: 6,
        tooShort: "must be at least %{count} characters",
      },
    },
    email: {
      type: "string",
      presence: { allowEmpty: false },
      email: true,
    },
  };
  try {
    const result = validate(req.body, constraints);
    if (result) {
      return res.status(400).json({
        message: "Invalid request body from login",
        errors: result,
      });
    }
    return next();
  } catch (err) {
    return res.status(400).json({
      message: "Invalid body",
    });
  }
};


export const userPostAddValidation: RequestHandler = async (req, res, next) => {
 const constraints = {
  productTitle: {
    type: "string",
    presence: { allowEmpty: false },
    length: {
      minimum: 2,
      tooShort: "must be at least %{count} characters",
    },
  },
  productImages: {
    type: "string",
    presence: { allowEmpty: false },

  },
  productCategory: {
    type: "array",
    presence: { allowEmpty: false },
  },
  price: {
    numericality: { 
      greaterThan: 0,
      lessThanOrEqualTo: 30,
      even: true,
    },
    presence: { allowEmpty: false },

  },
  productCondition: {
    type: "array",
    presence: { allowEmpty: false },
    length: {
      minimum: 2,
      tooShort: "must be at least %{count} characters",
    },
    
  },
  addDescription: {
    type: "string",
    presence: { allowEmpty: false },
    length: {
      minimum: 2,
      maximum: 300,
      tooShort: "must be at least %{count} characters",
      tooLong: "it musn't be longer than %{count} characters"
    },
    
  },
 }
}

export const userPostUpdateProfileValidation: RequestHandler = async (req, res, next) => {
  const constraints = {
   company: {
     type: "string",
     presence: { allowEmpty: true },
     exclusion: { unallowedCharacters },
     length: {
       minimum: 2,
       tooShort: "must be at least %{count} characters",
     },
   },
   firstName: {
    type: "string",
    presence: { allowEmpty: false },
    exclusion: { unallowedCharacters },
    length: {
      minimum: 2,
      tooShort: "must be at least %{count} characters",
    },
  },
  lastName: {
    type: "string",
    presence: { allowEmpty: false },
    exclusion: { unallowedCharacters },
    length: {
      minimum: 2,
      tooShort: "must be at least %{count} characters",
    },
  },
  website: {
    presence: { allowEmpty: true },
    url: true
  },
  phone: {
    presence: { allowEmpty: true },
    numericality: true,
    length: {
      minimum: 9,
      tooShort: "must be at least %{count} characters",
    },
  },
  birthDay: {
    type: "string",
    presence: { allowEmpty: true },
    length: {
      minimum: 6,
      tooShort: "must be at least %{count} characters",
    },
  },
  imageLink: {
    url: true,
    presence: { allowEmpty: true },
  },
  image: {
    presence: { allowEmpty: true },
  },
  address: {
    type: "string",
    presence: { allowEmpty: true },
  },
  city: {
    type: "string",
    presence: { allowEmpty: true },
    length: {
      minimum: 3,
      tooShort: "must be at least %{count} characters",
    },
  },
  state: {
    type: "string",
    presence: { allowEmpty: true },
    length: {
      minimum: 3,
      tooShort: "must be at least %{count} characters",
    },
  },
  postCode: {
    type: "string",
    presence: { allowEmpty: true },
    length: {
      minimum: 6,
      tooShort: "must be at least %{count} characters",
    },
  },
  country: {
    type: "string",
    presence: { allowEmpty: true },
    length: {
      minimum: 4,
      tooShort: "must be at least %{count} characters",
    },
  },
  }
 }