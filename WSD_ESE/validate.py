import xmlschema

xsd = "jokes.xsd"
xml = "jokes.xml"
schema = xmlschema.XMLSchema(xsd)

if schema.is_valid(xml):
    print("The XML file is valid.")
else:
    print("The XML file is invalid.")
    print(schema.validate(xml))
