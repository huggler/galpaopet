<% Call Response.AddHeader("Access-Control-Allow-Origin", "*") %>
<!-- #include file="functions.asp" -->

<% response.charset = "UTF-8" %>
<% 
    Dim modo, dados, msg, de, para, subject
    dados = ""
    

        Dim params
        params = Request("params")
        response.write params

        for each x in request.form
            dados = dados & x & ": " & request.form(x) & "<br>"
        next
        
        de      = "site@galpaopetfood.com"
        para    = "contato@galpaopetfood.com"
        subject = "Contato através do Site"
        msg     = "Mensagem enviada através do Site.<p>" & dados
        
        response.write "OK"

        Call EnviaEmail(de,para,subject,msg)
%>