
				var app=angular.module("carManager", ["ngStorage"]);


	  					
	  				

	  			app.controller("navigation", function ($scope,$localStorage)
	  			{
	   			 	
	   				 
	  			});

	  		
	  		
	  			app.controller("addCar", function ($scope,$localStorage )
	  			{
	  				
	  				$scope.count=0;

	  				$scope.processForm = function()
	  				{

	  					$scope.cars=[];
	  					
	  					car = {name:"", model:"", desc:"",src:"",phase:1,count:0};	
	  					car.name=$scope.name;
	  					$scope.data="";
	  					mycar=[]

						if($localStorage.allcars)
						{
							alert("Yes");
							var falag=0;
							var abc=$localStorage.allcars;
							var i=0;
							for(i; i<abc.length;i++)
							{
								alert(i);
								if(angular.lowercase(abc[i].name)==angular.lowercase($scope.name))
								{
									falag=1;
								}
																
							}
							car.count=i;
							$scope.cars=$localStorage.allcars;
							if(falag==0)
							{

								$scope.cars.push(car);
								$localStorage.allcars=$scope.cars;
							}
							else
							{
								$scope.data="Already Added";
							}								
						}
						else
						{
							alert($scope.cars.length);
							alert("New car");
							alert(car.name);
							
							alert(car.name);
							$scope.cars.push(car);
							alert("no")
							
							$localStorage.allcars=$scope.cars;
						}
		            	$scope.name="";
                	}
 					$scope.data = $localStorage.message;
 					
 					$scope.phaseForm=function(item)
 					{
 						$scope.cars=[];
 						var id = item.target.attributes.id.value;
 						$scope.cars=$localStorage.allcars;
 						alert(id);
 						
 						$scope.cars[id].phase=2;
 						$localStorage.allcars=$scope.cars;
 					}

 					 $scope.resetForm = function ()
    				{
				    	//$scope.person = angular.copy(oriPerson);
				    	$scope.personForm.$setPristine();
				    }
                
                	$scope.myInit=function()
                	{
                		$scope.cars=$localStorage.allcars;
                	}
	  			});

	  			app.controller("myCras", function ($scope,$localStorage)
	  			{

	   				
	  			});

	  			app.controller("searchCar", function ($scope,$localStorage)
	  			{

	  			});