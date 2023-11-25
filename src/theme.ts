// theme.ts

export interface Theme {
  name: string
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  buttonBackgroundColor?: any
  buttonHoverColor?: any
  textColor: string
  fontSize: string
  fontWeight?: string
  lineHeight: string // Line height for text
  borderRadius: string
  boxShadow: string
  linkColor: string // Color for links
  linkHoverColor: string // Color for links on hover
  accentColor: string // Accent color for UI elements
  errorColor: string // Color for error messages
  inputBackground: string // Background color for input fields
  inputBorder: string // Border color for input fields
  inputFocusBorder: string // Border color for input fields on focus
  successColor: string // Color for success messages
  warningColor: string // Color for warning messages
  infoColor: string // Color for informational messages
  darkGray: string // Dark Gray
  mediumGray: string // Medium Gray
  lightGray: string // Light Gray
  extraLightGray: string // Extra Light Gray
  spacingUnit: string // Base spacing unit for consistent spacing
  maxWidth: string // Maximum width for the content container
}

export const theme_1: Theme = {
  name: 'theme_1',
  primaryColor: '#d64161', // light pink
  secondaryColor: '#2ecc71', // Green
  backgroundColor: '#ccc', // Light dark red
  buttonBackgroundColor:
    'linear-gradient(to right, #a72440, #bc2848, #d12d50, #d64161, #db5672, #df6b84, #e48095)',
  buttonHoverColor:
    'linear-gradient(to right, #e48095, #df6b84, #db5672, #d64161, #d12d50, #bc2848, #a72440)',
  textColor: '#a72440', // Dark Gray

  fontSize: '16px',
  fontWeight: '400',

  lineHeight: '1.5', // Line height for text

  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(255, 255, 255, 0.5)',

  linkColor: '#3498db', // Color for links
  linkHoverColor: '#2980b9', // Color for links on hover

  accentColor: '#e67e22', // Accent color for UI elements
  errorColor: '#e74c3c', // Color for error messages

  inputBackground: '#f2f2f2', // Background color for input fields
  inputBorder: '#ddd', // Border color for input fields
  inputFocusBorder: '#3498db', // Border color for input fields on focus

  successColor: '#27ae60', // Color for success messages
  warningColor: '#f39c12', // Color for warning messages
  infoColor: '#3498db', // Color for informational messages

  darkGray: '#34495e', // Dark Gray
  mediumGray: '#95a5a6', // Medium Gray
  lightGray: '#ecf0f1', // Light Gray
  extraLightGray: '#f9f9f9', // Extra Light Gray

  spacingUnit: '8px', // Base spacing unit for consistent spacing
  maxWidth: '1200px', // Maximum width for the content container
}
export const theme_2: Theme = {
  name: 'theme_2',
  primaryColor: '#f39c12', // Orange
  secondaryColor: '#e74c3c', // Red
  backgroundColor: '#34495e', // Dark Blue-Gray
  textColor: '#ecf0f1', // Light Gray

  fontSize: '16px',

  lineHeight: '1.5', // Line height for text

  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  linkColor: '#3498db', // Color for links
  linkHoverColor: '#2980b9', // Color for links on hover

  accentColor: '#e67e22', // Accent color for UI elements
  errorColor: '#e74c3c', // Color for error messages

  inputBackground: '#f2f2f2', // Background color for input fields
  inputBorder: '#ddd', // Border color for input fields
  inputFocusBorder: '#3498db', // Border color for input fields on focus

  successColor: '#27ae60', // Color for success messages
  warningColor: '#f39c12', // Color for warning messages
  infoColor: '#3498db', // Color for informational messages

  darkGray: '#34495e', // Dark Gray
  mediumGray: '#95a5a6', // Medium Gray
  lightGray: '#ecf0f1', // Light Gray
  extraLightGray: '#f9f9f9', // Extra Light Gray

  spacingUnit: '8px', // Base spacing unit for consistent spacing
  maxWidth: '1200px', // Maximum width for the content container
}
export const theme_3: Theme = {
  name: 'theme_3',
  primaryColor: '#9b59b6', // Purple
  secondaryColor: '#3498db', // Blue
  backgroundColor: '#2c3e50', // Dark Gray
  textColor: '#ecf0f1', // Light Gray

  fontSize: '16px',

  lineHeight: '1.5', // Line height for text

  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  linkColor: '#3498db', // Color for links
  linkHoverColor: '#2980b9', // Color for links on hover

  accentColor: '#e67e22', // Accent color for UI elements
  errorColor: '#e74c3c', // Color for error messages

  inputBackground: '#f2f2f2', // Background color for input fields
  inputBorder: '#ddd', // Border color for input fields
  inputFocusBorder: '#3498db', // Border color for input fields on focus

  successColor: '#27ae60', // Color for success messages
  warningColor: '#f39c12', // Color for warning messages
  infoColor: '#3498db', // Color for informational messages

  darkGray: '#34495e', // Dark Gray
  mediumGray: '#95a5a6', // Medium Gray
  lightGray: '#ecf0f1', // Light Gray
  extraLightGray: '#f9f9f9', // Extra Light Gray

  spacingUnit: '8px', // Base spacing unit for consistent spacing
  maxWidth: '1200px', // Maximum width for the content container
}
export const theme_4: Theme = {
  name: 'theme_4',
  primaryColor: '#e67e22', // Orange
  secondaryColor: '#16a085', // Green
  backgroundColor: '#34495e', // Dark Blue-Gray
  textColor: '#ecf0f1', // Light Gray

  fontSize: '16px',

  lineHeight: '1.5', // Line height for text

  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  linkColor: '#3498db', // Color for links
  linkHoverColor: '#2980b9', // Color for links on hover

  accentColor: '#e67e22', // Accent color for UI elements
  errorColor: '#e74c3c', // Color for error messages

  inputBackground: '#f2f2f2', // Background color for input fields
  inputBorder: '#ddd', // Border color for input fields
  inputFocusBorder: '#3498db', // Border color for input fields on focus

  successColor: '#27ae60', // Color for success messages
  warningColor: '#f39c12', // Color for warning messages
  infoColor: '#3498db', // Color for informational messages

  darkGray: '#34495e', // Dark Gray
  mediumGray: '#95a5a6', // Medium Gray
  lightGray: '#ecf0f1', // Light Gray
  extraLightGray: '#f9f9f9', // Extra Light Gray

  spacingUnit: '8px', // Base spacing unit for consistent spacing
  maxWidth: '1200px', // Maximum width for the content container
}

