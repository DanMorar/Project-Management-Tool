document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {

	//User constructor function
	function User(name) {
		this.name = name;
	}
	User.prototype = {
		generateId: function() {
			var res = Math.floor((Math.random() * 9999) + 1);
			return this.id = res;
			}
	}
	var user1 = new User("User 1");
	var user2 = new User("User 2");
	var user3 = new User("User 3");
	console.log(user1, user1.generateId());

	//Sprint constructor function
	function Sprint(name) {
		this.name = name;
	}
	Sprint.prototype = {
		generateId: function() {
			var res = Math.floor((Math.random() * 9999) + 1);
			return this.id = res;
			}
	}
	var sprint1 = new Sprint("Sprint 1");
	var sprint2 = new Sprint("Sprint 2");
	var sprint3 = new Sprint("Sprint 3");
	var sprint = [sprint1, sprint2, sprint3];
	console.log(sprint);

	//Comments constructor function
	function Comments(name) {
		this.name = name;
	}
	Comments.prototype = {
		generateId: function() {
			var res = Math.floor((Math.random() * 9999) + 1);
			return this.id = res;
			}
	}
	var comment1 = new Comments("Comment 1");


	//Issue constructor function
	function Issue(options) {
		options = options || {};
		this.type = options.type;
		this.name = options.name;
	}
	Issue.prototype = {
		generateId: function() {
			var res = Math.floor((Math.random() * 9999) + 1);
			return this.id = res;
			}
	}
	var issue1 = new Issue({
		type: "features",
		name: "this is the first issue"
	});


	
}