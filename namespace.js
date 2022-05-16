$(document).ready(function () {
    $.fn.Template = function () {
        var _this = this;

        this.obj = {};

        this.createElements = (o) => {
            o.els.TemplateElement = o.el.find('.template-element');
        };

        this.vars = function () {
            array: ['', ''];
            string: '';
        };
        
        this.createFunctions = (o) =>  {
            o.templateFunction = (val) => o ? val : null;
        };

        this.createEvents = (o) =>  {
            o.els.TemplateElement.on('click', function () { console.log('click'); })
        };

        this.render = (o) =>  { };

        var self = this;
        
        this.output = {
            templateFunction: function (val) { self.obj.templateFunction(val); },
        };

        this.init = () =>  {
            var obj = {
                el: $(this),
                els: {},
                vars: {}
            };

            this.obj = obj;

            this.createElements(obj);
            
            this.vars();

            this.createFunctions(obj);

            this.createEvents(obj);

            this.render(obj);
        };

        this.each(_this.init);

        return _this.output;
    };
});