export const theme_5: Theme = {
  name: 'theme_5',
  primaryColor: '#c0392b', // Dark Red
  secondaryColor: '#2980b9', // Blue
  backgroundColor: '#27ae60', // Green
  textColor: '#ecf0f1', // Light Gray

  fontSize: '16px',

  lineHeight: '1.5', // Line height for text

  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  linkColor: '#3498db', // Color for links
  linkHoverColor: '#2980b9', // Color for links on hover

  accentColor: '#e67e22', // Accent color for UI elements
  errorColor: '#e74c3c', // Color for error messages

  inputBackground: '#f2f2f2', // Background color for input fields
  inputBorder: '#ddd', // Border color for input fields
  inputFocusBorder: '#3498db', // Border color for input fields on focus

  successColor: '#27ae60', // Color for success messages
  warningColor: '#f39c12', // Color for warning messages
  infoColor: '#3498db', // Color for informational messages

  darkGray: '#34495e', // Dark Gray
  mediumGray: '#95a5a6', // Medium Gray
  lightGray: '#ecf0f1', // Light Gray
  extraLightGray: '#f9f9f9', // Extra Light Gray

  spacingUnit: '8px', // Base spacing unit for consistent spacing
  maxWidth: '1200px', // Maximum width for the content container
}
export const theme_6: Theme = {
  name: 'theme_6',
  primaryColor: '#3498db', // Blue
  secondaryColor: '#16a085', // Green
  backgroundColor: '#34495e', // Dark Blue-Gray
  textColor: '#ecf0f1', // Light Gray

  fontSize: '16px',

  lineHeight: '1.5', // Line height for text

  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  linkColor: '#3498db', // Color for links
  linkHoverColor: '#2980b9', // Color for links on hover

  accentColor: '#e67e22', // Accent color for UI elements
  errorColor: '#e74c3c', // Color for error messages

  inputBackground: '#f2f2f2', // Background color for input fields
  inputBorder: '#ddd', // Border color for input fields
  inputFocusBorder: '#3498db', // Border color for input fields on focus

  successColor: '#27ae60', // Color for success messages
  warningColor: '#f39c12', // Color for warning messages
  infoColor: '#3498db', // Color for informational messages

  darkGray: '#34495e', // Dark Gray
  mediumGray: '#95a5a6', // Medium Gray
  lightGray: '#ecf0f1', // Light Gray
  extraLightGray: '#f9f9f9', // Extra Light Gray

  spacingUnit: '8px', // Base spacing unit for consistent spacing
  maxWidth: '1200px', // Maximum width for the content container
}
export const theme_7: Theme = {
  name: 'theme_7',
  primaryColor: '#3498db', // Blue
  secondaryColor: '#c0392b', // Dark Red
  backgroundColor: '#3498db', // Blue
  textColor: '#ecf0f1', // Light Gray

  fontSize: '16px',

  lineHeight: '1.5', // Line height for text

  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',

  linkColor: '#3498db', // Color for links
  linkHoverColor: '#2980b9', // Color for links on hover

  accentColor: '#e67e22', // Accent color for UI elements
  errorColor: '#e74c3c', // Color for error messages

  inputBackground: '#f2f2f2', // Background color for input fields
  inputBorder: '#ddd', // Border color for input fields
  inputFocusBorder: '#3498db', // Border color for input fields on focus

  successColor: '#27ae60', // Color for success messages
  warningColor: '#f39c12', // Color for warning messages
  infoColor: '#3498db', // Color for informational messages

  darkGray: '#34495e', // Dark Gray
  mediumGray: '#95a5a6', // Medium Gray
  lightGray: '#ecf0f1', // Light Gray
  extraLightGray: '#f9f9f9', // Extra Light Gray

  spacingUnit: '8px', // Base spacing unit for consistent spacing
  maxWidth: '1200px', // Maximum width for the content container
}
