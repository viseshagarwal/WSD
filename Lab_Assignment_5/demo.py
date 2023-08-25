from lxml import etree

# Load XML
xml_tree = etree.parse("C:\Users\vises\OneDrive\Desktop\WSD\Lab_Assignment_5\input.xml")

# Load XSL
xsl_transform = etree.XSLT(etree.parse("C:\Users\vises\OneDrive\Desktop\WSD\Lab_Assignment_5\transform.xsl"))

# Apply XSLT transformation
html_tree = xsl_transform(xml_tree)

# Validate against XSD
xmlschema = etree.XMLSchema(etree.parse("C:\Users\vises\OneDrive\Desktop\WSD\Lab_Assignment_5\schema.xsd"))
if xmlschema.validate(xml_tree):
    print("XML is valid against XSD.")
else:
    print("XML is not valid against XSD.")
    exit(1)

# Write transformed HTML to a file
with open("output.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))
