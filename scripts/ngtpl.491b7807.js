angular.module("templates-pages",["pages/home/home.html","pages/land/land.html","pages/projects/build/house.html","pages/signin/signin.html","pages/signup/signup.html"]),angular.module("pages/home/home.html",[]).run(["$templateCache",function(a){a.put("pages/home/home.html",'<h1 clas="page-title">Hello {{me.first_name}} {{me.last_name}}</h1> <table class="table table-striped"> <tr ng-repeat="project in me.projects"> <td>{{project.name}} <td>{{project.description}} <td>{{project.price|currency}} <td> <span ng-repeat="tag in project.tags"> <a href="">{{tag.name}}</a>f </span>   </table>')}]),angular.module("pages/land/land.html",[]).run(["$templateCache",function(a){a.put("pages/land/land.html",'<h1>Start building you house today</h1> <ng-include src="pages/signin/signin.html"></ng-include>')}]),angular.module("pages/projects/build/house.html",[]).run(["$templateCache",function(a){a.put("pages/projects/build/house.html",'<h1>Start my project</h1> <br> <form mr-form class="form-vertical"> <div class="form-group"> <label>To build my house I might need</label> <div class="checkbox"> <label> <input type="checkbox"> Plot </label> </div> <div class="checkbox"> <label> <input type="checkbox"> Arictect </label> </div> <div class="checkbox"> <label> <input type="checkbox"> Construction company </label> </div> <div class="checkbox"> <label> <input type="checkbox"> Mortgage adviser </label> </div> <div class="checkbox"> <label> <input type="checkbox"> foreman </label> </div> </div> <div class="form-group"> <label>Budget</label> <div class="input-group"> <span class="input-group-addon">&euro;</span> <input class="form-control" placeholder="300,000"> </div> <label> <input type="checkbox"> including land price </label> </div> <div class="form-group"> <label>Preferable exectuter location</label> <input class="form-control" placeholder="North-Holland"> <label> <input type="checkbox"> don\'t have preferences </label> </div> <div class="form-group"> <label>What do you think is imprtant to know</label> <textarea class="form-control"></textarea> </div> <div class="form-group"> <label>File that might be important (Kadastr map)</label> <input type="file"> </div> <div class="form-group"> <label> <input type="checkbox"> I understand that that this data will be public. </label> </div> <div class="form-group"> <label>Email (always private)</label> <input type="email" class="form-control" required> </div> <div class="form-group"> <button class="btn btn-primary">Publish</button> <button class="btn">Save draft</button> <button class="btn">Cancel</button> </div> </form>')}]),angular.module("pages/signin/signin.html",[]).run(["$templateCache",function(a){a.put("pages/signin/signin.html",'<form action="/$api$/login" novalidate mr-form="{username: \'test@example.org\', password:\'test\'}"> <div class="mr-msg mr-msg-error alert alert-danger"> Incorrect username or password. </div> <div class="form-group"> <label>Your email</label> <input required ng-model="user.username" class="form-control" type="email" placeholder="bouwkantoor@example.nl"> </div> <div class="form-group"> <label>Password</label> <input required ng-model="user.password" class="form-control" type="password"> </div> <div class="form-group"> <button class="btn">Sign in</button> </div> </form>')}]),angular.module("pages/signup/signup.html",[]).run(["$templateCache",function(a){a.put("pages/signup/signup.html",'<form action="/$api$/users" mr-form="user"> <div class="form-group"> <label>Your email</label> <input required ng-model="user.username" class="form-control" type="email" name="email" placeholder="bouwkantoor@example.nl"> </div> <div class="form-group"> <label>Password</label> <input required name="password" ng-model="user.password" class="form-control" type="password"> </div> <div class="form-group"> <button class="btn">Sign in</button> </div> </form>')}]);