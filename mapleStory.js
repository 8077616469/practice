var app = angular.module('mapleStoryApp', ['ui.bootstrap', 'nvd3', 'ngStorage']);

app.controller('mapleStory', function($scope, $log, $http, $rootScope, $localStorage, $sessionStorage) {
	$scope.init = function() {
		$scope.inputVO = {
			dailyAreaOne : "18",
			weeklyAreaOne : "45",
			memoAreaOne : "測試1",
			currentLevelAreaOne : "10",
			currentLevelArcNumberAreaOne : "0",
			
			dailyAreaTwo : "18",
			weeklyAreaTwo : "45",
			memoAreaTwo : "測試2",
			currentLevelAreaTwo : "10",
			currentLevelArcNumberAreaTwo : "0",
			
			dailyAreaThree : "11",
			weeklyAreaThree : "45",
			memoAreaThree : "測試3",
			currentLevelAreaThree : "10",
			currentLevelArcNumberAreaThree : "0",
			
			dailyAreaFour : "9",
			weeklyAreaFour : "45",
			memoAreaFour : "測試4",
			currentLevelAreaFour : "10",
			currentLevelArcNumberAreaFour : "0",
			
			dailyAreaFive : "8",
			weeklyAreaFive : "45",
			memoAreaFive : "測試5",
			currentLevelAreaFive : "10",
			currentLevelArcNumberAreaFive : "0",
			
			dailyAreaSix : "8",
			weeklyAreaSix : "45",
			memoAreaSix : "測試6",
			currentLevelAreaSix : "10",
			currentLevelArcNumberAreaSix : "0"	
		};
		
		$scope.selectOption = [
			{number : "0"},
			{number : "1"},
			{number : "2"},
			{number : "3"},
			{number : "4"},
			{number : "5"},
			{number : "6"},
			{number : "7"},
			{number : "8"},
			{number : "9"},
			{number : "10"},
			{number : "11"},
			{number : "12"},
			{number : "13"},
			{number : "14"},
			{number : "15"},
			{number : "16"},
			{number : "17"},
			{number : "18"},
			{number : "19"},
			{number : "20"}	
		];
				
		$scope.arcExp = [0
		,Math.pow(1,2) + 11
		,Math.pow(2,2) + 11
		,Math.pow(3,2) + 11
		,Math.pow(4,2) + 11
		,Math.pow(5,2) + 11
		,Math.pow(6,2) + 11
		,Math.pow(7,2) + 11
		,Math.pow(8,2) + 11
		,Math.pow(9,2) + 11
		,Math.pow(10,2) + 11
		,Math.pow(11,2) + 11
		,Math.pow(12,2) + 11
		,Math.pow(13,2) + 11
		,Math.pow(14,2) + 11
		,Math.pow(15,2) + 11
		,Math.pow(16,2) + 11
		,Math.pow(17,2) + 11
		,Math.pow(18,2) + 11
		,Math.pow(19,2) + 11
		,Math.pow(20,2) + 11];
		
		$scope.arcExpAccumulation = [0
		,12
		,27
		,47
		,74
		,110
		,157
		,217
		,292
		,384
		,495
		,627
		,782
		,962
		,1169
		,1405
		,1672
		,1972
		,2307
		,2679];
	}
	$scope.init();
	
	$scope.max = function() {
		$scope.inputVO = {
			dailyAreaOne : "18",
			weeklyAreaOne : "45",
			memoAreaOne : "測試1",
			currentLevelAreaOne : "20",
			currentLevelArcNumberAreaOne : "0",
			
			dailyAreaTwo : "18",
			weeklyAreaTwo : "45",
			memoAreaTwo : "測試2",
			currentLevelAreaTwo : "20",
			currentLevelArcNumberAreaTwo : "0",
			
			dailyAreaThree : "11",
			weeklyAreaThree : "45",
			memoAreaThree : "測試3",
			currentLevelAreaThree : "20",
			currentLevelArcNumberAreaThree : "0",
			
			dailyAreaFour : "9",
			weeklyAreaFour : "45",
			memoAreaFour : "測試4",
			currentLevelAreaFour : "20",
			currentLevelArcNumberAreaFour : "0",
			
			dailyAreaFive : "8",
			weeklyAreaFive : "45",
			memoAreaFive : "測試5",
			currentLevelAreaFive : "20",
			currentLevelArcNumberAreaFive : "0",
			
			dailyAreaSix : "8",
			weeklyAreaSix : "45",
			memoAreaSix : "測試6",
			currentLevelAreaSix : "20",
			currentLevelArcNumberAreaSix : "0"	
	}
	$scope.needTime();
	};
	
	$scope.min = function() {
		$scope.inputVO = {
			dailyAreaOne : "0",
			weeklyAreaOne : "0",
			memoAreaOne : "測試1",
			currentLevelAreaOne : "1",
			currentLevelArcNumberAreaOne : "0",
			
			dailyAreaTwo : "0",
			weeklyAreaTwo : "0",
			memoAreaTwo : "測試2",
			currentLevelAreaTwo : "1",
			currentLevelArcNumberAreaTwo : "0",
			
			dailyAreaThree : "0",
			weeklyAreaThree : "0",
			memoAreaThree : "測試3",
			currentLevelAreaThree : "1",
			currentLevelArcNumberAreaThree : "0",
			
			dailyAreaFour : "0",
			weeklyAreaFour : "0",
			memoAreaFour : "測試4",
			currentLevelAreaFour : "1",
			currentLevelArcNumberAreaFour : "0",
			
			dailyAreaFive : "0",
			weeklyAreaFive : "0",
			memoAreaFive : "測試5",
			currentLevelAreaFive : "1",
			currentLevelArcNumberAreaFive : "0",
			
			dailyAreaSix : "0",
			weeklyAreaSix : "0",
			memoAreaSix : "測試6",
			currentLevelAreaSix : "1",
			currentLevelArcNumberAreaSix : "0"	
	}
	$scope.needTime();
	};
	
	$scope.needTime = function () {
			$scope.inputVO.needTimeAreaOne =  (2679 - $scope.arcExpAccumulation[$scope.inputVO.currentLevelAreaOne - 1] - ($scope.inputVO.currentLevelArcNumberAreaOne * 1)) / (($scope.inputVO.dailyAreaOne * 7 + $scope.inputVO.weeklyAreaOne * 1) / 7);
			$scope.inputVO.needTimeAreaTwo =  (2679 - $scope.arcExpAccumulation[$scope.inputVO.currentLevelAreaTwo - 1] - ($scope.inputVO.currentLevelArcNumberAreaTwo * 1)) / (($scope.inputVO.dailyAreaTwo * 7 + $scope.inputVO.weeklyAreaTwo * 1) / 7);
			$scope.inputVO.needTimeAreaThree =  (2679 - $scope.arcExpAccumulation[$scope.inputVO.currentLevelAreaThree - 1] - ($scope.inputVO.currentLevelArcNumberAreaThree * 1)) / (($scope.inputVO.dailyAreaThree * 7 + $scope.inputVO.weeklyAreaThree * 1) / 7);
			$scope.inputVO.needTimeAreaFour =  (2679 - $scope.arcExpAccumulation[$scope.inputVO.currentLevelAreaFour - 1] - ($scope.inputVO.currentLevelArcNumberAreaFour * 1)) / (($scope.inputVO.dailyAreaFour * 7 + $scope.inputVO.weeklyAreaFour * 1) / 7);
			$scope.inputVO.needTimeAreaFive =  (2679 - $scope.arcExpAccumulation[$scope.inputVO.currentLevelAreaFive - 1] - ($scope.inputVO.currentLevelArcNumberAreaFive * 1)) / (($scope.inputVO.dailyAreaFive * 7 + $scope.inputVO.weeklyAreaFive * 1) / 7);
			$scope.inputVO.needTimeAreaSix =  (2679 - $scope.arcExpAccumulation[$scope.inputVO.currentLevelAreaSix - 1] - ($scope.inputVO.currentLevelArcNumberAreaSix * 1)) / (($scope.inputVO.dailyAreaSix * 7 + $scope.inputVO.weeklyAreaSix * 1) / 7);
}
	$scope.needTime();
	
});