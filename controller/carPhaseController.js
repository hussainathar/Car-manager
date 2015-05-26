carApp.controller('CarPhaseController', function($scope,$localStorage) {
   

		$scope.ph1=true;
		$scope.ph2=true;
		$scope.ph3=true;
		$scope.ph4=true;


	$scope.phs1=function()
	{
	
		$scope.phase1=true;
		$scope.phase2=false;
		$scope.phase3=false;
		$scope.phase4=false;

		var buttonId=$localStorage.lastSelected;		
		var abc=$localStorage.allcars;		
		var phase =abc[buttonId].phase;
		if(phase!="1")
		{
			$scope.name=abc[buttonId].name;
			$scope.model=abc[buttonId].model;
		}

	}
	$scope.phs2=function()
	{
		
		$scope.phase1=false;
			$scope.phase2=true;
			$scope.phase3=false;
			$scope.phase4=false;
	}
	$scope.phs3=function()
	{
		

		$scope.phase1=false;
			$scope.phase2=false;
			$scope.phase3=true;
			$scope.phase4=false;
	}
	$scope.phs4=function()
	{
		
		$scope.phase1=false;
			$scope.phase2=false;
			$scope.phase3=false;
			$scope.phase4=true;
	}

	$scope.initPhase=function()
	{
		//$scope.mycar=[];
		var buttonId=$localStorage.lastSelected;
		
		//$scope.cars=$localStorage.allcars;

		var abc=$localStorage.allcars;
		
		phase =abc[buttonId].phase;

		$scope.ph1=true;
		$scope.ph2=true;
		$scope.ph3=true;
		$scope.ph4=true;

		if(phase=="1")
		{
			$scope.name=abc[buttonId].name;
			$scope.ph1=false;
			$scope.ph2=true;
			$scope.ph3=true;
			$scope.ph4=true;

			$scope.phase1=true;
			$scope.phase2=false;
			$scope.phase3=false;
		}
		else if(phase=="2")
		{
			$scope.ph1=false;
			$scope.ph2=false;
			$scope.ph3=true;
			$scope.ph4=true;
			
			$scope.phase1=false;
			$scope.phase2=true;
			$scope.phase3=false;
		}
		else if(phase=="3")
		{
			
			$scope.ph1=false;
			$scope.ph2=false;
			$scope.ph3=false;
			$scope.ph4=true;

			$scope.phase1=false;
			$scope.phase2=false;
			$scope.phase3=true;
			$scope.phase4=false;
		}
		else if(phase=="4")
		{
			
			$scope.ph1=false;
			$scope.ph2=false;
			$scope.ph3=false;
			$scope.ph4=false;


			$scope.phase1=false;
			$scope.phase2=false;
			$scope.phase3=false;
			$scope.phase4=true;
		}
		else
		{

			$scope.ph1=true;
			$scope.ph2=true;
			$scope.ph3=true;
			$scope.ph4=true;

			$scope.phase1=false;
			$scope.phase2=false;
			$scope.phase3=false;
			$scope.phase4=false;

		}
	}
	$scope.savePhase1=function()           
	{
		
		var buttonId=$localStorage.lastSelected;		
		var abc=$localStorage.allcars;		
		var phase =abc[buttonId].phase;
	

		$scope.name=abc[buttonId].name;
			abc[buttonId].name=$scope.name;
			abc[buttonId].model=$scope.model;
			abc[buttonId].phase=2;
			$localStorage.allcars=abc;
		
		$scope.tab=2;
			$scope.ph1=false;
			$scope.ph2=false;
			$scope.ph3=true;
			$scope.ph4=true;

			$scope.phase1=false;
			$scope.phase2=true;
			$scope.phase3=false;
			$scope.phase4=false;

	}
	$scope.savePhase2=function()           
	{
		$scope.tab=3;
		var buttonId=$localStorage.lastSelected;

		var abc=$localStorage.allcars;		
		var phase =abc[buttonId].phase;
		

		$scope.name=abc[buttonId].name;
		
			//abc[buttonId].model=$scope.model;
			abc[buttonId].desc=$scope.desc;
			//$localStorage.allcars=abc;
		
		



			var file    = document.querySelector('#files').files[0];
                var reader  = new FileReader();
		reader.onloadend = function () {
     		 var src=reader.result;
  		abc[buttonId].src=src;
			abc[buttonId].phase=3;
			$localStorage.allcars=abc;     
   }
if (file) {
           reader.readAsDataURL(file); 
       }  

			$scope.ph1=false;
			$scope.ph2=false;
			$scope.ph3=false;
			$scope.ph4=true;

			$scope.phase1=false;
			$scope.phase2=false;
			$scope.phase3=true;
			$scope.phase4=false;

	}


	$scope.savePhase3=function()           
	{
		
		$scope.tab=4;
		var buttonId=$localStorage.lastSelected;

		var abc=$localStorage.allcars;		
		var phase =abc[buttonId].phase;
	
		$scope.name=abc[buttonId].name;
		
			//abc[buttonId].model=$scope.model;
			abc[buttonId].phase=4;
			abc[buttonId].mileage=$scope.mileage;
			abc[buttonId].seat=$scope.seats;
			abc[buttonId].price=$scope.price;
			
		
		$localStorage.allcars=abc;     




			$scope.ph1=false;
			$scope.ph2=false;
			$scope.ph3=false;
			$scope.ph4=false;

			$scope.phase1=false;
			$scope.phase2=false;
			$scope.phase3=false;
			$scope.phase4=true;

	}

$scope.savePhase4=function()           
	{
		
		$scope.tab=4;
		var buttonId=$localStorage.lastSelected;

		var abc=$localStorage.allcars;		
		var phase =abc[buttonId].phase;
	

		$scope.name=abc[buttonId].name;
		
			//abc[buttonId].model=$scope.model;
			abc[buttonId].phase="complited";
			abc[buttonId].jan=$scope.jan;
			abc[buttonId].feb=$scope.feb;
			abc[buttonId].mar=$scope.mar;
			abc[buttonId].apr=$scope.apr;
			
		
		$localStorage.allcars=abc;     




			$scope.ph1=true;
			$scope.ph2=true;
			$scope.ph3=true;
			$scope.ph4=true;

			$scope.phase1=false;
			$scope.phase2=false;
			$scope.phase3=false;
			$scope.phase4=false;

	}

	
});
 