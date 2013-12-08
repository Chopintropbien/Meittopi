<HTML>
<HEAD>
<TITLE>JScript - Focus sur un champ</TITLE>
<SCRIPT LANGUAGE="JavaScript">
//D'autres scripts sur http://www.multimania.com/jscript
//Si vous utilisez ce script, merci de m'avertir ! 	< jscript@multimania.com >

function DonnerFocus(nom) {
	document.forms[0].elements[nom].focus();
}
</SCRIPT>
</HEAD>

<BODY bgcolor="#FFFFFF" text="#FAFAFF" alink="#000066" link="#000066" vlink="#000066" onLoad='DonnerFocus("champ1")'>
<FONT FACE="Arial" SIZE='-1' COLOR="#333333">
<CENTER>En cliquant sur les boutons, vous donnez le focus au champ que vous voulez.<BR>
Tous les champs des formulaires peuvent avoir le focus.<BR>
A l'origine, le focus est sur le 1<SUP>er</SUP> champ.<BR>
<BR>


<form name="formulaire">
	<INPUT type='text' size=30>&nbsp 
	<INPUT type='button' value='Focus' onClick='DonnerFocus("champ1")'><BR>

	<INPUT type='text' size=30 name="champ2">&nbsp 
	<INPUT type='button' value='Focus' onClick='DonnerFocus("champ2")'><BR>

	<INPUT type='text' size=30 name="champ3">&nbsp 
	<INPUT type='button' value='Focus' onClick='DonnerFocus("champ3")'><BR>

</form>
</CENTER>


</FONT></BODY></HTML>
<!-- Script développé par Olivier Hondermarck  Mail: jscript@multimania.com -->
<!-- D'autres scripts et des conseils sur http://www.multimania.com/jscript -->

