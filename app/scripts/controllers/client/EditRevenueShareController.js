(function(module) {
	  mifosX.controllers = _.extend(module, {
		  EditRevenueShareController: function(scope, resourceFactory, location,dateFilter,routeParams) {
	        scope.discountTypeDatas = [];
	        scope.statuses = [];
	        scope.start={};
	        scope.partnerGameAttributes = {};
			  scope.revenueData=[];
			 // scope.clientId=routeParams.id;
			  scope.formData={};
	        scope.start.date = new Date();
	        
	        resourceFactory.revenueResourceEdit.get({id : routeParams.id},function(data) {
					//alert(routeParams.id);
				  scope.businessLineDatas=data.businessLineData;
				  scope.mediaCategoryDatas=data.mediaCategoryData;
				  scope.royaltyTypeDatas = data.royaltyTypeData;
				  scope.percentageDatas=data.percentageDatas[0];
				  scope.formData.businessLine=data.percentageDatas[0].businessLine;
				  scope.formData.mediaCategory=data.percentageDatas[0].mediaCategory;
				  scope.formData.revenueShareType=data.percentageDatas[0].revenueShareType;
			  });
	        
	        
	        scope.addPercentage = function(){
	        	scope.counter = scope.counter+1;
	        	scope.revenueData.push({
												game : scope.partnerGameAttributes.game,
												gDate : scope.partnerGameAttributes.gDate,
												playSource : scope.partnerGameAttributes.playSource,
												price : scope.partnerGameAttributes.price,
												overwriteRoyaltyValue : scope.partnerGameAttributes.overwriteRoyaltyValue == undefined ? scope.formData.royaltyValue:scope.partnerGameAttributes.overwriteRoyaltyValue,
												sequence : scope.partnerGameAttributes.sequence=scope.counter 
											});
	        	console.log("now : "+scope.partnerGameAttributes.overwriteRoyaltyValue);
	        	scope.partnerGameAttributes.game = undefined;
				scope.partnerGameAttributes.gDate = undefined;
				scope.partnerGameAttributes.playSource = undefined;
				scope.partnerGameAttributes.price = undefined;
				scope.partnerGameAttributes.overwriteRoyaltyValue = undefined;
	            scope.partnerGameAttributes.sequence  = undefined;
	        };
	        
	        scope.removePercentage = function(index){	
	        	if(scope.counter>=1){
	        		scope.counter = scope.counter-1;
	        	}
	        	scope.revenueData.splice(index,1);
	        	//console.log("Remove Game Media: "+scope.counter);	
	        };
	        
	        scope.submitPercentageData = function(){
				  scope.formData.percentageParams = new Array();
				  if(scope.revenueData.length>0){
		        		for(var i in scope.revenueData){
		        			//console.log("i: "+i);
		        			scope.formData.percentageParams.push({
								startValue : scope.revenueData[i].startValue,
								endValue : scope.revenueData[i].endValue,
								percentage : scope.revenueData[i].percentage,
								locale : "en"
		        			});
		        		}
		        	}
				  scope.formData.locale = 'en';
				  delete this.flat;
				  resourceFactory.revenueResource.save({clientId : routeParams.id}, this.formData, function(data){
					  location.path('/viewclient/'+routeParams.id);
		            });
	        };
	        
	        scope.submitFlatData = function(){
				  scope.formData.percentageParams = new Array();
				  scope.formData.locale = 'en';
				  delete this.startValue;
				  delete this.endValue;
				  delete this.percentage;
				  resourceFactory.revenueResource.save({clientId : routeParams.id}, this.formData, function(data){
					  location.path('/viewclient/'+routeParams.id);
		            });
	        };
	      
	    }
	  });
	  mifosX.ng.application.controller('EditRevenueShareController', ['$scope', 'ResourceFactory', '$location','dateFilter','$routeParams', mifosX.controllers.EditRevenueShareController]).run(function($log) {
	    $log.info("EditRevenueShareController initialized");
	  });
	}(mifosX.controllers || {}));
