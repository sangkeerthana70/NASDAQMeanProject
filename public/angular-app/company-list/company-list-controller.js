/*global  angular*/
angular.module('meanNASDAQ').controller('CompaniesController', CompaniesController);

function CompaniesController($routeParams,companyDataFactory) {
    console.log("CompaniesController");
    var vm = this;
    vm.title = 'MEAN NASDAQ App';
    var offset = Number.parseInt($routeParams.offset);
    var page = $routeParams.page;
    var count = Number.parseInt($routeParams.count);

    if (page == undefined) {
        offset = 0;
    }
    else if (page == 'first') {
        offset = 0;
    }
    else if (page == 'previous') {
        offset -= 15;
    }
    else if (page == 'next') {
        offset += 15;
    }
    else if (page == 'next') {
        offset += 15;
    }
    else if (page == 'last') {
        offset = count - 14;
    }

    vm.count = count;
    vm.offset = offset;
    vm.currentPage = Math.round((vm.offset/15) + 1);
    vm.pageCnt = Math.round(vm.count/15);
    if ((vm.offset + 15) < vm.count) {
        vm.more = true;
    }

    console.log("offset ",offset);
    console.log("count ",vm.count);
    console.log("pageCnt ",vm.pageCnt);
    console.log("currentPage ",vm.currentPage);
    console.log("more ",vm.more);
    
    companyDataFactory.companyList(offset).then(function(response) {
        vm.companies = response.data;
        //console.log(vm.companies);
        if (vm.offset == undefined) {
            vm.offset = 0;
        }
        vm.offset = parseInt(offset);

        if (offset == 0) {
            companyDataFactory.companyCount().then(function(response){
                console.log(response.data);
                vm.count = response.data;
                vm.pageCnt = Math.round(vm.count/15);
                vm.currentPage = Math.round((vm.offset/15) + 1);
                console.log("count = ",vm.count);
                if (((vm.offset * 15) + 15) < vm.count) {
                    vm.more = true;
                }
            });
        }
    });
}