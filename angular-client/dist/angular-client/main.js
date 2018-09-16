(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-employees/admin-employees.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-employees/admin-employees.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 400px;\r\n  }"

/***/ }),

/***/ "./src/app/admin-employees/admin-employees.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-employees/admin-employees.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\r\n  <mat-toolbar-row>\r\n    <span>Logo</span>\r\n    <a routerLink=\"/admin-equipment\" routerLinkActive=\"active\"><button mat-raised-button class=\"navButton\">Admin\r\n        equipment\r\n      </button></a>\r\n    <a routerLink=\"/admin-employees\"><button mat-raised-button class=\"navButton\">Admin employees\r\n      </button></a>\r\n    <a routerLink=\"/admin-projects\"><button mat-raised-button class=\"navButton\">Admin projects\r\n      </button></a>\r\n    <span class=\"example-spacer\">\r\n    </span>\r\n    <a>\r\n      <mat-icon class=\"example-icon\" (click)=\"logout()\">logout</mat-icon>\r\n    </a>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n<br>\r\n<br>\r\n<div class=\"container\">\r\n<button mat-fab color=\"accent\" (click)=\"openDialog()\">\r\n  <mat-icon aria-label=\"Example icon-button with a plus icon\">add</mat-icon>\r\n</button>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let item of empData\">\r\n      <div class=\"col-sm-6\">\r\n        <mat-card class=\"example-card\">\r\n          <mat-card-actions>\r\n              <button mat-icon-button mat-button (click)=\"deleteEmp(item._id)\">\r\n                  <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\r\n                </button>\r\n                <button mat-icon-button (click)=\"updateDialog(item.id)\">\r\n                  <mat-icon aria-label=\"Example icon-button with a heart icon\">update</mat-icon>\r\n                </button>\r\n          </mat-card-actions>\r\n          <mat-card-header>\r\n            <mat-card-title>Name : {{item.name}}</mat-card-title>\r\n            <mat-card-subtitle>Nationality: {{item.nationality}}</mat-card-subtitle>\r\n            <mat-card-subtitle>Job Title: {{item.jobTitle}}</mat-card-subtitle>\r\n          </mat-card-header>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-employees/admin-employees.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-employees/admin-employees.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminEmployeesComponent, DialogDataEmployees, DialogDataUpdateEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEmployeesComponent", function() { return AdminEmployeesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataEmployees", function() { return DialogDataEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataUpdateEmployees", function() { return DialogDataUpdateEmployees; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AdminEmployeesComponent = /** @class */ (function () {
    function AdminEmployeesComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.empData = [];
    }
    AdminEmployeesComponent.prototype.ngOnInit = function () {
        this.getEmploy(this.empData);
    };
    //this function to open the add employee dialog
    AdminEmployeesComponent.prototype.openDialog = function () {
        this.dialog.open(DialogDataEmployees);
    };
    //this function to open the update employee dialog
    AdminEmployeesComponent.prototype.updateDialog = function (id) {
        this.dialog.open(DialogDataUpdateEmployees, {
            data: { id: id }
        });
    };
    //this function to out from the page
    AdminEmployeesComponent.prototype.logout = function () {
        this.router.navigate(['home']);
    };
    //this function to retreve the data from the server
    AdminEmployeesComponent.prototype.getEmploy = function (empData) {
        if (empData === void 0) { empData = []; }
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/getEmp')
            .then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                empData.push(data.data[i]);
            }
        })
            .catch(function (err) {
            throw err;
        });
    };
    //this function to delete an employee from the server
    AdminEmployeesComponent.prototype.deleteEmp = function (id) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/deleteEmploy', { id: id })
            .then(function () {
            console.log('done');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    AdminEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-employees',
            template: __webpack_require__(/*! ./admin-employees.component.html */ "./src/app/admin-employees/admin-employees.component.html"),
            styles: [__webpack_require__(/*! ./admin-employees.component.css */ "./src/app/admin-employees/admin-employees.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AdminEmployeesComponent);
    return AdminEmployeesComponent;
}());

// this the add dialog
var DialogDataEmployees = /** @class */ (function () {
    function DialogDataEmployees(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDataEmployees.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    //this function to add an employee from the server
    DialogDataEmployees.prototype.Add = function (name, nationality, JobTitle) {
        if (name === void 0) { name = ''; }
        if (nationality === void 0) { nationality = ''; }
        if (JobTitle === void 0) { JobTitle = ''; }
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/addEmp', { name: name, nationality: nationality, JobTitle: JobTitle })
            .then(function () {
            alert("the data has been saved <3");
        })
            .catch(function (err) {
            throw err;
        });
    };
    DialogDataEmployees = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-employees',
            template: __webpack_require__(/*! ./dialog-data-employees.html */ "./src/app/admin-employees/dialog-data-employees.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], DialogDataEmployees);
    return DialogDataEmployees;
}());

// this the update dialog
var DialogDataUpdateEmployees = /** @class */ (function () {
    function DialogDataUpdateEmployees(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDataUpdateEmployees.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    //this function to update an employee from the server
    DialogDataUpdateEmployees.prototype.Update = function (id, name, nationality, jobTitle) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/updateEmp', { id: id, name: name, nationality: nationality, jobTitle: jobTitle })
            .then(function () {
            console.log('done');
        })
            .catch(function (err) {
            throw err;
        });
    };
    DialogDataUpdateEmployees = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-update-employees',
            template: __webpack_require__(/*! ./dialog-data-update-employees.html */ "./src/app/admin-employees/dialog-data-update-employees.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], DialogDataUpdateEmployees);
    return DialogDataUpdateEmployees;
}());



/***/ }),

/***/ "./src/app/admin-employees/dialog-data-employees.html":
/*!************************************************************!*\
  !*** ./src/app/admin-employees/dialog-data-employees.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Employee</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Emplyee name\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Emplyee nationality\" [(ngModel)]=\"nationality\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Emplyee JobTitle\" [(ngModel)]=\"JobTitle\">\r\n  </mat-form-field>\r\n  <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"Add(name , nationality, JobTitle)\">Add</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-employees/dialog-data-update-employees.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin-employees/dialog-data-update-employees.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update Employee</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Emplyee name\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Emplyee nationality\" [(ngModel)]=\"nationality\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Emplyee JobTitle\" [(ngModel)]=\"JobTitle\">\r\n  </mat-form-field>\r\n  <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"Update(data.id , name , nationality, JobTitle)\">Update</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-equipment/admin-equipment.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin-equipment/admin-equipment.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 400px;\r\n  }"

/***/ }),

/***/ "./src/app/admin-equipment/admin-equipment.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin-equipment/admin-equipment.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <mat-toolbar-row>\n    <span>Logo</span>\n    <a routerLink=\"/admin-equipment\" routerLinkActive=\"active\"><button mat-raised-button class=\"navButton\">Admin\n        equipment\n      </button></a>\n    <a routerLink=\"/admin-employees\"><button mat-raised-button class=\"navButton\">Admin employees\n      </button></a>\n    <a routerLink=\"/admin-projects\"><button mat-raised-button class=\"navButton\">Admin projects\n      </button></a>\n    <span class=\"example-spacer\">\n    </span>\n    <a>\n      <mat-icon class=\"example-icon\" (click)=\"logout()\">logout</mat-icon>\n    </a>\n  </mat-toolbar-row>\n</mat-toolbar>\n<br>\n<br>\n<div class=\"container\">\n  <button mat-fab color=\"accent\" (click)=\"openDialog()\">\n    <mat-icon aria-label=\"Example icon-button with a plus icon\">add</mat-icon>\n  </button>\n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div *ngFor=\"let item of equipData\">\n      <div class=\"col-sm-6\">\n        <mat-card class=\"example-card\">\n          <mat-card-actions>\n            <button mat-icon-button (click)=\"deteleEquip(item._id)\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"updateDialog(item._id)\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">update</mat-icon>\n            </button>\n          </mat-card-actions>\n          <mat-card-header>\n            <mat-card-title>Name : {{item.name}}</mat-card-title>\n            <mat-card-subtitle>Serial Number : {{item.serialNumber}}</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"{{item.attachment}}\" alt=\"Photo\">  \n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-equipment/admin-equipment.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin-equipment/admin-equipment.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminEquipmentComponent, DialogDataEquipment, DialogDataUpdateEquipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEquipmentComponent", function() { return AdminEquipmentComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataEquipment", function() { return DialogDataEquipment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataUpdateEquipment", function() { return DialogDataUpdateEquipment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AdminEquipmentComponent = /** @class */ (function () {
    function AdminEquipmentComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.equipData = [];
    }
    AdminEquipmentComponent.prototype.ngOnInit = function () {
        this.getEquip(this.equipData);
    };
    //this function to open the add equipment dialog
    AdminEquipmentComponent.prototype.openDialog = function () {
        this.dialog.open(DialogDataEquipment);
    };
    //this function to open the update equipment dialog
    AdminEquipmentComponent.prototype.updateDialog = function (id) {
        this.dialog.open(DialogDataUpdateEquipment, {
            data: { id: id }
        });
    };
    //this function to out from the page
    AdminEquipmentComponent.prototype.logout = function () {
        this.router.navigate(['home']);
    };
    //this function to retreve the data from the server
    AdminEquipmentComponent.prototype.getEquip = function (equipData) {
        if (equipData === void 0) { equipData = []; }
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/getEquip')
            .then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                equipData.push(data.data[i]);
            }
        })
            .catch(function (err) {
            throw err;
        });
    };
    //this function to delete an equipment from the server
    AdminEquipmentComponent.prototype.deteleEquip = function (id) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/deteleEquip', { id: id })
            .then(function () {
            console.log('done');
        })
            .catch(function (err) {
            throw err;
        });
    };
    AdminEquipmentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-equipment',
            template: __webpack_require__(/*! ./admin-equipment.component.html */ "./src/app/admin-equipment/admin-equipment.component.html"),
            styles: [__webpack_require__(/*! ./admin-equipment.component.css */ "./src/app/admin-equipment/admin-equipment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AdminEquipmentComponent);
    return AdminEquipmentComponent;
}());

