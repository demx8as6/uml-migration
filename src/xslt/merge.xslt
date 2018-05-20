<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
	xmlns:architecture="http://www.eclipse.org/papyrus/infra/core/architecture" 
	xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" 
	xmlns:fn="http://www.w3.org/2005/xpath-functions" 
	xmlns:math="http://exslt.org/math" 
	xmlns:uml="http://www.eclipse.org/uml2/5.0.0/UML" 
	xmlns:xmi="http://www.omg.org/spec/XMI/20131001" 
	xmlns:xs="http://www.w3.org/2001/XMLSchema" 
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<!-- output definition -->
	<xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>
	
	<!-- start templates -->
    <xsl:template match="@*|node()|text()">
        <xsl:copy>
            <xsl:apply-templates select="@*|node()|text()"/>
        </xsl:copy>
    </xsl:template>

</xsl:stylesheet>