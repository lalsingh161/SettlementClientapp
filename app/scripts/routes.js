(function(mifosX) {
	var defineRoutes = function($routeProvider, $locationProvider) {
		$routeProvider.when('/', {
			templateUrl : 'views/start.html'
		}).when('/login', {
			templateUrl : 'views/login.html'
		}).when('/home', {
			templateUrl : 'views/home.html'
		}).when('/products', {
			templateUrl : 'views/products/products.html'
		}).when('/templates', {
			templateUrl : 'views/templates/templates.html'
		}).when('/createtemplate', {
			templateUrl : 'views/templates/createtemplate.html'
		}).when('/viewtemplate/:id', {
			templateUrl : 'views/templates/viewtemplate.html'
		}).when('/edittemplate/:id', {
			templateUrl : 'views/templates/edittemplate.html'
		}).when('/createloanproduct', {
			templateUrl : 'views/products/createloanproduct.html'
		}).when('/editloanproduct/:id', {
			templateUrl : 'views/products/editloanproduct.html'
		}).when('/createsavingproduct', {
			templateUrl : 'views/products/createsavingproduct.html'
		}).when('/editsavingproduct/:id', {
			templateUrl : 'views/products/editsavingproduct.html'
		}).when('/admin/viewrole/:id', {
			templateUrl : 'views/administration/viewrole.html'
		}).when('/admin/roles', {
			templateUrl : 'views/administration/roles.html'
		}).when('/admin/role/:id/edit', {
			templateUrl : 'views/administration/editpermissions.html'
		}).when('/admin/addrole', {
			templateUrl : 'views/administration/addrole.html'
		}).when('/admin/viewmctasks', {
			templateUrl : 'views/administration/makerchecker.html'
		}).when('/admin/users', {
			templateUrl : 'views/administration/users.html'
		}).when('/clients', {
			templateUrl : 'views/clients/clients.html'
		}).when('/createclient', {
			templateUrl : 'views/clients/createclient.html'
		}).when('/editclient/:id', {
			templateUrl : 'views/clients/editclient.html'
		}).when('/viewclient/:id', {
			templateUrl : 'views/clients/viewclient.html'
		}).when('/client/:id/:action', {
			templateUrl : 'views/clients/clientactions.html'
		}).when('/transferclient/:id', {
			templateUrl : 'views/clients/transferclient.html'
		}).when('/addclientdocument/:clientId', {
			templateUrl : 'views/clients/addclientdocument.html'
		}).when('/addclientidentifier/:clientId', {
			templateUrl : 'views/clients/addclientidentifier.html'
		}).when('/addclientidentifierdocument/:clientId/:resourceId', {
			templateUrl : 'views/clients/addclientidentifierdocument.html'
		}).when('/newclientloanaccount/:clientId', {
			templateUrl : 'views/loans/newloanaccount.html'
		}).when('/newgrouploanaccount/:groupId', {
			templateUrl : 'views/loans/newloanaccount.html'
		}).when('/newjlgloanaccount/:groupId', {
			templateUrl : 'views/loans/newjlgloanaccount.html'
		}).when('/viewloanaccount/:id', {
			templateUrl : 'views/loans/viewloanaccountdetails.html'
		}).when('/loanaccount/:id/:action', {
			templateUrl : 'views/loans/loanaccountactions.html'
		}).when('/loanaccountcharge/:id/:action/:chargeId', {
			templateUrl : 'views/loans/loanaccountactions.html'
		}).when('/editloanaccount/:id', {
			templateUrl : 'views/loans/editloanaccount.html'
		}).when('/addloancharge/:id', {
			templateUrl : 'views/loans/addloancharge.html'
		}).when('/addcollateral/:id', {
			templateUrl : 'views/loans/addloancollateral.html'
		}).when('/loan/:loanId/editcollateral/:id', {
			templateUrl : 'views/loans/editloancollateral.html'
		}).when('/loan/:loanId/viewcollateral/:id', {
			templateUrl : 'views/loans/viewloancollateral.html'
		}).when('/loan/:loanId/viewcharge/:id', {
			templateUrl : 'views/loans/viewloancharge.html'
		}).when('/loan/:loanId/editcharge/:id', {
			templateUrl : 'views/loans/editloancharge.html'
		}).when('/assignloanofficer/:id', {
			templateUrl : 'views/loans/assignloanofficer.html'
		}).when('/addloandocument/:loanId', {
			templateUrl : 'views/loans/addloandocument.html'
		}).when('/organization', {
			templateUrl : 'views/administration/organization.html'
		}).when('/system', {
			templateUrl : 'views/administration/system.html'
		}).when('/mappingconfig', {
			templateUrl : 'views/system/mappingconfiguration.html'
		}).when('/loanproducts', {
			templateUrl : 'views/products/loanproducts.html'
		}).when('/charges', {
			templateUrl : 'views/products/charges.html'
		}).when('/viewcharge/:id', {
			templateUrl : 'views/products/viewcharge.html'
		}).when('/savingproducts', {
			templateUrl : 'views/products/savingproducts.html'
		}).when('/viewsavingproduct/:id', {
			templateUrl : 'views/products/viewsavingproduct.html'
		}).when('/offices', {
			templateUrl : 'views/organization/offices.html'
		}).when('/createoffice', {
			templateUrl : 'views/organization/createoffice.html'
		}).when('/viewoffice/:id', {
			templateUrl : 'views/organization/viewoffice.html'
		}).when('/editoffice/:id', {
			templateUrl : 'views/organization/editoffice.html'
		}).when('/tasks', {
			templateUrl : 'views/tasks.html'
		}).when('/currconfig', {
			templateUrl : 'views/organization/currencyconfig.html'
		}).when('/search/:query', {
			templateUrl : 'views/search/glresults.html'
		}).when('/viewloanproduct/:id', {
			templateUrl : 'views/products/viewloanproduct.html'
		}).when('/usersetting', {
			templateUrl : 'views/administration/usersettings.html'
		}).when('/users/', {
			templateUrl : 'views/administration/userslist.html'
		}).when('/createuser/', {
			templateUrl : 'views/administration/createuser.html'
		}).when('/viewuser/:id', {
			templateUrl : 'views/administration/viewuser.html'
		}).when('/edituser/:id', {
			templateUrl : 'views/administration/edituser.html'
		}).when('/employees', {
			templateUrl : 'views/organization/employees.html'
		}).when('/viewemployee/:id', {
			templateUrl : 'views/organization/viewemployee.html'
		}).when('/editemployee/:id', {
			templateUrl : 'views/organization/editemployee.html'
		}).when('/createemployee/', {
			templateUrl : 'views/organization/createemployee.html'
		}).when('/managefunds/', {
			templateUrl : 'views/organization/managefunds.html'
		}).when('/nav/offices', {
			templateUrl : 'views/navigation/offices.html'
		}).when('/accounting', {
			templateUrl : 'views/accounting/accounting.html'
		}).when('/accounting_coa', {
			templateUrl : 'views/accounting/accounting_coa.html'
		}).when('/createglaccount', {
			templateUrl : 'views/accounting/createglaccounting.html'
		}).when('/viewglaccount/:id', {
			templateUrl : 'views/accounting/viewglaccounting.html'
		}).when('/editglaccount/:id', {
			templateUrl : 'views/accounting/editglaccounting.html'
		}).when('/freqposting', {
			templateUrl : 'views/accounting/freqposting.html'
		}).when('/viewtransactions/:transactionId', {
			templateUrl : 'views/accounting/view_transactions.html'
		}).when('/journalentry', {
			templateUrl : 'views/accounting/journalentry_posting.html'
		}).when('/searchtransaction', {
			templateUrl : 'views/accounting/search_transaction.html'
		}).when('/accounts_closure', {
			templateUrl : 'views/accounting/accounts_closure.html'
		}).when('/view_close_accounting/:id', {
			templateUrl : 'views/accounting/view_close_accounting.html'
		}).when('/accounting_rules', {
			templateUrl : 'views/accounting/accounting_rules.html'
		}).when('/viewaccrule/:id', {
			templateUrl : 'views/accounting/view_acc_rule.html'
		}).when('/add_accrule', {
			templateUrl : 'views/accounting/add_acc_rule.html'
		}).when('/editaccrule/:id', {
			templateUrl : 'views/accounting/edit_acc_rule.html'
		}).when('/viewcode/:id', {
			templateUrl : 'views/system/viewcode.html'
		}).when('/datatables', {
			templateUrl : 'views/system/datatables.html'
		}).when('/viewdatatable/:tableName', {
			templateUrl : 'views/system/viewdatatable.html'
		}).when('/createdatatable', {
			templateUrl : 'views/system/createdatatable.html'
		}).when('/editdatatable/:tableName', {
			templateUrl : 'views/system/editdatatable.html'
		}).when('/makedatatableentry/:tableName/:entityId', {
			templateUrl : 'views/system/makedatatableentry.html'
		}).when('/viewdatatableentry/:tableName/:entityId/:resourceId', {
			templateUrl : 'views/system/viewdatatableentry.html'
		}).when('/addcode', {
			templateUrl : 'views/system/addcode.html'
		}).when('/jobs', {
			templateUrl : 'views/system/schedulerjobs.html'
		}).when('/viewschedulerjob/:id', {
			templateUrl : 'views/system/viewschedulerjob.html'
		}).when('/editschedulerjob/:id', {
			templateUrl : 'views/system/editschedulerjob.html'
		}).when('/editjobparameters/:id', {
			templateUrl : 'views/system/editjobparameters.html'
		}).when('/viewhistory/:id', {
			templateUrl : 'views/system/viewschedulerjobhistory.html'
		}).when('/codes', {
			templateUrl : 'views/system/codes.html'
		}).when('/editcode/:id', {
			templateUrl : 'views/system/editcode.html'
		}).when('/reports', {
			templateUrl : 'views/system/reports.html'
		}).when('/system/viewreport/:id', {
			templateUrl : 'views/system/viewreport.html'
		}).when('/createreport', {
			templateUrl : 'views/system/createreport.html'
		}).when('/editreport/:id', {
			templateUrl : 'views/system/editreport.html'
		}).when('/holidays', {
			templateUrl : 'views/organization/holidays.html'
		}).when('/createholiday', {
			templateUrl : 'views/organization/createholiday.html'
		}).when('/viewholiday/:id', {
			templateUrl : 'views/organization/viewholiday.html'
		}).when('/reports/:type', {
			templateUrl : 'views/reports/view_reports.html'
		}).when('/run_report/:name', {
			templateUrl : 'views/reports/run_reports.html'
		}).when('/new_client_saving_application/:clientId', {
			templateUrl : 'views/savings/new_saving_account_application.html'
		}).when('/new_group_saving_application/:groupId', {
			templateUrl : 'views/savings/new_saving_account_application.html'
		}).when('/new_group_saving_application/:groupId/:centerEntity', {
			templateUrl : 'views/savings/new_saving_account_application.html'
		}).when('/new_jlg_saving_application/:groupId/:clientId', {
			templateUrl : 'views/savings/new_saving_account_application.html'
		}).when('/viewsavingaccount/:id', {
			templateUrl : 'views/savings/view_saving_account_details.html'
		}).when('/groups', {
			templateUrl : 'views/groups/groups.html'
		}).when('/creategroup', {
			templateUrl : 'views/groups/creategroup.html'
		}).when('/attachmeeting/:id/:entityType', {
			templateUrl : 'views/groups/attachmeeting.html'
		}).when('/editsavingaccount/:id', {
			templateUrl : 'views/savings/edit_saving_account_application.html'
		}).when('/savingaccount/:id/:action', {
			templateUrl : 'views/savings/saving_account_actions.html'
		}).when('/savingaccountcharge/:id/:action/:chargeId', {
			templateUrl : 'views/savings/saving_account_actions.html'
		}).when('/savingaccounts/:id/charges', {
			templateUrl : 'views/savings/addnewsavingscharge.html'
		}).when('/viewaccounttransfers/:id', {
			templateUrl : 'views/accounttransfers/view_accounttransfer.html'
		}).when('/accounttransfers/:accountType/:accountId', {
			templateUrl : 'views/accounttransfers/make_accounttransfer.html'
		}).when('/viewsavingtrxn/:accountId/trxnId/:id', {
			templateUrl : 'views/savings/view_saving_transaction.html'
		}).when('/viewgroup/:id', {
			templateUrl : 'views/groups/viewgroup.html'
		}).when('/editgroup/:id', {
			templateUrl : 'views/groups/editgroup.html'
		}).when('/addmember', {
			templateUrl : 'views/groups/addmember.html'
		}).when('/groupattendance', {
			templateUrl : 'views/groups/groupattendance.html'
		}).when('/closegroup/:id', {
			templateUrl : 'views/groups/closegroup.html'
		}).when('/addrole/:id', {
			templateUrl : 'views/groups/addrole.html'
		}).when('/membermanage/:id', {
			templateUrl : 'views/groups/membermanage.html'
		}).when('/transferclients/:id', {
			templateUrl : 'views/groups/transferclients.html'
		}).when('/centers', {
			templateUrl : 'views/centers/centers.html'
		}).when('/viewcenter/:id', {
			templateUrl : 'views/centers/viewcenter.html'
		}).when('/createcenter', {
			templateUrl : 'views/centers/createcenter.html'
		}).when('/editcenter/:id', {
			templateUrl : 'views/centers/editcenter.html'
		}).when('/closecenter/:id', {
			templateUrl : 'views/centers/closecenter.html'
		}).when('/addgroup', {
			templateUrl : 'views/centers/addgroup.html'
		}).when('/centerattendance', {
			templateUrl : 'views/centers/centerattendance.html'
		}).when('/createcharge', {
			templateUrl : 'views/products/createcharge.html'
		}).when('/editcharge/:id', {
			templateUrl : 'views/products/editcharge.html'
		}).when('/entercollectionsheet', {
			templateUrl : 'views/collection/entercollectionsheet.html'
		}).when('/assignstaff/:id/:entityType', {
			templateUrl : 'views/groups/assignstaff.html'
		}).when('/global', {
			templateUrl : 'views/administration/global.html'
		}).when('/productmix', {
			templateUrl : 'views/products/productmix/productmix.html'
		}).when('/viewproductmix/:id', {
			templateUrl : 'views/products/productmix/viewproductmix.html'
		}).when('/editproductmix/:id', {
			templateUrl : 'views/products/productmix/editproductmix.html'
		}).when('/addproductmix', {
			templateUrl : 'views/products/productmix/addproductmix.html'
		}).when('/bulkloan', {
			templateUrl : 'views/organization/bulkloan.html'
		}).when('/audit', {
			templateUrl : 'views/system/audit.html'
		}).when('/viewaudit/:id', {
			templateUrl : 'views/system/viewaudit.html'
		}).when('/createclosure', {
			templateUrl : 'views/accounting/createclosure.html'
		}).when('/guarantor/:id', {
			templateUrl : 'views/loans/guarantor.html'
		}).when('/editguarantor/:id/:loanId', {
			templateUrl : 'views/loans/editguarantor.html'
		}).when('/contract', {
			templateUrl : 'views/organization/contract.html'
		}).when('/createContract/', {
			templateUrl : 'views/organization/createContract.html'
		}).when('/viewContract/:id', {
			templateUrl : 'views/organization/viewContract.html'
		}).when('/editcontract/:id', {
			templateUrl : 'views/organization/editContract.html'
		})

		.when('/services', {
			templateUrl : 'views/organization/services.html'
		}).when('/createservice', {
			templateUrl : 'views/organization/createservice.html'
		}).when('/viewservice/:id', {
			templateUrl : 'views/organization/viewservice.html'
		}).when('/editservice/:id', {
			templateUrl : 'views/organization/editservice.html'
		}).when('/assignedtickets', {
			templateUrl : 'views/tickets/assignedtickets.html'
		}).when('/clientinvoice/:id', {
			templateUrl : 'views/clients/clientinvoice.html'
		}).when('/statement/:id', {
			templateUrl : 'views/clients/statement.html'
		}).when('/billingorder/:id', {
			templateUrl : 'views/clients/viewclient.html'
		}).when('/billmaster/:id', {
			templateUrl : 'views/clients/viewclient.html'
		}).when('/plans', {
			templateUrl : 'views/organization/plans.html'
		}).when('/createPlan', {
			templateUrl : 'views/organization/createPlan.html'
		}).when('/viewplan/:id', {
			templateUrl : 'views/organization/viewplan.html'
		}).when('/editplan/:id', {
			templateUrl : 'views/organization/editplan.html'
		})

		.when('/neworder/:id', {
			templateUrl : 'views/clients/createorder.html'
		}).when('/hardwareswap/:id/:clientId/:orderId', {
			templateUrl : 'views/clients/hardwareSwap.html'
		}).when('/prices/:id', {
			templateUrl : 'views/organization/prices.html'
		}).when('/createprice/:id', {
			templateUrl : 'views/organization/createprice.html'
		}).when('/viewprice/:id/:planId', {
			templateUrl : 'views/organization/viewprice.html'
		}).when('/editprice/:id', {
			templateUrl : 'views/organization/editprice.html'
		}).when('/media', {
			templateUrl : 'views/organization/media.html'
		}).when('/createMedia', {
			templateUrl : 'views/organization/createmedia.html'
		}).when('/viewmedia/:id', {
			templateUrl : 'views/organization/viewmedia.html'
		}).when('/editmedia/:id', {
			templateUrl : 'views/organization/editmedia.html'
		}).when('/editgame/:id', {
			templateUrl : 'views/organization/editgame.html'
		}).when('/inventory', {
			templateUrl : 'views/inventory/inventory.html'
		}).when('/createitem', {
			templateUrl : 'views/inventory/createitem.html'
		}).when('/importing', {
			templateUrl : 'views/import/import.html'
		}).when('/uploadFile', {
			templateUrl : 'views/import/uploadfile.html'
		}).when('/viewimportfile/:id', {
			templateUrl : 'views/import/viewimport.html'
		}).when('/vieworder/:id/:clientId', {
			templateUrl : 'views/clients/vieworder.html'
		}).when('/disconnectOrder/:id', {
			templateUrl : 'views/clients/disconnectrorder.html'
		}).when('/renewalOrder/:id/:clientId', {
			templateUrl : 'views/clients/renewalorder.html'
		}).when('/voucherpins', {
			templateUrl : 'views/organization/voucherpins.html'
		}).when('/createvoucherpin', {
			templateUrl : 'views/organization/createvoucherpin.html'
		}).when('/discounts', {
			templateUrl : 'views/organization/discounts.html'
		}).when('/creatediscounts', {
			templateUrl : 'views/organization/creatediscounts.html'
		}).when('/viewdiscounts/:id', {
			templateUrl : 'views/organization/viewdiscounts.html'
		}).when('/editdiscounts/:id', {
			templateUrl : 'views/organization/editdiscounts.html'
		}).when('/prospects', {
			templateUrl : 'views/prospects/prospects.html'
		}).when('/viewprospects/:id', {
			templateUrl : 'views/prospects/viewprospects.html'
		}).when('/createprospects', {
			templateUrl : 'views/prospects/createprospects.html'
		}).when('/cancelprospects/:id', {
			templateUrl : 'views/prospects/cancelprospects.html'
		}).when('/editprospects/:id', {
			templateUrl : 'views/prospects/editprospects.html'
		}).when('/followprospects/:id', {
			templateUrl : 'views/prospects/followprospects.html'
		})

		.when('/currencydetails', {
			templateUrl : 'views/organization/currencydetails.html'
		}).when('/createcurrencydetails', {
			templateUrl : 'views/organization/createcurrencydetails.html'
		}).when('/viewcurrencydetails/:id', {
			templateUrl : 'views/organization/viewcurrencydetails.html'
		}).when('/editcurrencydetails/:id', {
			templateUrl : 'views/organization/editcurrencydetails.html'
		}).when('/adjustments/:id', {
			templateUrl : 'views/clients/adjustments.html'
		}).when('/payments/:id', {
			templateUrl : 'views/clients/payments.html'
		})

		.when('/message', {
			templateUrl : 'views/organization/message.html'
		}).when('/createMessage', {
			templateUrl : 'views/organization/createMessage.html'
		}).when('/viewmessage/:id', {
			templateUrl : 'views/organization/viewmessage.html'
		}).when('/editmessage/:id', {
			templateUrl : 'views/organization/editmessage.html'
		}).when('/event', {
			templateUrl : 'views/organization/event.html'
		}).when('/createEvent', {
			templateUrl : 'views/organization/createEvent.html'
		}).when('/viewEvent/:id', {
			templateUrl : 'views/organization/viewEvent.html'
		}).when('/editEvent/:id', {
			templateUrl : 'views/organization/editEvent.html'
		}).when('/addPrice/:id', {
			templateUrl : 'views/organization/addPrice.html'
		}).when('/viewPrice/:id', {
			templateUrl : 'views/organization/viewPrice.html'
		}).when('/viewEventPrices/:id', {
			templateUrl : 'views/organization/viewEventPrices.html'
		}).when('/editEventPrice/:id', {
			templateUrl : 'views/organization/editEventPrice.html'
		}).when('/regions', {
			templateUrl : 'views/organization/regions.html'
		}).when('/createregions', {
			templateUrl : 'views/organization/createRegions.html'
		}).when('/viewregions/:id', {
			templateUrl : 'views/organization/viewregions.html'
		}).when('/editRegions/:id', {
			templateUrl : 'views/organization/editRegions.html'
		}).when('/newTicket/:id', {
			templateUrl : 'views/clients/newTicket.html'
		}).when('/tickets/:id', {
			templateUrl : 'views/clients/tickets.html'
		}).when('/viewTicket/:clientId/:id', {
			templateUrl : 'views/clients/viewTicket.html'
		}).when('/editTicket/:clientId/:id', {
			templateUrl : 'views/clients/editTicket.html'
		}).when('/chargecode', {
			templateUrl : 'views/organization/chargecode.html'
		}).when('/createchargecode/', {
			templateUrl : 'views/organization/createchargecode.html'
		}).when('/viewchargecode/:id', {
			templateUrl : 'views/organization/viewchargecode.html'
		}).when('/editchargecode/:id', {
			templateUrl : 'views/organization/editchargecode.html'
		}).when('/taxmapping/:chargeCode/:chargeId', {
			templateUrl : 'views/organization/taxmapping.html'
		}).when('/createtaxmapping/:chargeCode', {
			templateUrl : 'views/organization/createtaxmapping.html'
		}).when('/viewtaxmapping/:id', {
			templateUrl : 'views/organization/viewtaxmapping.html'
		}).when('/edittaxmapping/:id', {
			templateUrl : 'views/organization/edittaxmapping.html'
		}).when('/inventory', {
			templateUrl : 'views/inventory/inventory.html'
		}).when('/createitem', {
			templateUrl : 'views/inventory/createitem.html'
		}).when('/viewitemdetails/:id', {
			templateUrl : 'views/inventory/viewitemdetails.html'
		}).when('/addgrndetails', {
			templateUrl : 'views/inventory/addgrndetails.html'
		}).when('/viewgrndetails', {
			templateUrl : 'views/inventory/viewgrndetails.html'
		}).when('/viewitem/:id', {
			templateUrl : 'views/inventory/viewitem.html'
		}).when('/edititem/:id', {
			templateUrl : 'views/inventory/edititem.html'
		}).when('/viewgrn/:id', {
			templateUrl : 'views/inventory/viewgrn.html'
		}).when('/createitemdetails/:id', {
			templateUrl : 'views/inventory/createitemdetails.html'
		}).when('/createmrn', {
			templateUrl : 'views/inventory/createmrn.html'
		})

		.when('/viewmrn/:id', {
			templateUrl : 'views/inventory/viewmrn.html'
		}).when('/viewmovedmrn/:id', {
			templateUrl : 'views/inventory/viewmovedmrn.html'
		}).when('/movemrn/', {
			templateUrl : 'views/inventory/movemrn.html'
		}).when('/createsupplier', {
			templateUrl : 'views/inventory/createsupplier.html'
		}).when('/viewfinancialtran/:transactionId/:clientId', {
			templateUrl : 'views/clients/viewfinancialtransaction.html'
		}).when('/addownedhardware/:id', {
			templateUrl : 'views/clients/addownedhardware.html'
		}).when('/addonetimesale/:id', {
			templateUrl : 'views/clients/addonetimesale.html'
		}).when('/viewonetimesale/:id/:clientId', {
			templateUrl : 'views/clients/viewonetimesale.html'
		}).when('/allocatehardwareonetimesale/:id/:clientId', {
			templateUrl : 'views/clients/allocatehardwareonetimesale.html'
		}).when('/event', {
			templateUrl : 'views/organization/event.html'
		}).when('/eventorder/:id', {
			templateUrl : 'views/eventorder/eventorder.html'
		}).when('/createEvent', {
			templateUrl : 'views/organization/createEvent.html'
		}).when('/viewEvent/:id', {
			templateUrl : 'views/organization/viewEvent.html'
		}).when('/editEvent/:id', {
			templateUrl : 'views/organization/editEvent.html'
		}).when('/addEventPrice/:id', {
			templateUrl : 'views/organization/addEventPrice.html'
		}).when('/viewPrice/:id', {
			templateUrl : 'views/organization/viewPrice.html'
		}).when('/viewEventPrice/:id', {
			templateUrl : 'views/organization/viewEventPrice.html'
		}).when('/editEventPrice/:id', {
			templateUrl : 'views/organization/editEventPrice.html'
		}).when('/newTicket/:id', {
			templateUrl : 'views/clients/newTicket.html'
		}).when('/tickets/:id', {
			templateUrl : 'views/clients/tickets.html'
		}).when('/viewTicket/:clientId/:id', {
			templateUrl : 'views/clients/viewTicket.html'
		}).when('/editTicket/:clientId/:id', {
			templateUrl : 'views/clients/editTicket.html'
		}).when('/closeTicket/:clientId/:id', {
			templateUrl : 'views/clients/closeTicket.html'
		}).when('/editAddress/:id', {
			templateUrl : 'views/clients/editAddress.html'
		}).when('/viewstatement/:id', {
			templateUrl : 'views/clients/viewstatement.html'
		}).when('/osdMessage/:id', {
			templateUrl : 'views/clients/osdMessage.html'
		}).when('/createhardwareplanmapping', {
			templateUrl : 'views/system/createhardwareplanmapping.html'
		}).when('/viewhardwareplanmapping/:id', {
			templateUrl : 'views/system/viewhardwareplanmapping.html'
		}).when('/edithardwareplanmapping/:id', {
			templateUrl : 'views/system/edithardwareplanmapping.html'
		}).when('/association/:id', {
			templateUrl : 'views/clients/association.html'
		}).when('/viewAssociation/:clientId/:id', {
			templateUrl : 'views/clients/viewAssociation.html'
		}).when('/editAssociation/:clientId/:id', {
			templateUrl : 'views/clients/editAssociation.html'
		}).when('/viewhardwareplanmapping/:id', {
			templateUrl : 'views/system/viewhardwareplanmapping.html'
		}).when('/createServiceMapping', {
			templateUrl : 'views/system/createServiceMapping.html'
		}).when('/viewServiceMapping/:id', {
			templateUrl : 'views/system/viewServiceMapping.html'
		}).when('/editServiceMapping/:id', {
			templateUrl : 'views/system/editServiceMapping.html'
		}).when('/game', {
			templateUrl : 'views/administration/game.html'
		}).when('/mapgamedetails', {
			templateUrl : 'views/settlement/mapgamedetails.html'
		}).when('/editmapgamedetails/:id', {
			templateUrl : 'views/settlement/editmapgamedetails.html'
		}).when('/partnergame', {
			templateUrl : 'views/settlement/partnergame.html'
		}).when('/editpartnergame/:id', {
			templateUrl : 'views/settlement/editpartnergame.html'
		}).when('/createpartneragreement', {
			templateUrl : 'views/settlement/createpartneragreement.html'
		}).when('/viewpartneragreement/:id', {
			templateUrl : 'views/settlement/viewpartneragreement.html'
		}).when('/editPartnerAgreement/:id', {
			templateUrl : 'views/settlement/editpartneragreement.html'
		}).when('/addoperatordeduction/:id', {
			templateUrl : 'views/settlement/addoperatordeduction.html'
		}).when('/createdeductionmaster', {
			templateUrl : 'views/deductionmaster/createdeductionmaster.html'
		}).when('/payinvoice/:id', {
			templateUrl : 'views/clients/payInvoice.html'
		}).when('/editdeductionmaster/:id', {
			templateUrl : 'views/deductionmaster/editdeductionmaster.html'
		}).when('/gameevent/:id', {
			templateUrl : 'views/settlement/gameevent.html'
		}).when('/creategameevent/:id', {
			templateUrl : 'views/settlement/creategameevent.html'
		}).when('/editinteractivedetail/:id', {
			templateUrl : 'views/settlement/editinteractivedetail.html'
		}).when('/creditDistribution/:id', {
			templateUrl : 'views/clients/creditDistribution.html'
		}).when('/creditDistribution/:id', {
			templateUrl : 'views/clients/creditDistribution.html'
		}).when('/addrevenueshare/:id', {
			templateUrl : 'views/clients/addrevenueshare.html'
		}).when('/editrevenushare/:id', {
			templateUrl : 'views/clients/editrevenushare.html'
		}).when('/currencyrate', {
			templateUrl : 'views/settlement/currencyrate.html'
		}).when('/createcurrencyrate', {
			templateUrl : 'views/settlement/createcurrencyrate.html'
		}).when('/editcurrencyrate/:id', {
			templateUrl : 'views/settlement/editcurrencyrate.html'
		}).when('/businessline', {
			templateUrl : 'views/organization/businessline.html'
		}).when('/createBusinessLine', {
			templateUrl : 'views/organization/createbusinessline.html'
		}).when('/viewbusinessline/:id', {
			templateUrl : 'views/organization/viewbusinessline.html'
		}).when('/editbusinessline/:id', {
			templateUrl : 'views/organization/editbusinessline.html'
		}).when('/editoperatordeduction/:id',{
			templateUrl : 'views/settlement/editoperatordeduction.html'
		}).when('/viewpartneraccount/:id',{
			templateUrl : 'views/settlement/viewpartneraccount.html'
		}).when('/viewinteractivedetails/:id',{
			templateUrl: 'views/settlement/viewinteractivedetails.html'
		}).when('/editinteractiveheader/:id',{
			templateUrl: 'views/settlement/editinteractiveheader.html'
		});
		$locationProvider.html5Mode(false);
	};
	mifosX.ng.application.config(defineRoutes).run(function($log) {
		$log.info("Routes definition completed");
	});
}(mifosX || {}));