// this the add dialog
var DialogDataEquipment = /** @class */ (function () {
    function DialogDataEquipment(dialogRef, data) {
        var _this = this;
        this.dialogRef = dialogRef;
        this.data = data;
        this.image = '';
        //this function to upload picture from the user
        this.uploadImage = function (event) {
            var img = event.target.files[0];
            var that = _this;
            var fileReader = new FileReader();
            fileReader.readAsDataURL(img);
            fileReader.onload = function (e) {
                that.image = e.target.result;
            };
        };
    }
    DialogDataEquipment.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    //this function to add an equipment from the server
    DialogDataEquipment.prototype.Add = function (name, serialNumber) {
        if (name === void 0) { name = ''; }
        if (serialNumber === void 0) { serialNumber = ''; }
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/addEquip', { name: name, serialNumber: serialNumber, image: this.image })
            .then(function () {
            console.log('done');
            window.location.reload();
        })
            .catch(function (err) {
            throw err;
        });
    };
    DialogDataEquipment = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-equipment',
            template: __webpack_require__(/*! ./dialog-data-equipment.html */ "./src/app/admin-equipment/dialog-data-equipment.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogDataEquipment);
    return DialogDataEquipment;
}());

// this the update dialog
var DialogDataUpdateEquipment = /** @class */ (function () {
    function DialogDataUpdateEquipment(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDataUpdateEquipment.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    //this function to update an equipment from the server
    DialogDataUpdateEquipment.prototype.Update = function (id, name, serialNumber) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/updateEquip', { id: id, name: name, serialNumber: serialNumber })
            .then(function () {
            console.log('done update');
        })
            .catch(function (err) {
            throw err;
        });
    };
    DialogDataUpdateEquipment = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-update-equipment',
            template: __webpack_require__(/*! ./dialog-data-update-equipment.html */ "./src/app/admin-equipment/dialog-data-update-equipment.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogDataUpdateEquipment);
    return DialogDataUpdateEquipment;
}());



/***/ }),

