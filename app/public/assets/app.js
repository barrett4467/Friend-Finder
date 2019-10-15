$("#submit").on("click", function(event){
    //stops the refresh so the rest of the js will run
    event.preventDefault();
    var photoUrl = $("#photo").val().toString();

    if($("#name").val() != "" && $("#photo").val() != ""){
        function checkUrl(){
           console.log(photoUrl);
           var checker = photoUrl.includes("png", "jpeg", "jpg", "bmp", "bpg", "gif");
           console.log(checker);
           return checker;
        }
        checkUrl();
        console.log("check: " + checkUrl());
        if (checkUrl()){
            var newFriend = {
                name: $("#name").val().trim(),
                photo: $("#photo").val().trim(),
                scores: [
                    $("input[name='question1']:checked").val(),
                    $("input[name='question2']:checked").val(),
                    $("input[name='question3']:checked").val(),
                    $("input[name='question4']:checked").val(),
                    $("input[name='question5']:checked").val(),
                    $("input[name='question6']:checked").val(),
                    $("input[name='question7']:checked").val(),
                    $("input[name='question8']:checked").val(),
                    $("input[name='question9']:checked").val(),
                    $("input[name='question10']:checked").val(),
                ]
            }
        
            reset();
            function reset(){
            //resets the name and photo fields
            $("#name").val("");
            $("#photo").val("");
            //this resets the question radios to 5 
            $("input[name='question1']:checked").prop("checked", false);
            $("input[name='question1']").val("1").prop("checked", true);
            $("input[name='question2']:checked").prop("checked", false);
            $("input[name='question2']").val("1").prop("checked", true);
            $("input[name='question3']:checked").prop("checked", false);
            $("input[name='question3']").val("1").prop("checked", true);
            $("input[name='question4']:checked").prop("checked", false);
            $("input[name='question4']").val("1").prop("checked", true);
            $("input[name='question5']:checked").prop("checked", false);
            $("input[name='question5']").val("1").prop("checked", true);
            $("input[name='question6']:checked").prop("checked", false);
            $("input[name='question6']").val("1").prop("checked", true);
            $("input[name='question7']:checked").prop("checked", false);
            $("input[name='question7']").val("1").prop("checked", true);
            $("input[name='question8']:checked").prop("checked", false);
            $("input[name='question8']").val("1").prop("checked", true);
            $("input[name='question9']:checked").prop("checked", false);
            $("input[name='question9']").val("1").prop("checked", true);
            $("input[name='question10']:checked").prop("checked", false);
            $("input[name='question10']").val("1").prop("checked", true);
            }
        
            $.post("/api/friends", newFriend, function(data){
                if(data){
                    $("#modalText").text(`You've matched with: ${data.name}`);
                    return $("#modalImage").attr("src", data.photo);
                }
                console.log(data);
            })
        } else {
            $("#modalText").text("Please use an image url ('.png', '.jpeg', '.jpg', '.bmp', '.bpg', or '.gif')");
            $("#modalImage").attr("src", "http://www.clker.com/cliparts/b/a/d/5/1397225922585441843cute%20ghost%20cartoon.jpg");
            return $("#modalImage").width("300px")
            }
    } else {
        $("#modalText").text("Please provide both your name and a link to a photo");
        $("#modalImage").attr("src", "https://cottonbureau.imgix.net/products/originals/31796_GFVt.png?auto=format&bg=0FFF&fit=max&w=300&ixlib=imgixjs-3.4.1");
        }
});