# code
import xmlschema as xs

xml_file = ".\Lab_Assignment_4\employees.xml"
xsd_file = ".\Lab_Assignment_4\employees_schema.xsd"

validator = xs.XMLSchema(xsd_file)
if validator.is_valid(xml_file):
    print("XML file is valid against the XSD schema.")
else:
    print("XML file is not valid against the XSD schema.")
    print(validator.validate(xml_file))