/***/ "./src/app/admin-equipment/dialog-data-equipment.html":
/*!************************************************************!*\
  !*** ./src/app/admin-equipment/dialog-data-equipment.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Equipment</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"equipment name\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" placeholder=\"equipment serialNumber\" [(ngModel)]=\"serialNumber\">\r\n  </mat-form-field>\r\n  <br>\r\n\r\n  <input type=\"file\" placeholder=\"equipment attachment\" (change)=\"uploadImage($event)\">\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"Add(name , serialNumber)\">Add</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-equipment/dialog-data-update-equipment.html":
/*!*******************************************************************!*\
  !*** ./src/app/admin-equipment/dialog-data-update-equipment.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update Equipment</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"equipment name\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"number\" placeholder=\"equipment serialNumber\" [(ngModel)]=\"serialNumber\">\r\n  </mat-form-field>\r\n  <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"Update(data.id, name , serialNumber)\">Update</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-projects/admin-projects.component.css":
/*!*************************************************************!*\
  !*** ./src/app/admin-projects/admin-projects.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }\r\n  \r\n  .example-card {\r\n    max-width: 400px;\r\n    \r\n  }\r\n  "

/***/ }),

/***/ "./src/app/admin-projects/admin-projects.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin-projects/admin-projects.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <mat-toolbar-row>\n    <span>Logo</span>\n    <a routerLink=\"/admin-equipment\" routerLinkActive=\"active\"><button mat-raised-button class=\"navButton\">Admin\n        equipment\n      </button></a>\n    <a routerLink=\"/admin-employees\"><button mat-raised-button class=\"navButton\">Admin employees\n      </button></a>\n    <a routerLink=\"/admin-projects\"><button mat-raised-button class=\"navButton\">Admin projects\n      </button></a>\n    <span class=\"example-spacer\">\n    </span>\n    <a>\n      <mat-icon class=\"example-icon\" (click)=\"logout()\">logout</mat-icon>\n    </a>\n  </mat-toolbar-row>\n</mat-toolbar>\n<br>\n<br>\n<div class=\"container\">\n  <button mat-fab color=\"accent\" (click)=\"openDialog()\">\n    <mat-icon aria-label=\"Example icon-button with a plus icon\">add</mat-icon>\n  </button>\n  <br>\n  <br>\n  <br>\n  <div class=\"row\">\n    <div *ngFor=\"let item of proData\">\n      <div class=\"col-sm-6\">\n        <mat-card class=\"example-card\">\n          <mat-card-actions>\n            <button mat-icon-button (click)=\"deleteProject(item._id)\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">delete</mat-icon>\n            </button>\n            <button mat-icon-button (click)=\"updateDialog(item.id)\">\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">update</mat-icon>\n            </button>\n          </mat-card-actions>\n          <mat-card-header>\n            <mat-card-title>Project Name : {{item.name}}</mat-card-title>\n            <mat-card-subtitle>Type: {{item.type}}</mat-card-subtitle>\n            <mat-card-subtitle>From: {{item.fromDate | slice:0:10}}</mat-card-subtitle>\n            <mat-card-subtitle>To: {{item.toDate | slice:0:10}}</mat-card-subtitle>\n          </mat-card-header>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin-projects/admin-projects.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin-projects/admin-projects.component.ts ***!
  \************************************************************/
