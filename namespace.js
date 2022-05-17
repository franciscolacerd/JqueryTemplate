$(document).ready(function () {
    $.fn.Template = function () {
        var _this = this;

        this.obj = {};

        this.createElements = (o) => {
            o.els.TemplateElement = o.el.find('.template-element');
            o.els.Id = o.el.find('.some-operation-is');
        };

        this.vars = function () {
            array: ['', ''];
            string: '';
        };
        
        this.createFunctions = (o) =>  {
            o.templateFunction = (val) => o ? val : null;
            o.getPromise = () => {
                return fetch("/controller/action?id=" + o.els.Id, {
                        method: "GET",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                    })
                    .then((response) => response.json())
                    .then(function (data) {
                        return (data ? data : null);
                    }).catch((error) => { console.error(error);  });
            };
            o.getPromiseTemplate = () =>{
                o.getPromise.then((data) => { console.log(data); });
            };
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
