/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"webdesign/Web_design/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});