/*! exports provided: AdminProjectsComponent, DialogDataProjects, DialogDataUpdateProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminProjectsComponent", function() { return AdminProjectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataProjects", function() { return DialogDataProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataUpdateProjects", function() { return DialogDataUpdateProjects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var AdminProjectsComponent = /** @class */ (function () {
    function AdminProjectsComponent(router, dialog) {
        this.router = router;
        this.dialog = dialog;
        this.proData = [];
    }
    AdminProjectsComponent.prototype.ngOnInit = function () {
        this.projectData(this.proData);
    };
    //this function to open the add project dialog
    AdminProjectsComponent.prototype.openDialog = function () {
        this.dialog.open(DialogDataProjects);
    };
    //this function to open the update project dialog
    AdminProjectsComponent.prototype.updateDialog = function (id) {
        this.dialog.open(DialogDataUpdateProjects, {
            data: { id: id }
        });
    };
    //this function to out from the page
    AdminProjectsComponent.prototype.logout = function () {
        this.router.navigate(['home']);
    };
    //this function to retreve the data from the server
    AdminProjectsComponent.prototype.projectData = function (proData) {
        if (proData === void 0) { proData = []; }
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/getProject')
            .then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                proData.push(data.data[i]);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    //this function to delete an project from the server
    AdminProjectsComponent.prototype.deleteProject = function (id) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/deletePro', { id: id })
            .then(function () {
            console.log('deleted');
            window.location.reload();
        })
            .catch(function (err) {
            throw err;
        });
    };
    AdminProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-projects',
            template: __webpack_require__(/*! ./admin-projects.component.html */ "./src/app/admin-projects/admin-projects.component.html"),
            styles: [__webpack_require__(/*! ./admin-projects.component.css */ "./src/app/admin-projects/admin-projects.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AdminProjectsComponent);
    return AdminProjectsComponent;
}());

// this the add dialog
var DialogDataProjects = /** @class */ (function () {
    function DialogDataProjects(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDataProjects.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    //this function to add an project from the server
    DialogDataProjects.prototype.Add = function (name, type, from, to) {
        if (name === void 0) { name = ''; }
        if (type === void 0) { type = ''; }
        if (from === void 0) { from = ''; }
        if (to === void 0) { to = ''; }
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/addProject', { name: name, type: type, from: from, to: to })
            .then(function () {
            console.log('done');
            window.location.reload();
        })
            .catch(function (err) {
            throw err;
        });
    };
    DialogDataProjects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-projects',
            template: __webpack_require__(/*! ./dialog-data-projects.html */ "./src/app/admin-projects/dialog-data-projects.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogDataProjects);
    return DialogDataProjects;
}());

// this the update dialog
var DialogDataUpdateProjects = /** @class */ (function () {
    function DialogDataUpdateProjects(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDataUpdateProjects.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    //this function to update an project from the server
    DialogDataUpdateProjects.prototype.Update = function (id, name, type, from, to) {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/updateProject', { id: id, name: name, type: type, from: from, to: to })
            .then(function () {
            console.log('done');
            window.location.reload();
        })
            .catch(function (err) {
            throw err;
        });
    };
    DialogDataUpdateProjects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-update-projects',
            template: __webpack_require__(/*! ./dialog-data-update-projects.html */ "./src/app/admin-projects/dialog-data-update-projects.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogDataUpdateProjects);
    return DialogDataUpdateProjects;
}());



/***/ }),

/***/ "./src/app/admin-projects/dialog-data-projects.html":
/*!**********************************************************!*\
  !*** ./src/app/admin-projects/dialog-data-projects.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Project</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Project name\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Project type\" [(ngModel)]=\"type\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field>\r\n    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Project from\" [(ngModel)]=\"from\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker1></mat-datepicker>\r\n  </mat-form-field>\r\n  \r\n  <mat-form-field>\r\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Project to\" [(ngModel)]=\"to\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"Add(name, type, from, to)\">Add</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin-projects/dialog-data-update-projects.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin-projects/dialog-data-update-projects.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Update Project</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Project name\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Project type\" [(ngModel)]=\"type\">\r\n  </mat-form-field>\r\n  <br>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"date\" placeholder=\"Project from\" [(ngModel)]=\"from\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"date\" placeholder=\"Project to\" [(ngModel)]=\"to\">\r\n  </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"Update(data.id, name, type, from, to)\">Update</button>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet>\n  \n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin-equipment/admin-equipment.component */ "./src/app/admin-equipment/admin-equipment.component.ts");
/* harmony import */ var _admin_employees_admin_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-employees/admin-employees.component */ "./src/app/admin-employees/admin-employees.component.ts");
/* harmony import */ var _admin_projects_admin_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-projects/admin-projects.component */ "./src/app/admin-projects/admin-projects.component.ts");
/* harmony import */ var _user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-projects/user-projects.component */ "./src/app/user-projects/user-projects.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-details/user-details.component */ "./src/app/user-details/user-details.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'admin-equipment',
        component: _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_5__["AdminEquipmentComponent"]
    },
    {
        path: 'admin-employees',
        component: _admin_employees_admin_employees_component__WEBPACK_IMPORTED_MODULE_6__["AdminEmployeesComponent"]
    },
    {
        path: 'admin-projects',
        component: _admin_projects_admin_projects_component__WEBPACK_IMPORTED_MODULE_7__["AdminProjectsComponent"]
    },
    {
        path: 'user-projects',
        component: _user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_8__["UserProjectsComponent"]
    },
    {
        path: 'user-details',
        component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailsComponent"]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_5__["AdminEquipmentComponent"],
                _admin_employees_admin_employees_component__WEBPACK_IMPORTED_MODULE_6__["AdminEmployeesComponent"],
                _admin_projects_admin_projects_component__WEBPACK_IMPORTED_MODULE_7__["AdminProjectsComponent"],
                _user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_8__["UserProjectsComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_9__["UserDetailsComponent"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_5__["DialogDataEquipment"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_5__["DialogDataUpdateEquipment"],
                _admin_employees_admin_employees_component__WEBPACK_IMPORTED_MODULE_6__["DialogDataEmployees"],
                _admin_employees_admin_employees_component__WEBPACK_IMPORTED_MODULE_6__["DialogDataUpdateEmployees"],
                _admin_projects_admin_projects_component__WEBPACK_IMPORTED_MODULE_7__["DialogDataProjects"],
                _admin_projects_admin_projects_component__WEBPACK_IMPORTED_MODULE_7__["DialogDataUpdateProjects"],
                _user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_8__["DialogDataLogin"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_11__["NgDragDropModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"]
            ],
            exports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["NoopAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_11__["NgDragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"]
            ],
            entryComponents: [
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_5__["AdminEquipmentComponent"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_5__["DialogDataEquipment"],
                _admin_employees_admin_employees_component__WEBPACK_IMPORTED_MODULE_6__["DialogDataEmployees"],
                _admin_projects_admin_projects_component__WEBPACK_IMPORTED_MODULE_7__["DialogDataProjects"],
                _admin_projects_admin_projects_component__WEBPACK_IMPORTED_MODULE_7__["DialogDataUpdateProjects"],
                _admin_employees_admin_employees_component__WEBPACK_IMPORTED_MODULE_6__["DialogDataUpdateEmployees"],
                _admin_equipment_admin_equipment_component__WEBPACK_IMPORTED_MODULE_5__["DialogDataUpdateEquipment"],
                _user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_8__["DialogDataLogin"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .example-spacer {\r\n    flex: 100 1 ;\r\n  }\r\n  \r\n  .navButton {\r\n      left: 200px;\r\n      margin:5px;\r\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-projects></app-user-projects>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/user-details/user-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-details/user-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\r\n  padding: 0 14px;\r\n}\r\n\r\n.example-spacer {\r\n  flex: 100 1 ;\r\n}\r\n\r\n.navButton {\r\n\tleft: 200px;\r\n\tmargin:5px;\r\n}\r\n\r\n.btn{\r\n  margin: 100px;\r\n}"

/***/ }),

/***/ "./src/app/user-details/user-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-details/user-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n    <mat-toolbar-row>\n        <span>Logo</span>\n    </mat-toolbar-row>\n</mat-toolbar>\n<h1>Project Name : {{name}}</h1>\n\n<div class=\"container\">\n    <h3>Employees</h3>\n    <div class=\"row\">\n        <div class=\"col-sm-3\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">System Employees</div>\n                <ul class=\"list-group\">\n                    <li draggable *ngFor=\"let item of empData\" [dragData]=\"item\" class=\"list-group-item\">{{item.name}}</li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"col-sm-3\">\n            <div class=\"panel panel-default\" droppable (onDrop)=\"onItemDropEmp($event)\">\n                <div class=\"panel-heading\">Assigned Employees</div>\n                <div class=\"panel-body\">\n                    <li *ngFor=\"let item of droppedEmp\" class=\"list-group-item\">{{item.name}}</li>\n                </div>\n            </div>\n        </div>\n    </div>\n    <br>\n    <br>\n    <h3>Equipment</h3>\n    <div class=\"row\">\n        <div class=\"col-sm-3\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">System Equipment</div>\n                <ul class=\"list-group\">\n                    <li draggable *ngFor=\"let item of equipData\" [dragData]=\"item\" class=\"list-group-item\">{{item.name}}</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-sm-3\">\n            <div class=\"panel panel-default\" droppable (onDrop)=\"onItemDropEquip($event)\">\n                <div class=\"panel-heading\">Assigned Equipment</div>\n                <div class=\"panel-body\">\n                    <li *ngFor=\"let item of droppedEquip\" class=\"list-group-item\">{{item.name}}</li>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <a routerLink=\"/home\"><button class=\"btn\" mat-raised-button color=\"accent\">Back</button></a>\n    <button class=\"btn\" mat-raised-button color=\"accent\" (click)=\"save(droppedEquip, droppedEmp)\">Save</button>\n</div>"

/***/ }),

/***/ "./src/app/user-details/user-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-details/user-details.component.ts ***!
  \********************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-projects/user-projects.component */ "./src/app/user-projects/user-projects.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(router) {
        this.router = router;
        this.droppedEmp = [];
        this.droppedEquip = [];
        this.empData = [];
        this.equipData = [];
        this.id = '';
        this.name = '';
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getEmploy(this.empData);
        this.getEquip(this.equipData);
        this.name = _user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_2__["jackel"]['name'];
        this.id = _user_projects_user_projects_component__WEBPACK_IMPORTED_MODULE_2__["jackel"]['id'];
    };
    UserDetailsComponent.prototype.getEquip = function (equipData) {
        if (equipData === void 0) { equipData = []; }
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/getEquip')
            .then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                equipData.push(data.data[i]);
            }
        })
            .catch(function (err) {
            throw err;
        });
    };
    //this function to retreve the data from the server
    UserDetailsComponent.prototype.getEmploy = function (empData) {
        if (empData === void 0) { empData = []; }
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/getEmp')
            .then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                empData.push(data.data[i]);
            }
        })
            .catch(function (err) {
            throw err;
        });
    };
    //this function to get data from the dropped object
    UserDetailsComponent.prototype.onItemDropEmp = function (e) {
        if (this.droppedEmp.length === 0) {
            for (var i = 0; i < this.empData.length; i++) {
                if (e.dragData.name === this.empData[i].name) {
                    this.droppedEmp.push(e.dragData);
                    this.removeEmp(e.dragData, this.empData);
                }
            }
        }
        else {
            alert("there's already an Employee");
        }
    };
    UserDetailsComponent.prototype.onItemDropEquip = function (e) {
        // Get the dropped data here
        if (this.droppedEquip.length === 0) {
            for (var i = 0; i < this.equipData.length; i++) {
                if (e.dragData.name === this.equipData[i].name) {
                    this.droppedEquip.push(e.dragData);
                    this.removeEquip(e.dragData, this.equipData);
                }
            }
        }
        else {
            alert("there's already an Equipment");
        }
    };
    //this function to save the dropped items in the database
    UserDetailsComponent.prototype.save = function (droppedEquip, droppedEmp) {
        var _this = this;
        if (droppedEquip === void 0) { droppedEquip = []; }
        if (droppedEmp === void 0) { droppedEmp = []; }
        if (this.droppedEmp[0] === undefined) {
            alert('please assign employee before');
        }
        else if (this.droppedEquip[0] === undefined) {
            alert('please assign equipment before');
        }
        else {
            axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/saveProject", { id: this.id, Employee: droppedEmp[0].name, Equipment: droppedEquip[0].name })
                .then(function () {
                console.log('done');
                _this.router.navigate(['home']);
            })
                .catch(function (err) {
                throw err;
            });
        }
    };
    //outer function to remove the item the has be dragged
    UserDetailsComponent.prototype.removeEquip = function (item, list) {
        var index = list.map(function (e) {
            return e.name;
        }).indexOf(item.name);
        list.splice(index, 1);
    };
    UserDetailsComponent.prototype.removeEmp = function (item, list) {
        var index = list.map(function (e) {
            return e.name;
        }).indexOf(item.name);
        list.splice(index, 1);
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/user-projects/dialog-data-login.html":
/*!******************************************************!*\
  !*** ./src/app/user-projects/dialog-data-login.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Login as admin</h1>\r\n<div mat-dialog-content>\r\n\t <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"text\" placeholder=\"Enter Admin Username\" [(ngModel)]=\"name\">\r\n  </mat-form-field>\r\n  <br>\r\n  \r\n <mat-form-field class=\"example-full-width\">\r\n    <input matInput type=\"password\" placeholder=\"Enter Admin Password\" [(ngModel)]=\"password\" >\r\n  </mat-form-field>\r\n  <br>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial (click)=\"login(name,password)\">Login</button>\r\n</div>"

/***/ }),

