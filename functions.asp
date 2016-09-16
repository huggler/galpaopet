<%
	Sub EnviaEmail(de,para,assunto,mensagem)

			sch           = "http://schemas.microsoft.com/cdo/configuration/"
			Set cdoConfig = Server.CreateObject("CDO.Configuration")
			    		
			cdoConfig.Fields.Item(sch & "sendusing") = 2
			cdoConfig.Fields.Item(sch & "smtpauthenticate") = 1
			cdoConfig.Fields.Item(sch & "smtpserver") = "smtp.galpaopetfood.com"
			cdoConfig.Fields.Item(sch & "smtpserverport") = 587
			cdoConfig.Fields.Item(sch & "smtpconnectiontimeout") = 30
			cdoConfig.Fields.Item(sch & "sendusername") = "site@galpaopetfood.com"
			cdoConfig.Fields.Item(sch & "sendpassword") = "senhapadrao*"
			cdoConfig.fields.update
			Set cdoMessage = Server.CreateObject("CDO.Message")'
		    Set cdoMessage.Configuration = cdoConfig
    		
		    cdoMessage.BodyPart.Charset = "iso-8859-1"
		    cdoMessage.From             = de
		    cdoMessage.To               = para
		    cdoMessage.Subject          = assunto
    		
		    cdoMessage.HTMLBody = mensagem
		    cdoMessage.Send
    		
		    Set cdoMessage = Nothing
		    Set cdoConfig = Nothing

	End Sub
%>
