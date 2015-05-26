carApp.controller('ShowCarController', function($scope,$localStorage) {


	   $scope.highchartsNG = {
        options: {
            chart: {
                type: 'line'
            }
        },
       
      
        title: {
            text: 'Monthly Saled Car Number',
            x: -20 //center
        },
        
        xAxis: {
           
            categories: ['Jan', 'Feb', 'Mar', 'Apr']
        },
          yAxis: {
            title: {
                text: 'Sales Number'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
      

           legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0,
          
            
             },
       // loading: false
        series: [],
           
    }
//Highchart ends here


$scope.tv1=1;
$scope.val=0;
   $scope.phase1=false;
	$scope.phase2=false;
	$scope.phase3=false;
	$scope.phase4=false;


	$scope.ph1=true;
		$scope.ph2=true;
		$scope.ph3=true;
		$scope.ph4=true;

		

		

$scope.changeValue=function(abc)
{
	
	$scope.val=abc;
	var abc=$localStorage.allcars;
	var phase =abc[$scope.val].phase;
	

	$scope.name=abc[$scope.val].name;
			$scope.model=abc[$scope.val].model;
			$scope.desc=abc[$scope.val].desc;
			$scope.src=abc[$scope.val].src;
			$scope.mileage=abc[$scope.val].mileage;
			$scope.seat=abc[$scope.val].seat;
			$scope.price=abc[$scope.val].price;
			$scope.jan=abc[$scope.val].jan;
			$scope.feb=abc[$scope.val].feb;
			$scope.mar=abc[$scope.val].mar;
			$scope.apr=abc[$scope.val].apr;


			var y1=parseFloat($scope.jan);
           var y2=parseFloat($scope.feb);
              var y3=parseFloat($scope.mar);
              var y4=parseFloat($scope.apr);
             
              var rnd=[];
              $scope.highchartsNG.series=[];
              rnd.push(y1,y2,y3,y4);
              $scope.highchartsNG.series.push({
            data: rnd 
            })

	
	

	if(phase=="2")
	{
		$scope.ph1=false;
		
	}
	if(phase=="3")
	{
		$scope.ph1=false;
		$scope.ph2=false;
		
	}
	if(phase=="4")
	{
		$scope.ph1=false;
		$scope.ph2=false;
		$scope.ph3=false;
		
	}
	if(phase=="complited")
	{
		$scope.ph1=false;
		$scope.ph2=false;
		$scope.ph3=false;
		$scope.ph4=false;

	}
	 $scope.phs1();
	
}

$scope.initPhase=function()
	{
		$scope.cars=$localStorage.allcars;
	}


	$scope.phs1=function()
	{
	
		$scope.phase1=true;
		$scope.phase2=false;
		$scope.phase3=false;
		$scope.phase4=false;

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
		$scope.phase3=true;
		$scope.phase2=false;
		$scope.phase4=false;
	}
	$scope.phs4=function()
	{
		
		$scope.phase1=false;
		$scope.phase2=false;
		$scope.phase4=true;
		$scope.phase3=false;
	}
	
});