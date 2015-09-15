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
```html
<div filepicker api-key="your-api-key" path="/s3ServerPath/" pickerclass="btn btn-default" container="Mys3Bucket" multiple="true" mimetype="*" callback="callBackToExecuteAfterUpload(file)" multiple=false>Add Photo</div>
```