/***/ "./src/app/user-projects/user-projects.component.css":
/*!***********************************************************!*\
  !*** ./src/app/user-projects/user-projects.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n.example-icon {\r\n  padding: 0 14px;\r\n}\r\n.example-spacer {\r\n  flex: 100 1 ;\r\n}\r\n.navButton {\r\n\tleft: 200px;\r\n\tmargin:5px;\r\n}"

/***/ }),

/***/ "./src/app/user-projects/user-projects.component.html":
/*!************************************************************!*\
  !*** ./src/app/user-projects/user-projects.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <mat-toolbar-row>\n    <span>Logo</span>\n    <span class=\"example-spacer\">\n    </span>\n    <a (click)=\"openDialog()\">\n      <button mat-button color=\"primary\">\n        <h3>Login</h3>\n        <mat-icon class=\"example-icon\">person</mat-icon>\n      </button>\n    </a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <ng-container matColumnDef=\"projectName\">\n    <th mat-header-cell *matHeaderCellDef> Project Name </th>\n    <td mat-cell *matCellDef=\"let element\"><a (click)=\"nextPage(element._id, element.name)\">{{element.name}} </a></td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"employees\">\n    <th mat-header-cell *matHeaderCellDef> #Employees </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.employees}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"equipment\">\n    <th mat-header-cell *matHeaderCellDef> #Equipment </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.equipment}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"fromDate\">\n    <th mat-header-cell *matHeaderCellDef> From Date </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.fromDate | slice:0:10}}</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"toDate\">\n    <th mat-header-cell *matHeaderCellDef> To Date </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.toDate | slice:0:10}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>"

/***/ }),

