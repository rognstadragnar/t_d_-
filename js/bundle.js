/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// Define the `phonecatApp` module
	var myApp = angular.module("myApp", []);
	// Define the `PhoneListController` controller on the `phonecatApp` module

	myApp.controller("MyController", function($scope, MyFactory){
	    this.todos = MyFactory.getTodos();
	    this.addTodos = function(){
	        if ($scope.todoInput.length > 0){
	            MyFactory.addTodos($scope.todoInput, false);
	        };
	        $scope.todoInput = "";
	    };
	    this.toggleDone = function(idx){
	        MyFactory.toggleDone(idx);
	    };
	    this.deleteDone = function(){
	        MyFactory.deleteDone();
	    };
	    this.deleteAll = function(){
	        MyFactory.deleteAll();
	    };
	    this.countDone = function(){
	        var count = MyFactory.countDone();
	        return count;
	    }
	});

	myApp.factory("MyFactory", function(){

	    var todos = [];

	    var factory = {};

	    factory.getTodos = function(){
	        return todos;
	    };
	    factory.addTodos = function(n, d){
	        todos.push({name: n, done: d});
	        return todos;
	    };
	    factory.toggleDone = function(el){
	        if (el.done === true){
	            el.done = false;
	        } else {
	            el.done = true;
	        }
	    };
	    factory.deleteDone = function(){
	        for (var i = 0; i < todos.length; i++){
	            if(todos[i].done === true){
	                todos.splice(i, 1);
	                i --
	            };

	        };
	    };

	    factory.countDone = function(){
	        var count = todos.length;
	        for (var i = 0; i < todos.length; i++){
	            if(todos[i].done === true){
	                count -= 1;
	            };

	        };
	        return count;
	    };

	    factory.deleteAll = function(){
	        todos.splice(0, todos.length);
	    }

	    return factory;

	});

	myApp.filter("reverse", function(){
	    return function(items){
	        return items.slice().reverse();
	    }
	})


/***/ }
/******/ ]);