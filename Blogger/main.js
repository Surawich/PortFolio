var text;
var topic;
var comment1 ;
var comment2;
function postFunction(){
    text = document.getElementById("text1").value;
    topic = document.getElementById("topic1");
    comment1 = document.getElementById("comment1");
    comment2 = document.getElementById("comment2");

    if(comment1.value != null && topic.value != null && comment2.value == null)
    {
        comment2.innerText = text;
        comment2.value = !null
        console.log("Add Comment");
    }
    else if(topic.value != null && comment1.value == null)
    {
        comment1.innerText = text;
        comment1.value = !null
        console.log("Add Comment");
    }
    else if(topic.value == null)
    {
        //alert("topic is null");
        topic.innerText = text;
        topic.value = !null;
        console.log("Add Topic");
    }
    
    
    
    
    //topic =text;
    //alert(topic);

}
function clearFunction()
{
    text = document.getElementById("text1").value ="";
    topic = document.getElementById("topic1").innerText ="";
    comment1 = document.getElementById("comment1").innerText ="";
    comment2 = document.getElementById("comment2").innerText ="";
    topic = document.getElementById("topic1").value = null;
    comment1 = document.getElementById("comment1").value = null;
    comment2 = document.getElementById("comment2").value = null;
}