/***/ "./src/app/user-projects/user-projects.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/user-projects/user-projects.component.ts ***!
  \**********************************************************/
/*! exports provided: jackel, UserProjectsComponent, DialogDataLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jackel", function() { return jackel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectsComponent", function() { return UserProjectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDataLogin", function() { return DialogDataLogin; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




//global variable to send the data to other component
var jackel = {};
var UserProjectsComponent = /** @class */ (function () {
    function UserProjectsComponent(dialog, router) {
        this.dialog = dialog;
        this.router = router;
        this.proData = [];
        this.projectName = "";
        this.dataSource = [];
        this.displayedColumns = ['projectName', 'employees', 'equipment', 'fromDate', 'toDate'];
    }
    UserProjectsComponent.prototype.ngOnInit = function () {
        this.projectData(this.proData);
    };
    //this function to open the login dialog
    UserProjectsComponent.prototype.openDialog = function () {
        this.dialog.open(DialogDataLogin);
    };
    //this function to retreve the data from the server
    UserProjectsComponent.prototype.projectData = function (proData) {
        var _this = this;
        if (proData === void 0) { proData = []; }
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/getProject')
            .then(function (data) {
            for (var i = 0; i < data.data.length; i++) {
                proData.push(data.data[i]);
            }
            _this.dataSource = _this.proData;
        })
            .catch(function (err) {
            throw err;
        });
    };
    //this function to go to th user details page and send the id and name of te project that been selected
    UserProjectsComponent.prototype.nextPage = function (id, name) {
        this.router.navigate(['user-details']);
        jackel = { id: id, name: name };
    };
    UserProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-projects',
            template: __webpack_require__(/*! ./user-projects.component.html */ "./src/app/user-projects/user-projects.component.html"),
            styles: [__webpack_require__(/*! ./user-projects.component.css */ "./src/app/user-projects/user-projects.component.css")]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserProjectsComponent);
    return UserProjectsComponent;
}());

//this is login dialog
var DialogDataLogin = /** @class */ (function () {
    function DialogDataLogin(dialogRef, data, router) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.router = router;
    }
    DialogDataLogin.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogDataLogin.prototype.login = function (name, password) {
        if (name === void 0) { name = ''; }
        if (password === void 0) { password = ''; }
        if (name.length === 0 && password.length === 0) {
            alert('please fill the inputs');
        }
        else if (name === 'admin' && password === 'admin') {
            this.router.navigate(['admin-equipment']);
        }
    };
    DialogDataLogin = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-data-login',
            template: __webpack_require__(/*! ./dialog-data-login.html */ "./src/app/user-projects/dialog-data-login.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DialogDataLogin);
    return DialogDataLogin;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Desktop\RBK\Phase 3\management-system\angular-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map