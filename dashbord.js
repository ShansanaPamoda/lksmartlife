<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Switch 1</title>
  <h2>Switch 1</h2>
  <link rel="stylesheet" href="./style.css">
</head>
<body>
<!-- partial:index.partial.html -->
<div class="toggle-group">
    <input type="checkbox" name="on-off-switch" id="on-off-switch" checked="" tabindex="1" onclick="myFunction()">
    <label for="on-off-switch">
        <span class="aural">Show:</span>
    </label>
    <div class="onoffswitch pull-right" aria-hidden="true">
        <div class="onoffswitch-label">
            <div class="onoffswitch-inner"></div>
            <div class="onoffswitch-switch"></div>
        </div>
    </div>
</div>
<p id="text" style="display:none">Switch 1 is ON </p>
<script>
function myFunction() {
  var checkBox = document.getElementById("on-off-switch");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
</script>
<!-- partial -->

</body>
</html>
