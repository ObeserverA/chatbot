exports.handler = function(event, context) {
	var myDate = new Date();
	var type = event.messages[0].type;
	var message = event.messages[0].unstructured;
	var id = message.id;
    var text = message.text;
    var timestamp = message.timestamp;
    var answer = "Oh, Crashed!";
    if (text == "Hello") {
        answer = "Hi there, how can I help?";
    }
    else if (text == "Hi") {
    	answer = "Hi, I'm Nana. Nice to meet you!";
    }
    else if (text == "Nice to meet you") {
    	answer = "Nice to meet you too!";
    }
    else if (text == "Nice to meet you") {
    	answer = "Nice to meet you too!";
    }
    else if (text == "Waht's you name?") {
    	answer = "My name is Nana";
    }
    else {
    	answer = "Sorry, I can't understand you now, but I can do better in the future";
    }

    var body = {
			  "messages": [
			    {
			      "type": "response:"+type,
			      "unstructured": {
			        "id":"response:"+id,
			        "text":answer,
			        "timestamp":"response:"+ myDate.toLocaleString()
			      }
			    }
			  ]
			};
    context.done(null, body); 
};