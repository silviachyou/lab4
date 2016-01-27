
/*
 * GET project page.
 */
exports.viewProject = function(req, res) { 
  // controller code goes here 
  var name = req.params.name; 
  console.log("The project name is: " + name);
  res.render('project', {				//Will render views/project.handlebars, and pass the JSON to it
    'projectName': name 				//The JSON inclue the variable 'projectName'
  });
};