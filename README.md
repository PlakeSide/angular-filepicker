angular-filepicker
==================
Directive for filepicker.io

<h3> Getting Started</h3>

  1. Add filepicker script to your index.html file before </body>
      ```html
        <script type="text/javascript" src="//api.filepicker.io/v2/filepicker.js"></script>
      ```

  2. Add "filepicker" module to app.js

      angular.module("App", ["filepicker"]);

  3. Use the following tag wherever you want to add filepicker.

&lt;div filepicker api-key=&quot;your-api-key&quot; path=&quot;/s3ServerPath/&quot; pickerclass=&quot;btn btn-default&quot; container=&quot;Mys3Bucket&quot; multiple=&quot;true&quot; mimetype=&quot;*&quot; callback=&quot;callBackToExecuteAfterUpload(file)&quot; multiple=false&gt;Add Photo&lt;/div&gt;
