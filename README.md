angular-filepicker
==================

Directive for filepicker.io
requires scripts from filepicker.io

Add "filepicker" module to app.js

e.g. angular.module("App", ["filepicker"]);

use

&lt;div filepicker api-key=&quot;your-api-key&quot; path=&quot;/s3ServerPath/&quot; pickerclass=&quot;btn btn-default&quot; container=&quot;Mys3Bucket&quot; multiple=&quot;true&quot; mimetype=&quot;*&quot; callback=&quot;callBackToExecuteAfterUpload(file)&quot; multiple=false&gt;Add Photo&lt;/div&gt;
