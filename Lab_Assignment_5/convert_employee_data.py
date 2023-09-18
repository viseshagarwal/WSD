from lxml import etree
import xmlschema


try:
    xml_file = (
        "C:\\Users\\vises\\OneDrive\\Desktop\\WSD\\Lab_Assignment_5\\employee_data.xml"
    )
    xsd_file = "C:\\Users\\vises\\OneDrive\\Desktop\\WSD\\Lab_Assignment_5\\employee_schema.xsd"
    xsl_file = "C:\\Users\\vises\\OneDrive\\Desktop\\WSD\\Lab_Assignment_5\\employee_transform.xsl"

    validator = xmlschema.XMLSchema(xsd_file)

    if validator.is_valid(xml_file):
        print("XML file is valid.")
    else:
        print("XML file is not valid.")
        print(validator.validate(xml_file))

    # Load XML and XSL files
    xml_tree = etree.parse(xml_file)
    xsl_tree = etree.parse(xsl_file)

    # Apply transformation
    transform = etree.XSLT(xsl_tree)
    html_result = transform(xml_tree)

    # Save the HTML result to a file
    output_filename = (
        "C:\\Users\\vises\\OneDrive\\Desktop\\WSD\\Lab_Assignment_5\\Output.html"
    )

    with open(output_filename, "wb") as html_file:
        html_file.write(etree.tostring(html_result, pretty_print=True))

    print(f"XML to HTML transformation complete. HTML saved to {output_filename}")


except Exception as e:
    print("Error!")
    print(e)
