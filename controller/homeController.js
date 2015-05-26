carApp.controller("HomeController", function($scope,$localStorage) {
   $scope.names=[];


	$scope.value=1;
   	$scope.v=0;
   	$scope.show=function(vl)
   	{
   		$scope.v=vl;
   		
   	}
	  				$scope.processForm = function()
	  				{

	  					
	  					$scope.cars=[];
	  					car = {name:"", model:"", desc:"",src:"image/notfound.png",phase:1,count:0,mileage:null,seat:null,price:null,jan:null,feb:null,mar:null,apr:null};	
	  					car.name=$scope.name;
	  					$scope.data="";
	  					mycar=[]

						if($localStorage.allcars)
						{
							
							var falag=0;
							var abc=$localStorage.allcars;
							var i=0;
							for(i; i<abc.length;i++)
							{
								
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
							
							
							$scope.cars.push(car);
												
							$localStorage.allcars=$scope.cars;
						}
		            	$scope.name="";
                	}
 					$scope.phaseForm=function(item)
 					{
 						$scope.cars=[];
 						var id = item.target.attributes.id.value;
 						$scope.cars=$localStorage.allcars;
 						$localStorage.lastSelected=id;
 						//$scope.cars[id].phase=1;

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


               $scope.searchFilter = function (cars) {
    var keyword = new RegExp($scope.srchcar, 'i');
    return !$scope.srchcar || keyword.test(cars.name);
};
       
$scope.changeValue= function(){
	$scope.data2="";
if($scope.srchcar!="")
$scope.value=0;
else
$scope.value=1;

};

$scope.searchCar=function(val)
{
	
	

if($localStorage.allcars)
	{
		var falag=0;
		var abc=$localStorage.allcars;
		var i=0;
		for(i; i<abc.length;i++)
		{
		
			if(angular.lowercase(abc[i].name)==angular.lowercase(val))
			{
				falag=1;

			}
											
		}
		
		
		if(falag==0)
		{
			$scope.data2="Car not found !!";
			$scope.value=1;
			
		}
		else
		{
			$scope.value=0;
		}								
	}

}
             
});