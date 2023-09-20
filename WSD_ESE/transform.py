import lxml.etree as ET
import xmlschema

xsd = "jokes.xsd"
xml = "jokes.xml"
xsl = "jokes.xsl"
schema = xmlschema.XMLSchema(xsd)

if schema.is_valid(xml):
    print("The XML file is valid.")
    dom = ET.parse(xml)
    xslt = ET.parse(xsl)
    transform = ET.XSLT(xslt)
    newdom = transform(dom)
    # print(ET.tostring(newdom, pretty_print=True).decode())
    with open("jokes.html", "w") as f:
        f.write(ET.tostring(newdom, pretty_print=True).decode())


else:
    print("The XML file is invalid.")
    print(schema.validate(xml))
