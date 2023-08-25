# code
import xmlschema as xs

xml = "C:\Users\vises\OneDrive\Desktop\WSD\Lab_Assignment_4\employees.xml"

xsd = "C:\Users\vises\OneDrive\Desktop\WSD\Lab_Assignment_4\employees_schema.xsd"

validator = xs.XMLSchema(xsd)
if validator.is_valid(xml):
    print("The XML file is valid against the XSD schema which is provided.")
else:
    print("The XML file is not valid against the XSD schema which is provided.")
    print(validator.validate(xml))
