var getScriptPromisify = (src) => {
  return new Promise((resolve) => {
    $.getScript(src, resolve);
  });
};

(function () {
  const prepared = document.createElement("template");
  prepared.innerHTML = `
        <style>
        </style>
        <div id="root" style="width: 100%; height: 100%;">
        </div>
      `;

  class SamplePrepared extends HTMLElement {
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: "open" });
      this._shadowRoot.appendChild(prepared.content.cloneNode(true));
      //this._root = this._shadowRoot.getElementById("root");
      this._props = {};
      this.draw();
    }

    onCustomWidgetResize(width, height) {
      this.draw();
    }

    async draw() {
      await getScriptPromisify(
        "https://cdn.fusioncharts.com/fusioncharts/3.18.0/fusioncharts.js"
      );

      var root = this.shadowRoot;
      var container = root.querySelector("#root");

      FusionCharts.ready(function () {
        var socialMediaPlan = new FusionCharts({
          type: "gantt",
          renderAt: container,
          width: "750",
          height: "500",
          dataFormat: "json",
          dataSource: {
            chart: {
              dateformat: "mm/dd/yyyy",
              caption: "Socia Media Optimization",
              subcaption: "Typical Steps Involved",
              theme: "fusion",
              canvasBorderAlpha: "40",
            },
            categories: [
              {
                category: [
                  {
                    start: "08/01/2014",
                    end: "08/31/2014",
                    label: "Aug '14",
                  },
                  {
                    start: "09/01/2014",
                    end: "09/30/2014",
                    label: "Sep '14",
                  },
                  {
                    start: "10/01/2014",
                    end: "10/31/2014",
                    label: "Oct '14",
                  },
                  {
                    start: "11/01/2014",
                    end: "11/30/2014",
                    label: "Nov '14",
                  },
                  {
                    start: "12/01/2014",
                    end: "12/31/2014",
                    label: "Dec '14",
                  },
                  {
                    start: "01/01/2015",
                    end: "01/31/2015",
                    label: "Jan '15",
                  },
                  {
                    start: "02/01/2015",
                    end: "02/28/2015",
                    label: "Feb '15",
                  },
                  {
                    start: "03/01/2015",
                    end: "03/31/2015",
                    label: "Mar '15",
                  },
                ],
              },
            ],
            processes: {
              fontsize: "12",
              isbold: "1",
              align: "right",
              process: [
                {
                  label: "Identify Customers",
                },
                {
                  label: "Survey 500 Customers",
                },
                {
                  label: "Interpret Requirements",
                },
                {
                  label: "Market Analysis",
                },
                {
                  label: "Brainstorm concepts",
                },
                {
                  label: "Define Ad Requirements",
                },
                {
                  label: "Design & Develop",
                },
                {
                  label: "Mock test",
                },
                {
                  label: "Documentation",
                },
                {
                  label: "Start Campaign",
                },
              ],
            },
            tasks: {
              task: [
                {
                  start: "08/04/2014",
                  end: "08/10/2014",
                },
                {
                  start: "08/08/2014",
                  end: "08/19/2014",
                },
                {
                  start: "08/19/2014",
                  end: "09/02/2014",
                },
                {
                  start: "08/24/2014",
                  end: "09/02/2014",
                },
                {
                  start: "09/02/2014",
                  end: "09/21/2014",
                },
                {
                  start: "09/21/2014",
                  end: "10/06/2014",
                },
                {
                  start: "10/06/2014",
                  end: "01/21/2015",
                },
                {
                  start: "01/21/2015",
                  end: "02/19/2015",
                },
                {
                  start: "01/28/2015",
                  end: "02/24/2015",
                },
                {
                  start: "02/24/2015",
                  end: "03/27/2015",
                },
              ],
            },
          },
        }).render();
      });
    }
  }

  customElements.define("com-sza-sample-fusionchart-gantt", SamplePrepared);
})();
