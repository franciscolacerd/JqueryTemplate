$(document).ready(function () {
    $.fn.Template = function () {
        var _this = this;

        _this.obj = {};

        _this.createElements = function (o) {
            o.els.TemplateElement = o.el.find('.template-element');
        };

        _this.vars = function () {
            array: ['', ''],
            string: ''
        };
        
        _this.createFunctions = function (o) {
            o.templateFunction = (val) => o ? val : null;
        };

        _this.createEvents = function (o) {
            o.els.TemplateElement.on('click', function () { console.log('click'); })
        };

        _this.render = function (o) { };

        _this.output = {
            templateFunction: function (val) { _this.obj.templateFunction(val); },
        };

        _this.init = function () {
            var obj = {
                el: $(this),
                els: {},
                vars: {}
            };

            _this.obj = obj;

            _this.createElements(obj);
            
            _this.vars();

            _this.createFunctions(obj);

            _this.createEvents(obj);

            _this.render(obj);
        };

        this.each(_this.init);

        return _this.output;
    };
});
