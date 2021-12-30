



  function addText(text){
    var actualText = $("#inputArea").val();
    var newText =  actualText + text;
    $("#inputArea").val(newText);
    }

 function deleteText2(text){
    var actualText = $("#inputArea").val();
    var newText =  "";
    $("#inputArea").val(newText);
    }

function deleteText1(text){
    var actualText = $("#inputArea").val();
    var newText =  actualText.substring(0, actualText.length - 1);
    $("#inputArea").val(newText);
    }


