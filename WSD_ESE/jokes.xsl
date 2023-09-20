<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <!-- Output method -->
    <xsl:output method="html" indent="yes" encoding="UTF-8" />
    <!-- Template for root element -->
    <xsl:template match="/">
        <html>
            <head>
                <title>Jokes</title>
            </head>
            <body>
                <table border="1">
                    <tr>
                        <th>Category</th>
                        <th>Joke</th>
                    </tr>

                    <xsl:apply-templates select="jokes_xml/jokes"/>

                </table>
            </body>
        </html>
    </xsl:template>
    <!-- Template for joke element -->
    <xsl:template match="joke">
        <tr>
            <td>
                <xsl:value-of select="jokes/category" />
            </td>
            <td>
                <xsl:value-of select="." />
            </td>
        </tr>
    </xsl:template>

</xsl:stylesheet>