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

    async draw(value) {
      await getScriptPromisify(
        "https://cdn.fusioncharts.com/fusioncharts/3.18.0/fusioncharts.js"
      );

      var root = this.shadowRoot;
      var container = root.querySelector("#root");

      const dataSource = value;

      FusionCharts.ready(function () {
        var socialMediaPlan = new FusionCharts({
          type: "gantt",
          renderAt: container,
          width: "750",
          height: "500",
          dataFormat: "json",
          dataSource,
        }).render();
      });
    }
  }

  customElements.define("com-sza-sample-fusionchart-gantt", SamplePrepared);
})();
